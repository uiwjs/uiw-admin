tab 选项卡布局
===

## Installation

```bash
npm i @uiw-admin/layout-tabs --save
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

## 预览

![](https://user-images.githubusercontent.com/49544090/150922472-e8882ecc-298a-4bad-8141-0d640fd167ff.png)