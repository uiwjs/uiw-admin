router-control
===

## Installation

```bash
npm i @uiw-admin/router-control --save
```

## 参数

```ts

// json文件格式
export interface RoutersJSON extends Omit<Routers, "component"> {
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
  component?:string;
  /** 子集 路由 */
  routes?: Routers[];
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


