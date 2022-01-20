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
  component?: string
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


