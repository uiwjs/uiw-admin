# 权限组件

[![npm version](https://img.shields.io/npm/v/@uiw-admin/authorized.svg?label=@uiw-admin/authorized)](https://www.npmjs.com/package/@uiw-admin/authorized)

判断组件的权限

## 何时使用

当项目需要根据权限判断组件是否展示
使用组件时，请在 `.kktprc.js`文件中配置全局变量

```diff
export default {
  define:{
+   AUTH:true,
    //  ...
  }
  //  ...
}

```

## 安装

```bash
npm i @uiw-admin/authorized --save # yarn add @uiw-admin/authorized
```

## AuthPage

> 可用于页面重定向

### 参数说明

| 参数         | 必填 | 类型          | 默认值   | 说明             |
| :----------- | :--- | :------------ | :------- | :--------------- |
| authority    | 否   | `boolean`     |          | 判断是否有权限展示内容    |
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
<!-- 
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
``` -->

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx

window.AUTH = true // 是否开启权限校验
window.STORAGE = "session" // 本地存储数据方式
// 上面这两种变量可以在`.kktprc.js`文件中配置全局变量(`define`)
sessionStorage.setItem('auth',JSON.stringify(["/dom/save","/dom/edit"])) // 权限数据
// 以上数据只能为了能正常渲染设置的变量

import React from "react"
import { AuthBtn } from "@uiw-admin/authorized"
import { createRoot } from 'react-dom';

const Demos = ()=>{
  return (
   <div>
     <AuthBtn path="/dom/save" >
       子集渲染1
     </AuthBtn>
     <AuthBtn path="/dom/edit" disabled >
       <button>子集渲染2</button>
     </AuthBtn>
      <AuthBtn path="/dom/edit1" disabled >
       <button>子集渲染3</button>
     </AuthBtn>
      <AuthBtn path="/dom/edit1"  >
       <button>子集渲染4</button>
     </AuthBtn>
   </div>
  )
}
createRoot(_mount_).render(<Demos />);
```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.