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

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.