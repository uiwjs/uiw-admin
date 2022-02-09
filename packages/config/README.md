config
===

> 简化 .kktrc 中配置

## 说明

`@` 指向 src 目录

`@@` 指向 src/.uiw 目录 

默认引用包 `@uiw-admin/plugins`、`@kkt/less-modules`、`@kkt/raw-modules`、`@kkt/scope-plugin-options`

## Installation

```bash
npm i @uiw-admin/config -D
```

## define默认值

```ts
/** 全局默认公共参数  */
export const defaultDefine = {
  /** 权限校验  默认 true */
  AUTH: JSON.stringify(true),
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME: JSON.stringify("/"),
  /** 本地存储使用 localStorage 还是  sessionStorage  可选值 local | session */
  STORAGE: JSON.stringify("session")
  /** 版本  */
  VERSION: JSON.stringify(
    require(path.resolve(process.cwd(), './package.json')).version || '0',
  ),
}
```

## 参数

```ts
export type ConfFun = (conf: Configuration, evn: string, options?: LoaderConfOptions | undefined) => Configuration
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
```

## plugins 参数说明

1. 使用的先行条件--插件需要默认导出是一个class类,符合`webpack` 的 `plugins`规范,
2. 一维数组时,直接把字符串当成包名进行加载，使用`require`进行引入后直接`new`
3. 二维数组时，直接把数组第一项当成包进行加载，使用`require`进行引入后`new`的时候把 第二项当成参数进行传递到包内部 
4. `webpack` 原始的 [`plugins`](https://webpack.docschina.org/concepts/plugins/#usage) 类型

## loader 参数说明

1. 使用的先行条件--需要默认导出是一个函数方法,返回类型为`webpack.Configuration `的函数
2. 一维数组时,直接把字符串当成包名进行加载，使用`require`进行引入后直接方法调用
3. 二维数组时，直接把数组第一项当成包进行加载，使用`require`进行引入后调用的时候把 第二项当成参数进行传递到包内部 

## ！！！注意

使用`plugins`和`loader`时,请选安装对应包

## 原始案例

```ts
import defaultConfig from "@uiw-admin/config"
import { RematchWebpackPlugin, RoutesWebpackPlugin } from '@uiw-admin/plugins'
import lessModules from '@kkt/less-modules'
import rawModules from '@kkt/raw-modules'
import scopePluginOptions from '@kkt/scope-plugin-options'
export default defaultConfig({
  define: {
    VERSION: JSON.stringify(pkg.version),
    // BASE_NAME: "/uiw"
  },
  plugins: [new RematchWebpackPlugin(), new RoutesWebpackPlugin()],
  // publicPath: process.env.NODE_ENV === "development" ? "/" : "/uiw/",
  loader: [
    rawModules,
    { loader: scopePluginOptions, options: { allowedFiles: [path.resolve(process.cwd(), 'README.md')] } },
    lessModules
  ],
})
```

## 新案例

```ts
import defaultConfig from "@uiw-admin/config"
export default defaultConfig({
   define: {
    STORAGE: 'local',
  },
  plugins: ["@uiw-admin/plugins-rematch", "@uiw-admin/plugins-routes"],
  loader: [
    "@kkt/raw-modules",
    ["@kkt/scope-plugin-options", { "allowedFiles": "./README.md" }],
    "@kkt/less-modules",
  ],
})
```