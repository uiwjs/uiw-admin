# tab 选项卡布局

[![npm version](https://img.shields.io/npm/v/@uiw-admin/layout-tabs.svg?label=@uiw-admin/layout-tabs)](https://www.npmjs.com/package/@uiw-admin/layout-tabs)

项目打开过的菜单在头部进行tab选项卡展示

## 何时使用

页面菜单需要tab选项卡切换功能时

## 安装

```bash
npm i @uiw-admin/layout-tabs --save # yarn add @uiw-admin/layout-tabs
```

## 配合使用 `BasicLayout` 组件使用

```jsx mdx:preview
import React from 'react'
import BasicLayout from '@uiw-admin/basic-layouts'
import LayoutTabs from "@uiw-admin/layout-tabs"
const routerArrs = [
  {
    path: "/components/authorized",
    name: "权限组件",
    icon: 'appstore',
    element: <div>测试</div>,
  },
  {
    path: "/components/basic-layouts",
    name: "页面布局",
    icon: 'appstore',
    element: <div>测试2</div>,
  },
  {
    path: "/components/layout-tabs",
    name: "选项卡",
    icon: 'appstore',
    element: <div>测试2</div>,
  }
]

function BasicLayoutScreen() {
  return (
    <div style={{ height: 400 }}>
      <BasicLayout routes={routerArrs}>
        <LayoutTabs routes={routerArrs} />
      </BasicLayout>
    </div>
  )
}
export default BasicLayoutScreen

```

## 参数

```ts
import { KktproRoutesProps } from '@kkt/pro';

interface LayoutTabsProps {
  /** 子集路由 */ 
  routes: KktproRoutesProps[]
}

```
## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.