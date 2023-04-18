# 页面整体布局

[![npm version](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?label=@uiw-admin/basic-layouts)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)

<!-- 项目的整体默认布局组件，一般默认 '/' 路由的组件 -->

## 何时使用

当项目需要默认布局的使用

## 安装

```bash
npm i @uiw-admin/basic-layouts --save # yarn add @uiw-admin/basic-layouts
```

> 在项目中，`BasicLayouts`组件下如果不使用`LayoutTabs`组件内容放`react-router-dom` 的`Outlet`组件。否则只需要放`LayoutTabs`组件即可。

```jsx
import BasicLayout from '@uiw-admin/basic-layouts';
import { Outlet } from 'react-router-dom';
import LayoutTabs from "@uiw-admin/layout-tabs"

// 不使用 LayoutTabs 组件
const Layouts = () => {
  return (
    <BasicLayout routes={[]}>
      <Outlet />
    </BasicLayout>
  )
}

// 使用 LayoutTabs 组件
const Layouts = () => {
  return (
    <BasicLayout routes={[]}>
      <LayoutTabs routes={[]} />
    </BasicLayout>
  )
}
```

## 基本使用

```jsx mdx:preview
import React from 'react'
import BasicLayout, { useLayouts } from '@uiw-admin/basic-layouts'
import LayoutTabs from "@uiw-admin/layout-tabs";

function BasicLayoutScreen() {
  const routerArrs = [
    {
      path: "/components/authorized",
      name: "权限组件",
      icon: 'appstore',
      element: <div>测试</div>,
    },
    {
      path: "/components/basic-layouts",
      name: "页面布局",
      icon: 'appstore',
      element: <div>测试2</div>,
    },
    {
      path: "/components/document-title",
      name: "页面标题",
      icon: 'appstore',
      element: <div>测试2</div>,
    }
  ]
  return (
    <div style={{ height: 400 }}>
      <BasicLayout
        isDefaultContentStyle={false}
        routes={routerArrs}
      >
        内容
      </BasicLayout>
    </div>
  )
}
export default BasicLayoutScreen
```

## 头部布局

```jsx mdx:preview
import React from 'react'
import BasicLayout, { useLayouts } from '@uiw-admin/basic-layouts'
import LayoutTabs from "@uiw-admin/layout-tabs";

function BasicLayoutScreen() {
  const routerArrs =[
    {
      path: "/components/authorized",
      name: "权限组件",
      icon: 'appstore',
      element: <div>测试</div>,
    },
    {
      path: "/components/basic-layouts",
      name: "页面布局",
      icon: 'appstore',
      element: <div>测试2</div>,
    },
    {
      path: "/components/document-title",
      name: "页面标题",
      icon: 'appstore',
      element: <div>测试2</div>,
    }
  ]
  const basicLayoutProps = {
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
  }
  return (
    <div style={{ height: 400 }}>
      <BasicLayout
        {...basicLayoutProps} 
        isDefaultContentStyle={false}
        routes={routerArrs}
      >
        内容
      </BasicLayout>
    </div>
  )
}
export default BasicLayoutScreen
```

**菜单搜索功能**

在根目录`.kktprc.js`文件配置 `SEARCH_MENU` 参数，类型：`boolen` 默认`true`

```ts
// .kktprc.js 
import config from "@uiw-admin/config"
export default config({
  define:{
    SEARCH_MENU:true
  }
})
```

## 右侧头像部分配置

> - menus配置右侧下拉菜单内容;
> - profile配置头像以及下拉菜单左侧内容;
> - onReloadAuth调用刷新权限接口;
> - layouts.closeMenu关闭菜单事件;

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
window.SEARCH_MENU = true
import React from 'react'
import BasicLayout, {
  useLayouts,
} from '@uiw-admin/basic-layouts'
import { HashRouter ,useRoutes ,Outlet} from 'react-router-dom';
import LayoutTabs from "@uiw-admin/layout-tabs"

const routerArrs = [
  {
    path: "/components/authorized",
    name: "权限组件",
    icon: 'appstore',
    element: <div>测试</div>,
  },
  {
    path: "/components/basic-layouts",
    name: "页面布局",
    icon: 'appstore',
    element: <div>测试2</div>,
  },
  {
    path: "/components/document-title",
    name: "页面标题",
    icon: 'appstore',
    element: <div>测试2</div>,
  }
]

function BasicLayoutScreen() {
  const layouts = useLayouts()
  const basicLayoutProps = {
    // 右侧下拉菜单内容
    menus: [
      {
        title: '欢迎来到uiw',
        icon: 'smile',
        // 调用关闭菜单事件
        onClick: () => layouts.closeMenu(),
      },
      {
        title: '修改密码',
        icon: 'setting',
      },
    ],
    profile: {
      // 头像地址
      avatar: '',
      // 下拉菜单左侧内容
      menuLeft:<div style={{ marginRight: 15 }}>可做自定义dom</div>
    },
    // 调用刷新接口
    onReloadAuth: () => {},
    layouts,
  }

  return (
    <div style={{ height: 400 }}>
      <BasicLayout
        {...basicLayoutProps}
        isDefaultContentStyle={false}
        routes={routerArrs}  >
        内容
      </BasicLayout>
    </div>
  )
}

export default BasicLayoutScreen
```


## 自定义退出

通过隐藏系统默认的退出登录，自定义退出登录

```jsx mdx:preview
import React from 'react'
import BasicLayout, {
  useLayouts,
} from '@uiw-admin/basic-layouts'
import LayoutTabs from "@uiw-admin/layout-tabs"
const routerArrs = [
  {
    path: "/components/authorized",
    name: "权限组件",
    icon: 'appstore',
    element: <div>测试</div>,
  },
  {
    path: "/components/basic-layouts",
    name: "页面布局",
    icon: 'appstore',
    element: <div>测试2</div>,
  },
  {
    path: "/components/document-title",
    name: "页面标题",
    icon: 'appstore',
    element: <div>测试2</div>,
  }
]

function BasicLayoutScreen() {
 
  const layouts = useLayouts()


 const basicLayoutProps = {
    // 右侧下拉菜单内容
    menus: [
      {
        title: '欢迎来到uiw',
        icon: 'smile',
        // 调用关闭菜单事件
        onClick: () => layouts.closeMenu(),
      },
      {
        title: '退出登录',
        icon: 'setting',
        onClick: () => { console.log('退出'); layouts.closeMenu() },

      },
    ],
    profile: {
      // 头像地址
      avatar: '',
      // 下拉菜单左侧内容
      menuLeft:<div style={{ marginRight: 15 }}>可做自定义dom</div>
    },
    // 调用刷新接口
    onReloadAuth: () => {},
    layouts,
    hideReloadButton: true,
    hideUserInfo: true,
    hideLogoutButton: true
  }

  return (
    <div style={{ height: 400 }}>
      <BasicLayout
        {...basicLayoutProps}
        isDefaultContentStyle={false}
        routes={routerArrs}  >
        <div style={{ padding: 14 }}>
          <LayoutTabs routes={routerArrs} /> 
          <div>注意：项目中使用 不需要设置 padding 样式</div>
        </div>
      </BasicLayout>
    </div>
  )
}
export default BasicLayoutScreen

```


## Props

| 参数                  | 必填 | 类型                                                                                     | 默认值    | 说明                     |
| :-------------------- | :--- | :--------------------------------------------------------------------------------------- | :-------- | :----------------------- |
| className                  | 否   | `string`                                                                                 |           | BasicLayout 外层className                 |
| style                  | 否   | `object`                                                                                 |           | BasicLayout 外层最外层样式式                  |
| logo                  | 否   | `string`                                                                                 |           | logo图标                 |
| projectName           | 否   | `string`                                                                                 |           | 项目名称                 |
| footer                | 否   | `React.ReactElement`                                                                     |           | 页脚                     |
| routes                | 否   | `RoutersProps[]`                                                                         |           | 菜单路由数据             |
| children              | 否   | `React.ReactNode`                                                                        |           | 内容                     |
| headerLayout          | 否   | `枚举类型："top" \| "default"`                                                           | `default` | 头部布局                 |
| headerBackground      | 否   | `string`                                                                                 | `"#fff"`  | 头部背景色               |
| headerFontColor       | 否   | `string`                                                                                 | `"#000"`  | 头部字体颜色             |
| menuHide              | 否   | `boolen`                                                                                 | `false`   | 菜单隐藏(可从路由组件router-control组件带参数hiddenMainMenu控制)             |
| menus                 | 否   | `HeaderMenuItemsProps[]`                                                                 |           | 右侧点击头像展示菜单     |
| profile               | 否   | `{avatar(头像)?:string,userName(用户名)?:string,menuLeft(菜单左侧)?:React.ReactElement}` |           | 头像部分                 |
| onReloadAuth          | 否   | `() => void`                                                                             |           | 重新加载权限             |
| layouts               | 否   | `UseLayoutsProps`                                                                        |           | 右侧点击头像展示菜单配置 |
| isDefaultContentStyle | 否   | `boolean`                                                                                | `true`    | 内容区域默认样式展示     |
| hideReloadButton | 隐藏刷新权限按钮 | `Boolean` | `false` |
| hideLogoutButton | 隐藏退出登录按钮 | `Boolean` | `false` |
| hideUserInfo | 隐藏用户信息 | `Boolean` | `false` |
| onLogout     | 否   | `(navigate: NavigateFunction) => void` |  | 覆盖原始退出事件 | 
| onLogoClick     | 否   | `(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void` |  | logo 点击事件 | 


建议：在使用 `@uiw-admin/layout-tabs` 组件渲染的时候，建议 `isDefaultContentStyle` 设置为 `false`

## useLayouts

### response
| 参数               | 必填 | 类型                                             | 默认值 | 说明 |
| :----------------- | :--- | :----------------------------------------------- | :----- | :--- |
| headerRightvisible | 否   | `boolen`                                         |        |      |
| closeMenu          | 否   | `() => void`                                     |        |      |
| updateStore        | 否   | `(datas: {headerRightvisible: boolean}) => void` |        |      |

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
