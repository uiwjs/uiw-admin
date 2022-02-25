# 登录页面

[![npm version](https://img.shields.io/npm/v/@uiw-admin/user-login.svg?label=@uiw-admin/user-login)](https://www.npmjs.com/package/@uiw-admin/user-login)

简化项目登录页面，为了多项目登录页面不用重新构建登录页面

## 何时使用

在不重新构建登录页面的时候使用

## 安装

```bash
npm i @uiw-admin/user-login --save  # yarn add  @uiw-admin/user-login
```

<!-- ## 参数

```ts

type FormValue = { username?: string, password?: string }

export interface UserLoginProps {
  /** 卡片框的位置 */
  align?: 'left' | 'right' | 'center';
  classNameWarp?: string;
  styleWarp?: React.CSSProperties;
  /** 卡片的 className */
  classNameBody?: string;
  /** 卡片的 style */
  styleBody?: React.CSSProperties;
  /** 页脚 */
  footer?: React.ReactNode;
  /** 背景图片 */
  bg?: string;
  /** 如果存在 children 则 覆盖默认登录框里面内容  */ 
  children?: React.ReactNode;
  /** 项目名称 */
  projectName?: string;
  /** 登录接口返回 */
  onSuccess?: (resp: any, form: FormValue | undefined) => void;
  /** 登录按钮 属性 */
  btnProps?: Omit<ButtonProps, "ref">;
  /** 请求接口 */
  api?: string;
  /** 调用接口之前 , 可以通过这个添加额外参数  返回 false 则不进行登录操作  */
  onBefore?: (store: FormValue) => { [s: string]: any } | boolean;
  /** request 请求的 options 配置参数 */
  requestConfig?: Options;
    /** 登录按钮位置 按钮组, title 为显示标题 */
  buttons?: (Omit<ButtonProps, 'ref'> & { title?: React.ReactNode })[]
   /** 默认输入框保存字段  */
  saveField?: {
    /** 登录账号 默认值 username*/
    userName?: string,
    /** 密码 默认值 password */
    passWord?: string
  }
}
``` -->

## 参数说明

| 参数          | 必填 | 类型                                                          | 默认值                                      | 说明                                                               |
| :------------ | :--- | :------------------------------------------------------------ | :------------------------------------------ | :----------------------------------------------------------------- |
| align         | 否   | `枚举类型：'left' \| 'right' \| 'center'`                     | `center`                                    | 卡片框的位置                                                       |
| footer        | 否   | `React.ReactNode`                                             |                                             | 页脚                                                               |
| bg            | 否   | `string`                                                      |                                             | 页面背
| logo            | 否   | `string`                                                      |                                             | logo头像           |
| children      | 否   | `React.ReactNode`                                             |                                             | 替换卡片位置内容                                                   |
| projectName   | 否   | `string`                                                      | `KKT`                                       | 项目名称(页面标题)                                                 |
| btnProps      | 否   | `Omit<ButtonProps, 'ref'>`                                    | `{}`                                        | 登录按钮 属性                                                      |
| buttons       | 否   | `(Omit<ButtonProps, 'ref'> & { title?: React.ReactNode })[]`  |                                             | 登录按钮位置的自定义按钮组, title 为显示标题                       |
| api           | 是   | `string`                                                      |                                             | 请求接口                                                           |
| onSuccess     | 是   | `(resp: any, form: (FormValue \| undefined)) => void`         | `()=>null`                                  | 登录接口返回                                                       |
| onBefore      | 否   | `(store: FormValue) => (Record<string, any> \| boolean)`      |                                             | 用接口之前 , 可以通过这个添加额外参数  返回 false 则不进行登录操作 |
| requestConfig | 否   | `Options`                                                     |                                             | `request` 请求 `options` 配置参数                                  |
| saveField     | 否   | `{userName(登录账号字段)?:string,passWord(密码字段)?:string}` | `{userName:"username",passWord:"password"}` | 默认输入框保存字段                                                 |
| classNameWarp | 否   | `string`                                                      |                                             | 卡片框外层`className`                                              |
| styleWarp     | 否   | `React.CSSProperties`                                         |                                             | 卡片框外层`style`                                                  |
| classNameBody | 否   | `string`                                                      |                                             | 卡片框`className`                                                  |
| styleBody     | 否   | `React.CSSProperties`                                         |                                             | 卡片框`style`                                                      |

## 基本使用

```tsx
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  const navigate = useNavigate()
  return (
    <UserLogin
      api="/api/login"
      // 登陆成功后回调
      onSuccess={(data) => {
        if (data && data.token) {
          sessionStorage.setItem("token", data.token)
          sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
          navigate("/home", { replace: true })
        } else {
         Notify.error({ title: "错误通知", description: data.message || "请求失败" })
        }
      }}
    />
  )
}
export default UserLayout;

```
## 配置接口参数
> 我们提供saveField配置登陆参数;onBefore登陆前回调;onSuccess登陆成功后回调。可更好拓展你的业务
```tsx
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  const navigate = useNavigate()
  return <UserLogin
    api="/api/login"
    // 配置登陆参数
    saveField={{
      userName: "username",
      passWord: "password"
    }}
    // 调用登陆接口之前,可以通过这个添加额外参数 返回 false 则不进行登录操作
    onBefore={(value) => ({ a: 12, b: 1221 })}
    // 登陆成功后回调
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
        navigate("/home", { replace: true })
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;

```

## 自定义按钮
> buttons可进行自定义按钮配置,从而做更多业务拓展(如注册等)
```tsx
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  const navigate = useNavigate()
  return <UserLogin
   buttons={[
       {
         title: "登录",
         htmlType: "submit",
       },
       {
         title: "注册",
       },
     ]}
    api="/api/login"
    btnProps={{ type: "primary" }}
    // 登陆成功后回调
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
        navigate("/home", { replace: true })
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;

```

## 默认预览

![](https://user-images.githubusercontent.com/49544090/150922771-8a5fa5dc-8d82-4d3c-80ac-b61dcb5eb920.png)


## 自定义按钮预览

![](https://user-images.githubusercontent.com/49544090/150929179-4854ca6c-25c8-4703-acee-9c7855821b8a.png)

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>


## License

Licensed under the MIT License.