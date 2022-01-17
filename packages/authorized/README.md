# `authorized`

## Installation

```bash
npm i @uiw-admin/authorized --save
```

## AuthPage默认导出组件

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