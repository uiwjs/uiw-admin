# 登录页面

[![npm version](https://img.shields.io/npm/v/@uiw-admin/user-login.svg?label=@uiw-admin/user-login)](https://www.npmjs.com/package/@uiw-admin/user-login)

简化项目登录页面，为了多项目登录页面不用重新构建登录页面

## 何时使用

在不重新构建登录页面的时候使用

## 安装

```bash
npm i @uiw-admin/user-login --save  # yarn add  @uiw-admin/user-login
```

## 基本使用

`api`：登录请求接口，`onSuccess`：登陆成功后回调

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { Notify } from "uiw"
const UserLayout = () => {
  return (
    <UserLogin
      api="/api/login"
      onSuccess={(data) => {
        if (data && data.token) {
          sessionStorage.setItem("token", data.token)
          sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
        } else {
         Notify.error({ title: "错误通知", description: data.message || "请求失败" })
        }
      }}
    />
  )
}
export default UserLayout
```

## 添加额外请求参数

`onBefore`：登陆前回调，用于添加额外请求参数。如果返回 `false`， 则不进行登录请求操作

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { Notify } from "uiw"
const UserLayout = () => {
  return <UserLogin
    api="/api/login"
    onBefore={(value) => ({ a: 12, b: 1221 })}
    // onBefore={(value) => false}
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout
```

## 配置接口参数

`saveField`：配置登陆参数字段，⚠️ 注意：V6版本中删除当前属性。建议使用`defaultFieldsConfig`属性

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  return <UserLogin
    api="/api/login"
    // 配置登陆参数
    saveField={{
      userName: "username",
      passWord: "password"
    }}
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout
```

## 默认输入框属性配置

`defaultFieldsConfig`：默认输入框属性配置

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  return <UserLogin
    api="/api/login"
    defaultFieldsConfig={{
      userName:{label:"手机号",name:"phone"},
      passWord:{label:"密码"},
    }}
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout
```

## 默认登录按钮属性配置

`btnProps`：默认登录按钮属性配置，自定义的按钮不生效

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
    api="/api/login"
    btnProps={{ type: "primary" }}
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 自定义form表单项

`fields`：可进行自定义form表单项

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
   fields={[
      {
        name: "email",
        label: "邮箱",
        labelFor: 'email',
        children: (
          <input
            id={"email"}
            type="email"
            placeholder={`请输入邮箱`}
            className="form-field"
          />
        ),
      }
     ]}
    api="/api/login"
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 是否需要默认的输入框渲染

`isDefaultFields`：是否需要默认的输入框渲染

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
   fields={[
      {
        name: "email",
        label: "邮箱",
        labelFor: 'email',
        children: (
          <input
            id={"email"}
            type="email"
            placeholder={`请输入邮箱`}
            className="form-field"
          />
        ),
      }
     ]}
    isDefaultFields={false}
    api="/api/login"
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 使用配置渲染操作按钮

`buttons`：可进行自定义按钮配置,从而做更多业务拓展(如注册等)

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
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
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 自定义背景样式

`styleContainer`：自定义背景样式 ，`bg`：可直接修改背景图片

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
    styleContainer={{
      background:"url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile05.16sucai.com%2F2015%2F0615%2F0f9320e353671b9b02049dec80a7fde3.jpg&refer=http%3A%2F%2Ffile05.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648782265&t=8e140f1c56df1f31366698c0d695f36f)",
    }}
    api="/api/login"
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 自定义背景图片

`bg`：可直接修改背景图片，⚠️ 注意：V6版本中删除当前属性。建议使用`styleContainer`

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
      bg="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1-lanrentuku.qqxzb-img.com%2F2020%2F11%2F11%2Fef6f5575-ee2f-4113-b471-b8f0becf98c3.jpg%3FimageView2%2F2%2Fw%2F1024&refer=http%3A%2F%2Fi-1-lanrentuku.qqxzb-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648782888&t=33ace74f48bd36f363b577158171abd1"
    api="/api/login"
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```

## 自定义项目名称

`projectName`：自定义项目名称

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"

const UserLayout = () => {
  return <UserLogin
    projectName="项目名称"
    api="/api/login"
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
```


## 重写登录框渲染

`children`：登录框进行重写

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
import { Form, Row, Col,Button } from 'uiw';
const UserLayout = () => {
  return <UserLogin>
  <Form
      resetOnSubmit={false}
      onSubmit={({ current }) => {
        const errorObj = {};
        if (!current.username) errorObj.username = `账号不能为空！`;
        if (!current.password) errorObj.password = `密码不能为空！`;
        if (Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          throw err;
        } else {
          setStore({ ...current});
        }
      }}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      fields={{
        username: {
          label: `账号`,
          labelFor: 'username',
          children: (
            <input
              type="text"
              id="username"
              placeholder={`请输入账号`}
              className="form-field"
            />
          ),
        },
        password: {
          label: `密码`,
          labelFor: 'password',
          children: (
            <input
              id="password"
              type="password"
              placeholder={`请输入密码`}
              className="form-field"
            />
          ),
        },
      }}
    >
      {({ fields, canSubmit}) => {
        return (
          <div>
            <Row>
              <Col style={{ color: '#555' }}>{fields.username}</Col>
            </Row>
            <Row>
              <Col style={{ color: '#555' }}>{fields.password}</Col>
            </Row>
            <Row>
                <Button
                  disabled={!canSubmit()}
                  className="btns"
                  block
                  style={{ marginTop: 20 }}
                  htmlType="submit"
                  type="dark"
                >
                  登录
                </Button>
            </Row>
          </div>
        );
      }}
    </Form>
  
  </UserLogin>
}
export default UserLayout;
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

| 参数                | 必填 | 类型                                                                                      | 默认值                                      | 说明                                                               |
| ------------------- | ---- | ----------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| api                 | 是   | `string`                                                                                  |                                             | 请求接口                                                           |
| align               | 否   | `枚举类型：'left' \| 'right' \| 'center'`                                                 | `center`                                    | 卡片框的位置                                                       |
| footer              | 否   | `React.ReactNode`                                                                         |          `true`                                   | 页脚                                                               |
| bg                  | 否   | `string`                                                                                  |                                             | 页面背景图，可以`require('./image.png')`或者是图片链接             |
| logo                | 否   | `string \|''`                                                                             |                                             | logo头像, 值为`null` 不显示logo                                    |
| children            | 否   | `React.ReactNode`                                                                         |                                             | 替换卡片位置内容                                                   |
| projectName         | 否   | `string\|null`                                                                            | `UIW Admin`                                 | 项目名称(页面标题)  如果值为`null`  不显示标题                     |
| btnProps            | 否   | `Omit<ButtonProps, 'ref'>`                                                                | `{}`                                        | 登录按钮 属性                                                      |
| buttons             | 否   | `(Omit<ButtonProps, 'ref'> & { title?: React.ReactNode })[]`                              |                                             | 登录按钮位置的自定义按钮组, title 为显示标题                       |
| onSuccess           | 是   | `(resp: any, form: (FormValue \| undefined)) => void`                                     | `()=>null`                                  | 登录接口返回                                                       |
| onBefore            | 否   | `(store: FormValue) => (Record<string, any> \| boolean)`                                  |                                             | 用接口之前 , 可以通过这个添加额外参数  返回 false 则不进行登录操作 |
| requestConfig       | 否   | `Options`                                                                                 |                                             | `request` 请求 `options` 配置参数                                  |
| saveField           | 否   | `{userName(登录账号字段)?:string,passWord(密码字段)?:string}`                             | `{userName:"username",passWord:"password"}` | 默认输入框保存字段                                                 |
| defaultFieldsConfig | 否   | `{userName(账户输入框)?:Partial<FieldsProps>,passWord(密码输入框)?:Partial<FieldsProps>}` |                                             | 默认输入框保存字段                                                 |
| fields              | 否   | `FieldsProps[]`                                                                           |                                             | 自定义form表单项                                                   |
| isDefaultFields     | 否   | `boolean`                                                                                 | `true`                                      | 是否需要默认的输入框渲染                                           |
| classNameWarp       | 否   | `string`                                                                                  |                                             | 卡片框外层`className`                                              |
| styleWarp           | 否   | `React.CSSProperties`                                                                     |                                             | 卡片框外层`style`                                                  |
| classNameBody       | 否   | `string`                                                                                  |                                             | 卡片框`className`                                                  | — |
| styleBody           | 否   | `React.CSSProperties`                                                                     |                                             | 卡片框`style`                                                      |
| styleContainer      | 否   | `React.CSSProperties`                                                                     |                                             | 背景框`style` 可再次调整背景图样式                                 |

```tsx
export interface FieldsProps<T = any> extends FormFieldsProps<T> {
  /** 保存字段 */ 
  name: string;
  // 验证输入框值   value:输入框的值，current：当前表单的值，返回值为 string 类型时，进行报错提示
  verification?: (value: any, current: Record<string, any>) => string | boolean | null,
}
```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
