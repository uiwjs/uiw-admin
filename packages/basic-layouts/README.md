# 页面整体布局

[![npm version](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?label=@uiw-admin/basic-layouts)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)

项目的整体默认布局组件，一般默认 '/' 路由的组件

## 何时使用

当项目需要默认布局的使用

## 安装

```bash
npm i @uiw-admin/basic-layouts --save # yarn add @uiw-admin/basic-layouts
```
<!-- ## 参数

```ts

export type BasicLayoutProps = {
  logo?: string;
  projectName?: string;
  /**
   * 页脚
   */
  footer?: React.ReactElement;
  /** 子集路由 */ 
  routes?: RoutersProps[];
  children?: React.ReactNode;
  /** 头部 布局 */
  headerLayout?: "top" | "default",
  /** 头部背景色 */
  headerBackground?: string,
  /** 头部字体颜色 */
  headerFontColor?: string;
    /** 菜单隐藏 */
  menuHide?: boolean;
} & HeaderRightProps;


export interface HeaderMenuItemsProps {
  title: React.ReactNode;
  icon: JSX.Element | string | false | null;
  onClick?: () => void;
  divider?: boolean;
  render?: React.ReactNode;
}

export interface HeaderRightProps {
  /**
   * 菜单
   */
  menus?: Array<HeaderMenuItemsProps>;
  /**
   * avatar 头像
   * userName 用户名
   * menuLeft 菜单左侧
   */
  profile?: {
    avatar?: string;
    userName?: string;
    menuLeft?: React.ReactElement;
  };
  // 重新加载权限
  onReloadAuth: () => void;
  layouts?: UseLayoutsProps;
}

export interface Params {
  headerRightvisible: boolean;
}

export interface UseLayoutsProps {
  headerRightvisible: boolean;
  closeMenu: () => void;
  updateStore: (datas: Params) => void;
}

``` -->
## Props

| 参数             | 必填 | 类型                                                                                     | 默认值    | 说明                     |
| :--------------- | :--- | :--------------------------------------------------------------------------------------- | :-------- | :----------------------- |
| logo             | 否   | `string`                                                                                 |           | logo图标                 |
| projectName      | 否   | `string`                                                                                 |           | 项目名称                 |
| footer           | 否   | `React.ReactElement`                                                                     |           | 页脚                     |
| routes           | 否   | `RoutersProps[]`                                                                         |           | 菜单路由数据             |
| children         | 否   | `React.ReactNode`                                                                        |           | 内容                     |
| headerLayout     | 否   | `枚举类型："top" \| "default"`                                                           | `default` | 头部布局                 |
| headerBackground | 否   | `string`                                                                                 | `"#fff"`  | 头部背景色               |
| headerFontColor  | 否   | `string`                                                                                 | `"#000"`  | 头部字体颜色             |
| menuHide         | 否   | `boolen`                                                                                 | `false`   | 头部字体颜色             |
| menus            | 否   | `HeaderMenuItemsProps[]`                                                                 |           | 右侧点击头像展示菜单     |
| profile          | 否   | `{avatar(头像)?:string,userName(用户名)?:string,menuLeft(菜单左侧)?:React.ReactElement}` |           | 头像部分                 |
| onReloadAuth     | 否   | `() => void`                                                                             |           | 重新加载权限             |
| layouts          | 否   | `UseLayoutsProps`                                                                        |           | 右侧点击头像展示菜单配置 |

## useLayouts

### response
| 参数               | 必填 | 类型                                             | 默认值 | 说明 |
| :----------------- | :--- | :----------------------------------------------- | :----- | :--- |
| headerRightvisible | 否   | `boolen`                                         |        |      |
| closeMenu          | 否   | `() => void`                                     |        |      |
| updateStore        | 否   | `(datas: {headerRightvisible: boolean}) => void` |        |      |

## 基本使用
>   -  routes 渲染路由菜单
>   -  headerLayout 配置头部布局
>   -  headerBackground: 配置头部背景色
>   -  headerFontColor: 配置头部字体颜色

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```tsx
import React from 'react'
import BasicLayout, {
  useLayouts,
} from '@uiw-admin/basic-layouts'
import { HashRouter } from 'react-router-dom';
import LayoutTabs from "@uiw-admin/layout-tabs"
const routerArrs =[
  {
    path: "/basic-layouts",
    name: "查询表格",
    element: <div>测试</div>,
  },
  {
    path: "/layout-tabs",
    name: "查询表格2",
    element: <div>测试2</div>,
  }
]

function BasicLayoutScreen() {
  const basicLayoutProps = {
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
  }
  return (
    <HashRouter window={window}>
      <BasicLayout {...basicLayoutProps} routes={routerArrs}  >
        <LayoutTabs routes={routerArrs} /> 
      </BasicLayout>
    </HashRouter>
  )
}
ReactDOM.render(<BasicLayoutScreen />, _mount_);

```

## 右侧下拉菜单
>   - menus配置右侧下拉菜单内容;
>   - profile配置头像以及下拉菜单左侧内容;
>   - onReloadAuth调用刷新权限接口;
>   - layouts.closeMenu关闭菜单事件;

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react'
import BasicLayout, {
  useLayouts,
} from '@uiw-admin/basic-layouts'
import { HashRouter ,useRoutes ,Outlet} from 'react-router-dom';
import LayoutTabs from "@uiw-admin/layout-tabs"

const routerArrs =[
  {
    path: "/basic-layouts",
    name: "查询表格",
    element: <div>测试</div>,
  },
  {
    path: "/layout-tabs",
    name: "查询表格2",
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

  return <HashRouter window={window}>
      <BasicLayout {...basicLayoutProps} routes={routerArrs}  >
        <LayoutTabs routes={routerArrs} /> 
      </BasicLayout>
    </HashRouter>
}

ReactDOM.render(<BasicLayoutScreen />, _mount_);
```

## 预览

![](https://user-images.githubusercontent.com/49544090/150921430-c7c7316a-af30-41b5-873f-1f3d86cc9d03.png)


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.