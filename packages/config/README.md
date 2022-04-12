# kkt配置

[![npm version](https://img.shields.io/npm/v/@uiw-admin/config.svg?label=@uiw-admin/config)](https://www.npmjs.com/package/@uiw-admin/config)

简化 `.kktrc` 配置，默认集成 `@uiw-admin/plugins`、`@kkt/less-modules`、`@kkt/raw-modules`、`@kkt/scope-plugin-options` 依赖包。
其他配置查询[`kkt`](https://github.com/kktjs/kkt)

## 安装

```bash
npm i @uiw-admin/config -D # yarn add @uiw-admin/config
```

## 参数说明(ConfigProps)

| 参数             | 必填 | 类型                                                 | 默认值                                   | 说明                                                             |
| :--------------- | :--- | :--------------------------------------------------- | :--------------------------------------- | :--------------------------------------------------------------- |
| alias            | 否   | `Record<string, string \| false \| string[]>`        | `@:指向 src 目录，@@:指向 src/.uiw 目录` | 别名                                                             |
| plugins          | 否   | `PluginsType`                                        |                                          | 插件                                                             |
| define           | 否   | `Record<string, any> & DefaultDefineType`            |                                          | 默认全局变量，📢 注意：对象的属性值会经过一次 JSON.stringify 转换 |
| ~~~loader~~~     | 否   | `KKTPlugins`                                         |                                          | kkt plugin，(⚠️将在V6版本中删除)                                  |
| kktPlugins       | 否   | `KKTPlugins`                                         |                                          | kkt plugin                                                       |
| publicPath       | 否   | `string`                                             | `/`                                      | 项目前缀                                                         |
| ~~~moreConfig~~~ | 否   | `ConfFun`                                            |                                          | 提供回调函数，更改 webpack 的最终配置 ，(⚠️将在V6版本中删除)      |
| overrideWebpack  | 否   | `ConfFun`                                            |                                          | 提供回调函数，更改 webpack 的最终配置 ，                         |
| output           | 否   | `Omit<WebpackConfiguration['output'], 'publicPath'>` |                                          | 输出                                                             |
| rematch          | 否   | `{lazyLoad(懒加载)?: boolean}`                       |                                          | `rematch`的`plugin`配置                                          |

继承[kkt](https://github.com/kktjs/kkt)配置

### ConfFun 类型

```ts
export type ConfFun = (conf: WebpackConfiguration, evn: string, options?: LoaderConfOptions | undefined) => WebpackConfiguration
```

## rematch

1. 参数 `lazyLoad`  `boolean` 类型 ，默认 `false`

```ts
import defaultConfig from "@uiw-admin/config";

export default defaultConfig({
  // ....
  rematch:{
    lazyLoad:true,
  }
})

```

### lazyLoad

1. 设置 `lazyLoad` 后 `model` 绑定路由关系，去除后面的`/models/*`或`/models.ts` 路径，匹配路由配置文件中的 `component` 属性值
2. 把`model`进行懒加载
⚠️ 注意：如果使用懒加载`model`，则调用`model`时，只能调用已经加载的，否则会报错

```txt

src
  pages
    foo/models/b.ts   绑定到  path === "/foo" 路由中
    test/models.ts  绑定到  path === "/test" 路由中

// config/routes.json
[
  {
    "path": "/foo",
    "name": "查询表格",
    "component": "@/pages/foo",
  },
  {
    "path": "/test",
    "name": "表格2",
    "component": "@/pages/test"
  },
]

```

设置 `lazyLoad` 属性需要在项目入口文件加属性

```diff
import React from 'react'
import ReactDOM from 'react-dom'
import Control from '@uiw-admin/router-control'
import '@uiw/reset.css'
import './index.css'

ReactDOM.render(
  // ....
    <Control
      routeType="hash"
+      addModels={(path) => import(`${path}`)} // 或者使用 require 引入
    />
  ,
  document.getElementById('root')
)

```

## kktPlugins 

[`KKT`](https://github.com/kktjs/kkt) 的 plugin

```ts
import defaultConfig, { WebpackConfiguration } from "@uiw-admin/config";

export default defaultConfig({
  // ....
  kktPlugins: [
    "@kkt/raw-modules",
    "@kkt/less-modules",
    ["@kkt/scope-plugin-options", { "allowedFiles": "./README.md" }],
  ],
})
```

## overrideWebpack

通过 [`KKT`](https://github.com/kktjs/kkt) 的 API 修改 webpack 配置。

```ts
import defaultConfig, { WebpackConfiguration } from "@uiw-admin/config";

export default defaultConfig({
  // ....
  overrideWebpack: (conf: WebpackConfiguration) => {
    conf.output = { ...conf.output, publicPath: './' };
    return conf
  }
})
```

## define

用于提供给代码中可用的变量。下面是自带默认值：

### DefaultDefineType 类型

| 参数          | 必填 | 类型                                         | 默认值                                | 说明                                   |
| :------------ | :--- | :------------------------------------------- | :------------------------------------ | :------------------------------------- |
| AUTH          | 否   | `string \| boolean`                          | `true`                                | 权限校验                               |
| BASE_NAME     | 否   | `string`                                     | `"/"`                                 | 路由 跳转前缀                          |
| STORAGE       | 否   | `枚举类型："local" \| "session" \| string`   | `session`                             | 本地存储使用                           |
| VERSION       | 否   | `string`                                     | 默认`package.json`中的`version`字段值 | 版本                                   |
| TOKEN_STORAGE | 否   | `枚举类型："local" \| "session" \| "cookie"` | `session`                             | token 存储方式 默认与 `STORAGE` 值相同 |
| TOKEN_NAME    | 否   | `string`                                     | `token`                               | token 存储字段                         |
| SEARCH_MENU    | 否   | `string \| boolean`                                     | `true`                               | 菜单搜索                     |

```ts
import config from "@uiw-admin/config"
export default config({
  // ...
  define:{
    // ...
    SEARCH_MENU:true
  }
})
```


## alias

配置别名，对引用路径进行映射。

```ts
import config from "@uiw-admin/config"
export default config({
  alias: {
    foo: '/tmp/a/b/foo',
  },
  //  ...
})
```

内置了以下别名：

- `@`，项目 `src` 目录
- `@@`，临时目录，通常是 `src/.uiw` 目录

## plugins 说明

### PluginsType 类型

```ts
export type PluginsType = (
  | ((this: webpack.Compiler, compiler: webpack.Compiler) => void)
  | webpack.WebpackPluginInstance
  | [string, Record<string, any>]
  | string
)[];
```

1. 使用的先行条件--插件需要默认导出是一个 class 类，符合`webpack` 的 `plugins`规范，
2. 一维数组时，直接把字符串当成包名进行加载，使用`require`进行引入后直接`new`
3. 二维数组时，直接把数组第一项当成包进行加载，使用`require`进行引入后`new`的时候把 第二项当成参数进行传递到包内部 
4. `webpack` 原始的 [`plugins`](https://webpack.docschina.org/concepts/plugins/#usage) 类型

```ts
class DemoWebpackPlugin {
  constructor(){
    // ...
  }
  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap("DemoWebpackPlugin", () => {
      // ...
    })
  }
}
```

## kktPlugins (~~旧loader~~) 参数

### KKTPlugins 类型

```ts
export type KKTPlugins = (
  | ConfFun
  | {
    loader?: ConfFun;
    options?: LoaderConfOptions | undefined | Record<string, any>;
  }
  | string
  | [string, Record<string, any>]
)[]
```

1. 使用的先行条件--需要默认导出是一个函数方法,返回类型为`webpack.Configuration `的函数
2. 一维数组时，直接把字符串当成包名进行加载，使用`require`进行引入后直接方法调用
3. 二维数组时，直接把数组第一项当成包进行加载，使用`require`进行引入后调用的时候把 第二项当成参数进行传递到包内部 

```ts
export default (conf: Configuration, env: string, options = {} as ReactLibraryOptions): Configuration => {
  conf.output = { ...conf.output, publicPath: './' };
  return conf
};
```

## 配置案例

⚠️ 注意：使用自定义 `plugins` 和 `loader` 时，请安装对应包。官方默认的 `@uiw-admin/plugins-**` 和 `loader` (`@kkt/*`) 不需要安装。

### ~~旧的配置案例~~

不推荐旧的配置案例，使用新的配置案例，它将变得更简单。

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

### 新配置案例（推荐）

```ts
import defaultConfig from "@uiw-admin/config"
export default defaultConfig({
  define: {
    STORAGE: 'local',
  },
  plugins: ["@uiw-admin/plugins-rematch", "@uiw-admin/plugins-routes"],
  kktPlugins: [
    "@kkt/raw-modules",
    "@kkt/less-modules",
    ["@kkt/scope-plugin-options", { "allowedFiles": "./README.md" }],
  ],
})
```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
