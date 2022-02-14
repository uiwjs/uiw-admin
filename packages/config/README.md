@uiw-admin/config
===

简化 `.kktrc` 配置，默认集成 `@uiw-admin/plugins`、`@kkt/less-modules`、`@kkt/raw-modules`、`@kkt/scope-plugin-options` 依赖包。
其他配置查询[`kkt`](https://github.com/kktjs/kkt)

## Installation

```bash
npm i @uiw-admin/config -D
```

## 参数

```ts
export type ConfFun = (conf: WebpackConfiguration, evn: string, options?: LoaderConfOptions | undefined) => WebpackConfiguration

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
)[]
export type DefaultDefineType = {
  /** 权限校验  默认 true */
  AUTH?: string | boolean;
  /** 路由 跳转前缀 默认 "/" */
  BASE_NAME?: string;
  /** 本地存储使用 localStorage 还是  sessionStorage  */
  STORAGE?: string;
  /** 版本  */
  VERSION?: string;
};

export interface ConfigProps extends Omit<WebpackConfiguration, 'plugins'> {
  /**
   * 别名
   * 默认系统内置两个别名
   * 1. `@` 指向 src 目录
   * 2. `@@` 指向 src/.uiw 目录
   */
  alias?: Record<string, string | false | string[]>;
  /** 插件 */
  plugins?:PluginsType;
  /** 默认全局变量 define ， 📢 注意：对象的属性值会经过一次 JSON.stringify 转换   */
  define?: Record<string, any> & DefaultDefineType;
   /**
    * kkt plugin 
    * @deprecated 推荐使用 `kktPlugins`
    */
  loader?:KKTPlugins;
   /**  kkt plugin  */
  kktPlugins?: KKTPlugins;
  /** 项目前缀 */
  publicPath?: string;
  /**
   * 提供回调函数，更改 webpack 的最终配置。
   * @deprecated 推荐使用 `overrideWebpack`
   */
  moreConfig?: ConfFun;
  /** 提供回调函数，更改 webpack 的最终配置。 */
  overrideWebpack?: ConfFun;
  /** 输出 */
  output?: Omit<WebpackConfiguration['output'], 'publicPath'>;
   /**  rematch 配置  */
  rematch?: {
    /** 懒加载  */
    lazyLoad?: boolean,
    /** 是否绑定到页面 */
    bindPage?: boolean
  },
}
```

## rematch 

> 1. 参数 `lazyLoad`  `boolean` 类型 ，默认 `false`，所有的`model`文件懒加载
> 2. 参数 `bindPage`  `boolean` 类型 ，默认 `false`，把`pages`下的所有`model`默认绑定到每个路径的根目录对应的路由中
> 3. 📢 `lazyLoad` 和 `bindPage` 都设置 `true`，并且使用 `import`引入，浏览器控制台会报错(使用require引入不报错或不设置`lazyLoad`属性) 。

```ts
import defaultConfig from "@uiw-admin/config";

export default defaultConfig({
  // ....
  rematch:{
    lazyLoad:true,
    bindPage:true
  }
})

```

### bindPage

设置 `bindPage` 后 `model` 绑定路由关系，去除`/models/b.ts`或`/models.ts` 路径，匹配路由配置文件中的 `component` 属性值

```txt

src
  pages
    foo/models/b.ts   绑定到  path === "/foo"
    test/models.ts  绑定到  path === "/test"

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

设置 `bindPage` 属性需要在项目入口文件加属性

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

## plugins 参数说明

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

## kktPlugins (~~旧loader~~) 参数说明

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
