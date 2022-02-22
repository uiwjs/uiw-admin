# tab 选项卡布局

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

单独使用

```tsx
  import Layout from "@uiw-admin/layout-tabs"
  export default ()=>{
  return  <LayoutTabs 
  routes={[
    {
        path: "/doc/tableList",
        name: "查询表格",
        component: <div>测试</div>,
    },
     {
        path: "/doc/tableList2",
        name: "查询表格2",
        component: <div>测试2</div>,
    }
  ]} 
  />
  }
```

## 案例2

配合使用 `BasicLayout` 组件使用

```tsx

import React from 'react'
import BasicLayout from '@uiw-admin/basic-layouts'
import { RoutersProps } from '@uiw-admin/router-control'
import LayoutTabs from "@uiw-admin/layout-tabs"
interface BasicLayoutProps {
  routes: RoutersProps[]
}
function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  return (
    <BasicLayout >
      <LayoutTabs routes={props.routes || []} /> 
    </BasicLayout>
  )
}
export default BasicLayoutScreen
```

## 预览

![](https://user-images.githubusercontent.com/49544090/150922472-e8882ecc-298a-4bad-8141-0d640fd167ff.png)


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.