import webpack, { Configuration, } from 'webpack';
import { LoaderConfOptions } from 'kkt';

/** 全局默认公共参数  */
export const defaultDefine = {
  /** 权限校验  默认 true */
  AUTH: JSON.stringify(true),
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: "/",
}
export type ConfFun = (conf: Configuration, evn: string, options?: LoaderConfOptions | undefined) => Configuration

export interface ConfigProps {
  alias?: { [s: string]: string },
  plugins?: Configuration["plugins"],
  define?: webpack.DefinePlugin["definitions"],
  loader?: (ConfFun | { loader?: ConfFun, options?: LoaderConfOptions | undefined | { [s: string]: any } })[]
}
export default (props: ConfigProps) => {
  const { plugins, alias, define, loader: ConfFunArr } = props || {}
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
        ...(define || {}),
      }),
      ...(plugins || [])
    );
    conf.resolve!.alias = {
      ...(alias || {}),
    };
    return conf;
  }
}


