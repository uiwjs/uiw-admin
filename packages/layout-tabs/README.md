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

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import LayoutTabs from "@uiw-admin/layout-tabs"
import { HashRouter } from 'react-router-dom';

const routes=[
  {
    path: "/layout-tabs",
    name: "查询表格",
    element: <div>测试</div>,
  },
  {
    path: "/doc/tableList2",
    name: "查询表格2",
    element: <div>测试2</div>,
  }
]

const Demo = ()=>{
  return (
    <HashRouter window={window}>
      <LayoutTabs routes={routes} />
   </HashRouter>
  )
}
ReactDOM.render(<Demo />, _mount_);
```

## 案例2

配合使用 `BasicLayout` 组件使用
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx

import React from 'react'
import BasicLayout from '@uiw-admin/basic-layouts'
import { RoutersProps } from '@uiw-admin/router-control'
import LayoutTabs from "@uiw-admin/layout-tabs"
import { HashRouter } from 'react-router-dom';

const routesArr=[
  {
    path: "/layout-tabs",
    name: "查询表格",
    element: <div>测试</div>,
  },
  {
    path: "/basic-layouts",
    name: "查询表格2",
    element: <div>测试2</div>,
  }
]

function BasicLayoutScreen() {
  return (
     <HashRouter window={window}>
      <BasicLayout routes={routesArr}  isDefaultContentStyle={false}  >
        <LayoutTabs routes={routesArr} /> 
      </BasicLayout>
    </HashRouter>
  )
}
ReactDOM.render(<BasicLayoutScreen />, _mount_);
```
## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.