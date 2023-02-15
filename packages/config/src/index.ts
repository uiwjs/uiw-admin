import webpack from 'webpack';
import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import path from 'path';
import { transformationDefineString, getFunDefault } from './uitls';

export * from 'kkt';

export type DefaultDefineType = {
  /** 权限校验  默认 true */
  AUTH?: string | boolean;
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME?: string;
  /** 本地存储使用 localStorage 还是  sessionStorage  */
  STORAGE?: 'local' | 'session' | string;
  /** 版本  */
  VERSION?: string;
  /** token 存储方式 */
  TOKEN_STORAGE?: 'local' | 'session' | 'cookie' | string;
  /** token 存储字段 ,默认 token  **/
  TOKEN_NAME?: string;
  /** 菜单搜索  **/
  SEARCH_MENU?: string | boolean;
};

/** 全局默认公共参数  */
export const defaultDefine: DefaultDefineType = {
  /** 权限校验  默认 true */
  AUTH: true,
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: '/',
  /** 本地存储使用 localStorage 还是  sessionStorage  */
  STORAGE: 'session', // local | session
  /** 版本  */
  VERSION:
    require(path.resolve(process.cwd(), './package.json')).version || '0',
  /** toekn 存储方式 **/
  TOKEN_STORAGE: 'session',
  /** token 存储字段 **/
  TOKEN_NAME: 'token',
  /** 菜单搜索  **/
  SEARCH_MENU: true,
};

export type ConfFun = (
  conf: WebpackConfiguration,
  evn: string,
  options?: LoaderConfOptions | undefined,
) => WebpackConfiguration;

export type PluginsType = (
  | ((this: webpack.Compiler, compiler: webpack.Compiler) => void)
  | webpack.WebpackPluginInstance
  | [string, Record<string, any>]
  | string
)[];

export type KKTPlugins = (
  | ConfFun
  | {
      loader?: ConfFun;
      options?: LoaderConfOptions | undefined | Record<string, any>;
    }
  | string
  | [string, Record<string, any>]
)[];

export interface ConfigProps extends Omit<WebpackConfiguration, 'plugins'> {
  /**
   * 别名
   * 默认系统内置两个别名
   * 1. `@` 指向 src 目录
   * 2. `@@` 指向 src/.uiw 目录
   */
  alias?: Record<string, string | false | string[]>;
  /** 插件 */
  plugins?: PluginsType;
  /** 默认全局变量 define ， 注意：对象的属性值会经过一次 JSON.stringify 转换   */
  define?: Record<string, any> & DefaultDefineType;
  /**
   * kkt plugin
   * @deprecated 推荐使用 `kktPlugins`
   */
  loader?: KKTPlugins;
  /**  kkt plugin  */
  kktPlugins?: KKTPlugins;
  /** 项目前缀 */
  publicPath?: string;
  /**
   * 提供回调函数，更改 webpack 的最终配置。
   * @deprecated 推荐使用 `overrideWebpackConf`
   */
  moreConfig?: ConfFun;
  /** 提供回调函数，更改 webpack 的最终配置。 */
  overrideWebpack?: ConfFun;
  /** 输出 */
  output?: Omit<WebpackConfiguration['output'], 'publicPath'>;
  /**  rematch 配置  */
  rematch?: {
    /** 懒加载  */
    lazyLoad?: boolean;
  };
}

export default (props: ConfigProps) => {
  const {
    plugins,
    alias,
    define,
    loader: LoaderConfig,
    kktPlugins,
    overrideWebpack,
    moreConfig,
    publicPath = '/',
    output,
    rematch,
    ...rest
  } = props || {};

  const newPlugins: PluginsType = (plugins || []).concat([
    ['@uiw-admin/plugins/lib/rematch', rematch || {}],
    ['@uiw-admin/plugins/lib/routes', rematch || {}],
  ]);
  // 冗余 API loader, 未来在 v8 版本删除
  // ==========================
  const newLoader: ConfigProps['kktPlugins'] = (LoaderConfig || [])
    .concat(kktPlugins || [])
    .concat([
      '@kkt/raw-modules',
      [
        '@kkt/scope-plugin-options',
        { allowedFiles: path.resolve(process.cwd(), 'README.md') },
      ],
      '@kkt/less-modules',
    ]);

  return (
    conf: WebpackConfiguration,
    env: string,
    options: LoaderConfOptions,
  ) => {
    // kkt plugin => laoder
    if (newLoader) {
      newLoader.forEach((fun) => {
        if (typeof fun === 'string') {
          conf = getFunDefault(fun)(conf, env, options);
        } else if (Array.isArray(fun)) {
          const [paths, rest] = fun;
          conf = getFunDefault(paths)(conf, env, { ...options, ...rest });
        } else if (typeof fun === 'function') {
          conf = fun(conf, env, options);
        } else if (fun && fun.loader) {
          const { loader, options: curOpt } = fun;
          conf = loader(conf, env, { ...(options || {}), ...(curOpt || {}) });
        }
      });
    }
    // webpack plugin
    const plugin: WebpackConfiguration['plugins'] = [];
    if (Array.isArray(newPlugins)) {
      newPlugins.forEach((pathArr) => {
        if (typeof pathArr === 'string') {
          const Cls = getFunDefault(pathArr);
          plugin.push(new Cls());
        } else if (Array.isArray(pathArr)) {
          const [paths, rest] = pathArr;
          const Cls = getFunDefault(paths);
          plugin.push(new Cls(rest));
        } else {
          plugin.push(pathArr);
        }
      });
    }

    if (define && Reflect.has(define, 'STORAGE')) {
      defaultDefine.TOKEN_STORAGE = Reflect.get(define, 'STORAGE');
    }
    conf.plugins!.push(
      new webpack.DefinePlugin({
        ...transformationDefineString({ ...defaultDefine, ...(define || {}) }),
        BINDPAGR: JSON.stringify(!!rematch?.lazyLoad),
      }),
      ...plugin,
    );

    conf.resolve = {
      ...conf.resolve,
      alias: {
        ...conf.resolve?.alias,
        ...(alias || {}),
        '@': path.resolve(process.cwd(), 'src'),
        '@@': path.resolve(process.cwd(), 'src/.uiw'),
      },
    };

    if (publicPath && process.env.NODE_ENV === 'production') {
      conf.output = {
        /** 添加 publicPath  如果不加 path ，打包会找不到文件报错 */
        path: path.resolve(process.cwd(), 'build'),
        publicPath,
        ...(output || {}),
      };
    }
    // 冗余 API moreConfig, 未来在 v8 版本删除
    // ==========================
    if (moreConfig) {
      return moreConfig({ ...conf, ...rest }, env, options);
    }
    if (overrideWebpack) {
      return overrideWebpack({ ...conf, ...rest }, env, options);
    }
    return { ...conf, ...rest };
  };
};
