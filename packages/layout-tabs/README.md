layout-tabs
===

## Installation

```bash
npm i @uiw-admin/layout-tabs --save
```

> tab 选项卡布局

## 参数

```ts
import { RoutersProps, } from "@uiw-admin/router-control"

interface LayoutTabsProps {
  /** 子集路由 */ 
  routes: RoutersProps[]
}
```

## 案例

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
