import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import path from 'path';
import { transformationDefineString } from './uitls';

/** 全局默认公共参数  */
export const defaultDefine = {
  /** 权限校验  默认 true */
  AUTH: JSON.stringify(true),
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: JSON.stringify('/'),
  /** 本地存储使用 localStorage 还是  sessionStorage  */
  STORAGE: JSON.stringify('session'), // local | session
  /** 版本  */
  VERSION: JSON.stringify(
    require(path.resolve(process.cwd(), './package.json')).version || '0',
  ),
};

export type ConfFun = (
  conf: Configuration,
  evn: string,
  options?: LoaderConfOptions | undefined,
) => Configuration;

export interface ConfigProps extends Omit<Configuration, 'plugins'> {
  /**
   * 别名
   * 默认系统内置两个别名
   * 1. `@` 指向 src 目录
   * 2. `@@` 指向 src/.uiw 目录
   */
  alias?: Record<string, string | false | string[]>;
  /** 插件 */
  plugins?:
    | Configuration['plugins']
    | ([string, Record<string, any>] | string)[];
  /** 默认全局变量 define ， 注意：对象的属性值会经过一次 JSON.stringify 转换   */
  define?: Record<string, any> & Partial<typeof defaultDefine>;
  /** 其他 工具 */
  loader?: (
    | ConfFun
    | {
        loader?: ConfFun;
        options?: LoaderConfOptions | undefined | Record<string, any>;
      }
    | string
    | [string, Record<string, any>]
  )[];
  /** 项目前缀 */
  publicPath?: string;
  /** 更多的 自定义  配置 */
  moreConfig?: ConfFun;
  /** 输出 */
  output?: Omit<Configuration['output'], 'publicPath'>;
}

export default (props: ConfigProps) => {
  const {
    plugins,
    alias,
    define,
    loader: LoaderConfig,
    moreConfig,
    publicPath = './',
    output,
    ...rest
  } = props || {};

  return (conf: Configuration, env: string, options: LoaderConfOptions) => {
    // laoder
    if (LoaderConfig) {
      LoaderConfig.forEach((fun) => {
        if (typeof fun === 'string') {
          conf = require(fun)(conf, env, options);
        } else if (Array.isArray(fun)) {
          const [paths, rest] = fun;
          conf = require(paths)(conf, env, { ...options, ...rest });
        } else if (typeof fun === 'function') {
          conf = fun(conf, env, options);
        } else if (fun && fun.loader) {
          const { loader, options: curOpt } = fun;
          conf = loader(conf, env, { ...(options || {}), ...(curOpt || {}) });
        }
      });
    }
    // plugin
    const plugin: Configuration['plugins'] = [];
    if (Array.isArray(plugins)) {
      plugins.forEach((pathArr) => {
        if (typeof pathArr === 'string') {
          const Cls = require(pathArr);
          plugin.push(new Cls());
        } else if (Array.isArray(pathArr)) {
          const [paths, rest] = pathArr;
          const Cls = require(paths);
          plugin.push(new Cls(rest));
        } else {
          plugin.push(pathArr);
        }
      });
    }

    conf.plugins!.push(
      new webpack.DefinePlugin({
        ...defaultDefine,
        ...transformationDefineString(define || {}),
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
    if (moreConfig) {
      return moreConfig({ ...conf, ...rest }, env, options);
    }
    return { ...conf, ...rest };
  };
};
