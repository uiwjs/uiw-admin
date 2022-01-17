# router-control

## Installation

```bash
npm i @uiw-admin/router-control --save
```

## 参数

```ts
export interface Routers extends Omit<RouteObject, "children"> {
  key?: string;
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 组件 */
  component?: JSX.Element | React.LazyExoticComponent<(props?: any) => JSX.Element>;
  /** 子集 路由 */
  routes?: Routers[]
  /** 加载 model 的文件名称 */
  models?: string[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean
}

```


## 案例

```ts
import { Exceptions403, Exceptions500, Exceptions404 } from "@uiw-admin/exceptions"
import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    models: ["login"],
    component: React.lazy(() => import("../pages/login"))
  },
  {
    path: "/",
    models: ["global", "Doc/doc", "demo"],
    component: <BasicLayout />,
    routes: [
      {
        index: true,
        redirect: '/tableList'
      },
      {
        path: "/tableList",
        name: "查询表格",
        component: React.lazy(() => import("../pages/TableList")),
      },
      {
        path: "/home",
        name: "首页",
        models: ["home"],
        component: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/dom",
        name: "子项",
        routes: [
          {
            path: "/dom/courses",
            name: "Dashboard",
            component: React.lazy(() => import("../pages/Dashboard")),
          },
          {
            path: "/dom/home",
            name: "home",
            component: React.lazy(() => import("../pages/Home")),
          },
        ]
      },
      {
        path: "/403",
        name: "403",
        component: <Exceptions403 />
      },
      {
        path: "/500",
        name: "500",
        component: <Exceptions500 />
      },
      {
        path: "*",
        name: "404",
        component: <Exceptions404 />
      },

    ]
  },
];
```


