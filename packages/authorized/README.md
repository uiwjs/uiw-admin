# 权限组件

判断组件的权限

## 何时使用

当项目需要根据权限判断组件是否展示

## 安装

```bash
npm i @uiw-admin/authorized --save # yarn add @uiw-admin/authorized
```

## AuthPage
> 可用于页面重定向
### 参数说明

| 参数         | 必填 | 类型          | 默认值   | 说明             |
| :----------- | :--- | :------------ | :------- | :--------------- |
| authority    | 否   | `boolean`     |          | 是否已经登录     |
| redirectPath | 否   | `string`      | `/login` | 未登录重定向路径 |
| children     | 是   | `JSX.Element` |          | 是否已经登录     |
```tsx
import AuthPage  from "@uiw-admin/authorized"
export default ()=>{
  return <AuthPage authority={false} redirectPath="/login">展示</AuthPage>
}
```

## getAuthPath

> 判断是否有权限

```ts
type getAuthPath = (path?: string)=>boolean 

import {getAuthPath}  from "@uiw-admin/authorized"

const isAuth = getAuthPath("/api/path")
```


## AuthBtn

> 外层嵌套 组件，判断子组件是否有权限展示或使用

### 参数说明
| 参数     | 必填 | 类型              | 默认值  | 说明                                            |
| :------- | :--- | :---------------- | :------ | :---------------------------------------------- |
| path     | 否   | `string`          |         | 路径                                            |
| disabled | 否   | `boolean`         | `false` | 禁用 状态 展示(适用于 存在 disabled 属性的组件) |
| children | 是   | `React.ReactNode` |         | 内容                                            |

```tsx
import React from "react"
import { AuthBtn } from "@uiw-admin/authorized"

const Demos = ()=>{
  return (
   <div>
     <AuthBtn path="/dom/save" >
       子集渲染
     </AuthBtn>
     <AuthBtn path="/dom/edit" disabled >
       子集渲染2
     </AuthBtn>
   </div>
  )
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