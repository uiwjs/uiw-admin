# tab 选项卡布局

[![npm version](https://img.shields.io/npm/v/@uiw-admin/layout-tabs.svg?label=@uiw-admin/layout-tabs)](https://www.npmjs.com/package/@uiw-admin/layout-tabs)

项目打开过的菜单在头部进行tab选项卡展示

## 何时使用

页面菜单需要tab选项卡切换功能时

## 安装

```bash
npm i @uiw-admin/layout-tabs --save # yarn add @uiw-admin/layout-tabs
```

## 参数

```ts
import { RoutersProps, } from "@uiw-admin/router-control"

interface LayoutTabsProps {
  /** 子集路由 */ 
  routes: RoutersProps[]
}

```

## 案例

单独使用，⚠️ 注意：需要路由包裹


```jsx mdx:preview
import React from 'react';
import LayoutTabs from "@uiw-admin/layout-tabs";
import { HashRouter } from 'react-router-dom';
window.SEARCH_MENU = true;

const routes = [
  {
    path: "/components/layout-tabs",
    name: "选项卡布局",
    element: <div>测试</div>,
  },
  {
    path: "/components/user-login",
    name: "登录",
    element: <div>测试2</div>,
  }
]

const Demo = ()=>{
  return (
    <LayoutTabs routes={routes} />
  )
}
export default Demo
```


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.