import webpack, { Configuration, } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import path from "path"
import { transformationDefineString } from "./uitls"

/** 全局默认公共参数  */
export const defaultDefine = {
  /** 权限校验  默认 true */
  AUTH: JSON.stringify(true),
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: JSON.stringify("/"),
}
export type ConfFun = (conf: Configuration, evn: string, options?: LoaderConfOptions | undefined) => Configuration

export interface ConfigProps {
  /** 别名 */
  alias?: { [s: string]: string },
  /** 插件 */
  plugins?: Configuration["plugins"],
  /** 默认全局变量 define ， 注意：对象的属性值会经过一次 JSON.stringify 转换   */
  define?: { [s: string]: any },
  /** 其他 工具 */
  loader?: (ConfFun | { loader?: ConfFun, options?: LoaderConfOptions | undefined | { [s: string]: any } })[]
  /** 项目前缀 */
  publicPath?: string;
  /** 更多的 自定义  配置 */
  moreConfig?: ConfFun;
  /** 输出 */
  output?: Omit<Configuration["output"], "publicPath">
}
export default (props: ConfigProps) => {
  const { plugins, alias, define, loader: ConfFunArr, moreConfig, publicPath = "/", output } = props || {}
  return (conf: Configuration, env: string, options: LoaderConfOptions) => {
    if (ConfFunArr) {
      ConfFunArr.forEach((fun) => {
        if (typeof fun === "function") {
          conf = fun(conf, env, { ...(options || {}) })
        } else if (fun && fun.loader) {
          const { loader, options: curOpt } = fun;
          conf = loader(conf, env, { ...(options || {}), ...(curOpt || {}) })
        }
      })
    }
    conf.plugins!.push(
      new webpack.DefinePlugin({
        ...defaultDefine,
        ...transformationDefineString(define || {}),
      }),
      ...(plugins || [])
    );
    conf.resolve!.alias = {
      ...(alias || {}),
    };
    if (publicPath && process.env.NODE_ENV === "production") {
      conf.output = {
        /** 添加 publicPath  如果不加 path ，打包会找不到文件报错 */
        path: path.resolve(process.cwd(), 'build'),
        publicPath,
        ...(output || {})
      }
    }
    if (moreConfig) {
      return moreConfig(conf, env, options)
    }
    return conf;
  }
}


