config
===

> 简化 .kktrc 中配置

## Installation

```bash
npm i @uiw-admin/config --save
```

## 说明

> 1. `@` 指向 src 目录
> 2. `@@` 指向 src/.uiw 目录


## define默认值

```ts
/** 全局默认公共参数  */
export const defaultDefine = {
  /** 权限校验  默认 true */
  AUTH: JSON.stringify(true),
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: JSON.stringify("/"),
}
```

## 参数

```ts
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
```

## 案例

```ts
import defaultConfig from "@uiw-admin/config"

export default defaultConfig({
  define: {
    VERSION: JSON.stringify(pkg.version),
    // BASE_NAME: "/uiw"
  },
  // publicPath: process.env.NODE_ENV === "development" ? "/" : "/uiw/",
  loader: [
    rawModules,
    { loader: scopePluginOptions, options: { allowedFiles: [path.resolve(process.cwd(), 'README.md')] } },
    lessModules
  ],
})
```