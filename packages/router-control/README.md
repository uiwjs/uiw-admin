# 菜单路由管理

[![npm version](https://img.shields.io/npm/v/@uiw-admin/router-control.svg?label=@uiw-admin/router-control)](https://www.npmjs.com/package/@uiw-admin/router-control)

在项目根目录的`config/routes.json`配置菜单路由

> 1. 进行路由处理转换
> 2. 进行路由权限处理

⚠️ 注意：

  1. 菜单路由文件优先级 `json > ts > js`
  2. 菜单路由使用`js`和`ts`文件时，如果文件中已经书写 `import React from "react"` 这句代码，在生成的 `.uiw/routes.tsx` 文件中不会再次进行生成

## 安装

```bash
npm i @uiw-admin/router-control --save # yarn add  @uiw-admin/router-control
```

## 路由控制组件参数

| 参数       | 必须 | 类型                                          | 默认值    | 说明                                   |
| :--------- | :--- | :-------------------------------------------- | :-------- | :------------------------------------- |
| routeType  | 否   | `"history" \| "hash" \| "browser"`            | `hash`    | 路由模式                               |
| addModels  | 否   | `(path: string) => Promise<{ default: any }>` | undefined |                                        |
| isAutoAuth | 否   | `boolean`                                     | `true` | 是否自动校验 "/" 的路由 token 是否存在 |
| notLoginMenus | 否   | `string[] \| RegExp \| ((current: string) => boolean)`  |   | 控制哪些菜单是可以不用登录直接展示的  |
| navigateTo | 否   | `string \| ((current: string) => boolean)`  |   |  判断 "/" 路径 的权限  重定向跳转地址  |

> 如果验证登录的字段不是token,可通过https://uiwjs.github.io/uiw-admin/#/config?title=defaultdefinetype-%E7%B1%BB%E5%9E%8B TOKEN_NAME 自定义

⚠️注意：`notLoginMenus` 参数控制哪些菜单是可以不用登录直接展示的，当使用这个的时候的时候注意📢在不登录的情况下配置路由中 `isAuth` 参数无效 ，直接走`notLoginMenus`返回值判断。当登录的情况下，在路由的权限没有存储本地的情况下，才会调用`notLoginMenus`进行判断当前路由权限

⚠️注意： `routeType`值为 `history`或`browser` 的时候需要设置 `kktrc` 配置 `publicPath` 值为 `"/"`

```ts
// kktrc.ts 
// ...
export default defaultConfig({
  publicPath:"/",
  // ...
})
```

## 不需要登录可以展示的菜单

```diff
// /src/index.tsx

// ...
import Control from '@uiw-admin/router-control'

export default ()=>{
    // ...
   return (
    <Control
      routeType="hash"
+     notLoginMenus={["/home"]}
    />
  )
}

```


## 自定义控制页面权限

需要更改两个文件

[Control 组件参数](https://uiwjs.github.io/uiw-admin/#/authorized?title=authpage)

```diff
// /src/index.tsx

// ...
import Control from '@uiw-admin/router-control'

export default ()=>{
    // ...
   return (
    <Control
      routeType="hash"
+     isAutoAuth={false}
    />
  )
}

```

[AuthPage 组件参数](https://uiwjs.github.io/uiw-admin/#/authorized?title=authpage)

```diff
# // /src/layouts/BasicLayout.tsx

# // ...
+ import AuthPage from "@uiw-admin/authorized"

export default ()=>{
    // ...
   return (
    #  authority 自定义控制页面权限 是否跳转登录页
+    <AuthPage authority={true} redirectPath="/login" >
     # // ...
+    </AuthPage>
  )
}

```


## 菜单路由参数

| 参数       | 必须 | 类型                         | 默认值    | 说明                                                                                                             |
| :--------- | :--- | :--------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |
| index      | 否   | `boolean`                    | undefined | 默认跳转(与`redirect`一起使用)                                                                                   |
| redirect   | 否   | `string`                     | undefined | 重定向  当`index===true`生效                                                                                     |
| path       | 否   | `string`                     | undefined | 跳转路由                                                                                                         |
| name       | 否   | `string`                     | undefined | 菜单名称                                                                                                         |
| icon       | 否   | `string \| React.React.Node` | undefined | 菜单图标标                                                                                                       |
| component  | 否   | `string`                     | undefined | 渲染组件的路径(如果是`403/404/500`的页面直接写 `403/404/500`,使用`@uiw-admin/plugins`里面的`routes`时会进行转换) |
| hideInMenu | 否   | `boolean`                    | 无        | 是否隐藏菜单                                                                                                     |
| isAuth     | 否   | `boolean`                    | 无        | 用于路由校验权限， 注意：如果存在这个字段则以这个字段权限为准，不走其他校验                                                |
| routes     | 否   | `RoutersJSON[]`              | 无        | 子集 路由 ,(参数与菜单路由参数一致)                                                                              |
| navigate   | 否   | `string`                     | 无        | 自定义跳转(`"(navigate) => {console.log('navigate', navigate)}"`)                                                |

## 自定义菜单图标

注意：使用`js`或`ts`文件才有自定义功能

```js
// config/routes.js

import { chat } from "@/assets"
import { Icon } from "uiw"
import React from "react"
const routes = [
  {
    "path": "/",
    "component": "@/layouts/BasicLayout",
    "routes": [
      {
        "index": true,
        "redirect": "/tableList"
      },
      {
        "path": "/tableList",
        "name": "查询表格",
        "component": "@/pages/TableList",
        "icon": <Icon type={chat} />,
      },
    ]
  }
]
export default routes
```
<!-- ## 参数

```ts

// json文件格式
export interface RoutersJSON {
  key?: string;
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string | React.React.Node;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 组件地址 如果是 403/404/500 的页面直接写 403/404/500 就可以了，内部直接做转化*/
  component?:string;
  /** 子集 路由 */
  routes?: RoutersJSON[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限， 注意：如果存在这个字段则以这个字段权限为准 */
  isAuth?: boolean;
}

export interface ControllerProps {
  /** 路由模式   默认 history  */
  routeType?: "history" | "hash" | "browser";
  /** 加载 model 方法，(解决import引用地址问题报错) */ 
  addModels?: (path: string) => Promise<{ default: any }>;
  /** 是否自动校验 "/" 路由  token 是否存在   */
  isAutoAuth?: boolean;
}

``` -->

## 组件提供-路由跳转方法

1. `navigate` 由 `react-router-dom`的`useNavigate` hook 赋值生成
2. `history` 当 `routeType="history"` 才能使用，[使用方式](https://github.com/remix-run/history/blob/dev/docs/navigation.md)

```ts
// navigate 使用方式
navigate("/demo",{/** ... */})

// history 使用方式
history.push("/demo");
history.push("/demo?d=12", { some: "state" });
history.push(
  {
    pathname: "/demo",
    search: "?d=12",
  },
  {
    some: 1212,
  }
);
history.go(-1);
history.back();
```

## routes.json案例

> `@` 指向 src 目录

```json
[
  {
    "path": "/login",
    "component": "@/layouts/UserLayout"
  },
  {
    "path": "/",
    "component": "@/layouts/BasicLayout",
    "routes": [
      {
        "index": true,
        "redirect": "/tableList"
      },
      {
        "path": "/home",
        "name": "首页",
        "component": "@/pages/TableList",
        "icon": "home"
      },
      {
        "path": "/dom",
        "name": "子项",
        "icon": "copy",
        "routes": [
          {
            "path": "/dom/courses",
            "name": "Dashboard",
            "component": "@/pages/Dashboard"
          }
        ]
      },
      {
        "path": "/403",
        "name": "403",
        "hideInMenu": true,
        "component": "403"
      },
      {
        "path": "/500",
        "name": "500",
        "hideInMenu": true,
        "component": "500"
      },
      {
        "path": "/404",
        "name": "404",
        "hideInMenu": true,
        "component": "404"
      },
      {
        "path": "*",
        "name": "404",
        "component": "404"
      }
    ]
  }
]
```

## 案例

```ts
import React from "react";
import Control from '@uiw-admin/router-control';
export default ()=>{
  return (
    <Control
      routeType="hash"
       // addModels={(path) => import(`${path}`)}
    />
  )
}

```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.