@uiw-admin/user-login
---

## Installation

```bash
npm i @uiw-admin/user-login --save
```

## 参数

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
  requestConfig?: Options
}
```

## 案例

```tsx
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  const navigate = useNavigate()

  return <UserLogin
    api="/api/login"
    onBefore={(value) => ({ a: 12, b: 1221 })}
    btnProps={{ type: "primary" }}
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

## 预览

![](https://user-images.githubusercontent.com/49544090/150922771-8a5fa5dc-8d82-4d3c-80ac-b61dcb5eb920.png)

