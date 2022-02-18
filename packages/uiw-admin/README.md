UIW Admin Project
---

一个基于 [uiw](https://github.com/uiwjs/uiw/) 和 [kkt](https://github.com/kktjs/kkt) 的初始级别项目，集成路由、Redux、选项卡等特性。

## Open in CodeSandbox

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uiwjs/uiw-admin/tree/master/examples/base)
[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=)](https://stackblitz.com/github/uiwjs/uiw-admin/tree/master/examples/base?embed=1&hideNavigation=0&hidedevtools=0)


直接下载实例，本地预览: [`uiw-admin-ts.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-ts.zip) [`uiw-admin-js.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-js.zip)


## Packages

This git repository is a repo built using Lerna. It contains several packages:

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

## Development

使用 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces) 管理 `node_modules`

```bash
$ yarn install # Install dependencies
$ npm run build

$ npm run start # Run example website
```


Creates a [`uiw-admin`](https://github.com/uiwjs/uiw-admin) application using the command line.

## Usage

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

## Command Help

Below is a help of commands you might find useful. The example download is from https://uiwjs.github.io/uiw-admin/zip/

```bash
Usage: create-uiw-admin <app-name> [options] [--help|h]

Options:

  --version, -v   Show version number
  --help, -h      Displays help information.
  --output, -o    Output directory.
  --example, -e   Example from: https://uiwjs.github.io/uiw-admin/zip/, default: "uiw-admin-ts"
  --path, -p      Specify the download target git address.
                    default: "https://uiwjs.github.io/uiw-admin/zip/"

Example:

  yarn create uiw-admin appName
  npx create-uiw-admin my-app
  npm create uiw-admin my-app
  npm create uiw-admin my-app -f
  npm create uiw-admin my-app -p https://uiwjs.github.io/uiw-admin/zip/

Copyright 2021
```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>


## License

Licensed under the MIT License.
