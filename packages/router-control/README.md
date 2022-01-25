路由控制
===

## Installation

```bash
npm i @uiw-admin/router-control --save
```

## 参数

```ts

// json文件格式
export interface RoutersJSON {
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
  /** 组件地址 如果是 403/404/500 的页面直接写 403/404/500 就可以了，内部直接做转化*/
  component?:string;
  /** 子集 路由 */
  routes?: RoutersJSON[];
  /** 加载 model 的文件路径 , ts 结尾的文件 */
  models?: string[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
}

export interface ControllerProps {
  /** 路由模式   默认 history  */
  routeType?: "history" | "hash" | "browser";
}

```

## routes.json 文件案例

> `@` 指向 src 目录

```json
[
  {
    "path": "/login",
    "component": "@/layouts/UserLayout"
  },
  {
    "path": "/",
    "component": "@/layouts/BasicLayout",
    "routes": [
      {
        "index": true,
        "redirect": "/tableList"
      },
      {
        "path": "/home",
        "name": "首页",
        "component": "@/pages/TableList",
        "icon": "home"
      },
      {
        "path": "/dom",
        "name": "子项",
        "icon": "copy",
        "routes": [
          {
            "path": "/dom/courses",
            "name": "Dashboard",
            "component": "@/pages/Dashboard"
          }
        ]
      },
      {
        "path": "/403",
        "name": "403",
        "hideInMenu": true,
        "component": "403"
      },
      {
        "path": "/500",
        "name": "500",
        "hideInMenu": true,
        "component": "500"
      },
      {
        "path": "/404",
        "name": "404",
        "hideInMenu": true,
        "component": "404"
      },
      {
        "path": "*",
        "name": "404",
        "component": "404"
      }
    ]
  }
]
```

## 案例

```ts
import React from "react";
import Control from '@uiw-admin/router-control';
export default ()=>{
  return (
    <Control
      routeType="hash"
    />
  )
}

```


