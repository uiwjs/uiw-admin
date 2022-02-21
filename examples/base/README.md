React Component Example for TypeScript.
===

Create a project for the React component library containing a website preview of the component library instance. The documents and component libraries are put into a project, all written in `TypeScript`, the component library source files are added to the `src` directory, and the document website source files are added to the `website` directory.

## Open in CodeSandbox

[![Edit uiw-admin Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/uiwjs/uiw-admin/tree/master/examples/base)

## Quick Start

**development**

Runs the project in development mode.  

```bash
npm start
```

## 目录结构

|-- /src
    |-- index.css
    |-- index.tsx
    |-- react-app-env.d.ts
    |-- assets
    |   |-- head.png
    |   |-- logo-dark.svg
    |   |-- logo-light.svg
    |-- layouts                       框架组件
    |   |-- BasicLayout.tsx
    |   |-- UserLayout.tsx
    |   |-- logo.svg
    |-- models                        remach models
    |   |-- demo.ts
    |   |-- global.ts
    |   |-- home.ts
    |   |-- login.ts
    |   |-- Doc
    |       |-- doc.ts
    |-- pages                         页面， 文件名大写
    |   |-- Dashboard
    |   |   |-- index.tsx
    |   |-- Demo
    |   |   |-- index.tsx
    |   |   |-- Detail
    |   |       |-- index.tsx
    |   |-- TableList
    |   |   |-- index.tsx
    |   |-- login
    |       |-- index.module.less
    |       |-- index.tsx
    |-- queries                       利用swr复用接口数据，各个页面都可用
    |   |-- index.tsx
    |-- routes                        路由配置
    |   |-- router.tsx
    |-- servers                       放置api文件的地方，文件名已后端接口模块名命名，不以路由命名
        |-- demo.ts
        |-- login.ts
