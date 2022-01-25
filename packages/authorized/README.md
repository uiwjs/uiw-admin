权限组件
===

## Installation

```bash
npm i @uiw-admin/authorized --save
```

## AuthPage 页面权限组件

```ts
interface AuthorizedProps {
  /** 是否已经登录 */ 
  authority?: boolean;
  children: JSX.Element;
  /** 未登录重定向路径 默认 /login */ 
  redirectPath?: string;
}
```

## getAuthPath

> 判断是否有权限

```ts
type getAuthPath = (path?: string)=>boolean 
```


## AuthBtn 

> 外层嵌套 组件，判断子组件是否有权限展示或使用

```ts
export interface AuthBtnProps {
  /** 路径 */
  path?: string;
  /** 禁用 状态 展示   适用于 存在 disabled 属性的组件  */
  disabled?: boolean;
  children: React.ReactNode;
}
```

## 案例

```tsx

import React from "react"
import { getAuthPath,AuthBtn } from "@uiw-admin/authorized"

const Demos = ()=>{
  return <div>
    <AuthBtn path="/dom/save" >
      子集渲染
    </AuthBtn>
    <AuthBtn path="/dom/edit" disabled >
      子集渲染2
    </AuthBtn>
  </div>
}
export default Demos
```