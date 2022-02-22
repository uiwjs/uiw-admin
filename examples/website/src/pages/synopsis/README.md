## 简介

UIW Admin
---

uiw-admin是基于[React17.x](https://react.docschina.org/)、 [uiw](https://github.com/uiwjs/uiw/) 、  [kkt](https://github.com/kktjs/kkt)的管理系统架构。 采用前后端分离，内置了许多管理系统常用功能，通过一些脚本、封装帮助开发人员快速开发管理系统，集中精力处理业务逻辑。

## 预览

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uiwjs/uiw-admin/tree/master/examples/base)
[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=)](https://stackblitz.com/github/uiwjs/uiw-admin/tree/master/examples/base?embed=1&hideNavigation=0&hidedevtools=0)


直接下载实例，本地预览: [`uiw-admin-ts.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-ts.zip) [`uiw-admin-js.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-js.zip)

## ✨ 特性

- 🌈 企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 后台管理框架。
- 🛡 使用 TypeScript 开发。
- ⚙️  集成登陆、Redux、选项卡等特性。
- 🌴 完备路由，同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。
## 🛡 TypeScript

参考 [使用 TypeScript ](https://www.tslang.cn/)。

## 🔗 相关依赖

| Package                                                                                | Version                                                                                                                                   | Description                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`@uiw-admin/basic-layouts`](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | [![npm](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | 用于布局的组件                                            |
| [`@uiw-admin/document-title`](https://www.npmjs.com/package/@uiw-admin/document-title) | [![npm](https://img.shields.io/npm/v/@uiw-admin/document-title.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/document-title) | 设置页面标题                                              |
| [`@uiw-admin/router-control`](https://www.npmjs.com/package/@uiw-admin/router-control) | [![npm](https://img.shields.io/npm/v/@uiw-admin/router-control.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/router-control) | 路由管理                                                  |
| [`@uiw-admin/user-login`](https://www.npmjs.com/package/@uiw-admin/user-login)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/user-login)         | 登录界面                                                  |
| [`@uiw-admin/components`](https://www.npmjs.com/package/@uiw-admin/components)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/components.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/components)         | 常见的业务组件                                            |
| [`@uiw-admin/models`](https://www.npmjs.com/package/@uiw-admin/models)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/models.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/models)                 | 简化 [`rematch`](https://github.com/rematch/rematch) 配置 |
| [`@uiw-admin/exceptions`](https://www.npmjs.com/package/@uiw-admin/exceptions)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/exceptions.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/exceptions)         | 公共异常组件                                              |
| [`@uiw-admin/config`](https://www.npmjs.com/package/@uiw-admin/config)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/config.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/config)                 | 简化 [`kkt`](https://github.com/kktjs/kkt) 配置           |
| [`@uiw-admin/plugins`](https://www.npmjs.com/package/@uiw-admin/plugins)               | [![npm](https://img.shields.io/npm/v/@uiw-admin/plugins.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/plugins)               | [`kkt`](https://github.com/kktjs/kkt) 插件                |

## 目录结构
> 一个基础的 uiw-admin 项目大致是这样的，
```
.
├── README.md
├── config
│   └── routes.json   路由配置
├── mocker  mock 数据
│   ├── auth
│   │   └── index.js
│   ├── demo.js
│   ├── index.js
│   ├── login.js
│   └── selectPage.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── sandbox.config.json
├── src
│   ├── assets
│   │   ├── head.png
│   │   ├── logo-dark.svg
│   │   └── logo-light.svg
│   ├── index.css
│   ├── index.tsx
│   ├── layouts 框架组件
│   │   ├── BasicLayout.tsx
│   │   ├── UserLayout.tsx
│   │   └── logo.svg
│   ├── models    remach models
│   │   ├── Doc
│   │   │   └── doc.ts
│   │   ├── demo.ts
│   │   ├── global.ts
│   │   ├── home.ts
│   │   └── login.ts
│   ├── pages  页面， 文件名大写
│   │   ├── Dashboard
│   │   │   └── index.tsx
│   │   ├── Demo
│   │   │   ├── Detail
│   │   │   │   ├── index.tsx
│   │   │   │   └── items.tsx
│   │   │   └── index.tsx
│   │   ├── TableList
│   │   │   └── index.tsx
│   │   └── login
│   │       ├── index.module.less
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   └── servers 放置api文件的地方，文件名已后端接口模块名命名，不以路由命名
│       └── index.ts
└── tsconfig.json

```

### 根目录

#### package.json
> 包含插件和插件集

#### .kktrc.ts
> 配置文件，包含 kkt 内置功能和插件的配置。

#### mocker 目录
> 存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。

#### config 目录
> route.json路由配置文件

### /src 目录

#### .uiw 目录
> 临时文件目录，比如入口rematch、路由等，都会被临时生成到这里。不要提交 .uiw 目录到 git 仓库，他们会在 yarn run 时被删除并重新生成。

#### layouts目录
> BasicLayout.tsx约定式路由时的全局布局文件。

#### layouts目录
> UserLayout.tsx登陆页面文件

#### servers目录
> 放置api文件的地方，文件名已后端接口模块名命名，不以路由命名

#### models 目录
> remtach全局状态管理

#### index.tsx
> 入口文件，运行时配置，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

##  ❤️ 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.