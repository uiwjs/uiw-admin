# 页面整体布局

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

## 参数说明(BasicLayoutProps)

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

### 右侧点击头像展示菜单配置参数说明(UseLayoutsProps)

| 参数               | 必填 | 类型                                             | 默认值 | 说明 |
| :----------------- | :--- | :----------------------------------------------- | :----- | :--- |
| headerRightvisible | 否   | `boolen`                                         |        |      |
| closeMenu          | 否   | `() => void`                                     |        |      |
| updateStore        | 否   | `(datas: {headerRightvisible: boolean}) => void` |        |      |

## 案例

```tsx
import React from 'react'
import BasicLayout, {
  useLayouts,
  BasicLayoutProps as BasicLayoutType,
} from '@uiw-admin/basic-layouts'
import { Outlet } from 'react-router-dom'
import { RoutersProps } from '@uiw-admin/router-control'
import { Badge, Icon } from 'uiw'
import useSWR from 'swr'

interface BasicLayoutProps {
  routes: RoutersProps[]
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const layouts = useLayouts()

  const { mutate } = useSWR(['/api/reloadAuth', { method: 'POST' }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('auth', JSON.stringify(data.authList || []))
        localStorage.setItem('token', data.token)
        localStorage.setItem('auth', JSON.stringify(data.authList || []))
        window.location.reload()
      }
    },
  })

  const basicLayoutProps: BasicLayoutType = {
    onReloadAuth: async () => mutate(),
    // 修改密码以及其他操作在项目中进行
    menus: [
      {
        title: '欢迎来到uiw',
        icon: 'smile',
        onClick: () => layouts.closeMenu(),
      },
      {
        title: '修改密码',
        icon: 'setting',
        onClick: () => layouts.closeMenu(),
      },
    ],
    profile: {
      avatar: require('../assets/head.png'),
      menuLeft: (
        <div style={{ marginRight: 15 }}>
          <Badge count={66}>
            <Icon
              type="bell"
              // color="#fff"
              style={{ fontSize: 20 }}
            />
          </Badge>
        </div>
      ),
    },
    layouts,
    ...props,
    headerLayout: 'top',
    headerBackground: '#343a40',
    headerFontColor: '#fff',
  }
  return (
    <BasicLayout {...basicLayoutProps}>
      <Outlet />
    </BasicLayout>
  )
}
export default BasicLayoutScreen

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