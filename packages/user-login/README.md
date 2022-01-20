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
  children?: React.ReactNode;
  /** 项目名称 */
  projectName?: string;
  /** 登录接口返回 */
  onSuccess?: (resp: any, form: FormValue | undefined) => void;
  /** 登录按钮 属性 */
  btnProps?: Omit<ButtonProps, "ref">;
  /** 请求接口 */
  api?: string;
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



