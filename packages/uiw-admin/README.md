UIW Admin Project
===

[![Build and Deploy](https://github.com/uiwjs/uiw-admin/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/uiw-admin/actions/workflows/ci.yml)
[![Downloads](https://img.shields.io/npm/dm/uiw-admin.svg?style=flat)](https://www.npmjs.com/package/uiw-admin)
[![npm version](https://img.shields.io/npm/v/uiw-admin.svg)](https://www.npmjs.com/package/uiw-admin)
[![npm unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/uiw-admin/file/README.md)

一个基于 [uiw](https://github.com/uiwjs/uiw/) 和 [@kkt/pro](https://github.com/kktjs/kkt-pro) 的初始级别项目。

## 👀 预览

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uiwjs/uiw-admin/tree/master/examples/base)
[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=)](https://stackblitz.com/github/uiwjs/uiw-admin/tree/master/examples/base?embed=1&hideNavigation=0&hidedevtools=0)

## ✨ 特性

- 🌈 企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 后台管理框架。
- 🛡 使用 TypeScript 开发。
- ⚙️ 集成登陆、Redux、选项卡等特性。
- 🌴 完备路由，同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。

## 🔗 相关依赖

| Package | Version | Description |
| ---- | ---- | ---- |
| [`@uiw-admin/basic-layouts`](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | [![npm](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | 用于布局的组件 |
| [`@uiw-admin/document-title`](https://www.npmjs.com/package/@uiw-admin/document-title) | [![npm](https://img.shields.io/npm/v/@uiw-admin/document-title.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/document-title) | 设置页面标题 |
| [`@uiw-admin/user-login`](https://www.npmjs.com/package/@uiw-admin/user-login)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/user-login)         | 登录界面 |
| [`@uiw-admin/components`](https://www.npmjs.com/package/@uiw-admin/components)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/components.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/components)         | 常见的业务组件 |
| [`@uiw-admin/models`](https://www.npmjs.com/package/@uiw-admin/models)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/models.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/models)                 | 简化 [`rematch`](https://github.com/rematch/rematch) 配置 |
| [`@uiw-admin/exceptions`](https://www.npmjs.com/package/@uiw-admin/exceptions)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/exceptions.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/exceptions)         | 公共异常组件 |
| [`@uiw-admin/config`](https://www.npmjs.com/package/@uiw-admin/config)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/config.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/config)                 | 简化 [`kkt`](https://github.com/kktjs/kkt) 配置           |
| [`@uiw-admin/plugins`](https://www.npmjs.com/package/@uiw-admin/plugins)               | [![npm](https://img.shields.io/npm/v/@uiw-admin/plugins.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/plugins)               | [`kkt`](https://github.com/kktjs/kkt) 插件                |
| [`eslint-config-uiw-admin`](https://www.npmjs.com/package/eslint-config-uiw-admin) | [![npm](https://img.shields.io/npm/v/eslint-config-uiw-admin.svg?maxAge=3600)](https://www.npmjs.com/package/eslint-config-uiw-admin) | uiw-admin 内置 eslint 规则配置 |

##  ⌨️ 快速开始

> 1. 直接下载实例文件
[`uiw-admin-ts.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-ts.zip)
[`uiw-admin-js.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-js.zip)

> 2. 通过命令创建项目

```shell
# npm 6.x
$ npm init uiw-admin my-app --example uiw-admin-ts
# npm 7+, extra double-dash is needed:
$ npm init uiw-admin my-app -- --example uiw-admin-ts

$ yarn create uiw-admin [appName]
# or npm
$ npm create uiw-admin my-app
# or npx
$ npx create-uiw-admin my-app
```
## 📦 开发启动

> 使用 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces) 管理 `node_modules`

```bash
$ cd uiw-admin

$ yarn install

$ yarn build

$ yarn start

```

## ✨默认账号密码

- 账号: admin
- 密码: admin

## 🔨 生产构建

```bash
$ cd uiw-admin

$ yarn build
```

## 📗 目录结构

> 一个基础的 uiw-admin 项目大致是这样的，

```bash
.
├── README.md
├── config
│   └── routes.json  # 路由配置
├── mocker           # mock 数据
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
│   ├── layouts             # 框架组件
│   │   ├── BasicLayout.tsx # 框架菜单
│   │   ├── UserLayout.tsx  # 登陆页面
│   │   └── logo.svg
│   ├── models    remach models
│   │   ├── Doc
│   │   │   └── doc.ts
│   │   ├── demo.ts
│   │   ├── global.ts
│   │   ├── home.ts
│   │   └── login.ts
│   ├── pages                 # 页面， 文件名大写
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
│   └── servers               # 放置api文件的地方，文件名已后端接口模块名命名，不以路由命名
│       └── index.ts
└── tsconfig.json
```

## 页面代码结构推荐
为了让项目代码组织更加规范，让开发能够更方便的定位到相关页面组件代码，我们定义了一套规范，该规范当前只作为推荐的指导，并非强制。
```bash
src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.module.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.module.less
    ├── User
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码
```

所有路由组件（会配置在路由配置中的组件）我们推荐以大驼峰命名打平到 pages 下面第一级（复杂的项目可以增加 group 层级，在 group 下放置 pages）。不建议在路由组件内部再嵌套路由组件 - 不方便分辨一个组件是否是路由组件，而且不方便快速从全局定位到路由组件。

我们推荐尽可能的拆分路由组件为更细粒度的组件，对于多个页面可能会用到的组件我们推荐放到 src/components 中，对于只是被单个页面依赖的（区块）组件，我们推荐就近维护到路由组件文件夹下即可。

##  ❤️ 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
