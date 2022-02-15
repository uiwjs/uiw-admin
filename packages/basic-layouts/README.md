 页面整体布局
---
> 1. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/src/layouts/BasicLayout.tsx)

## Installation

```bash
npm i @uiw-admin/basic-layouts --save
```

## 参数

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

```

### headerLayout

> 头部布局，类型："top" | "default" ，默认：default

### headerBackground

> 头部背景色，类型：string，默认值："#fff"

### headerFontColor

> 头部字体颜色，类型：string ，默认值："#000"

## 案例

```tsx

import React from 'react';
import BasicLayout, { useLayouts } from '@uiw-admin/basic-layouts'
import { Outlet } from 'react-router-dom';
import { RoutersProps } from '@uiw-admin/router-control';
import { Badge, Icon } from 'uiw';
import useSWR from 'swr';

interface BasicLayoutProps {
  routes: RoutersProps[];
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const { routes } = props;

  const layouts = useLayouts()
  const { closeMenu } = layouts

  const { mutate } = useSWR(['/api/reloadAuth', { method: 'POST' }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('auth', JSON.stringify(data.authList || []));
        window.location.reload();
      }
    },
  });

  const basicLayoutProps = {
    onReloadAuth: async () => mutate(),
    routes: routes,
    // 修改密码以及其他操作在项目中进行
    menus: [
      {
        title: '欢迎来到uiw',
        icon: 'smile',
        onClick: () => closeMenu(),
      },
      {
        title: '修改密码',
        icon: 'setting',
        onClick: () => closeMenu(),
      },
    ],
    profile: {
      avatar: require('../assets/head.png'),
      menuLeft: (
        <div style={{ marginRight: 15 }}>
          <Badge count={66}>
            <Icon type="bell" color="#343a40" style={{ fontSize: 20 }} />
          </Badge>
        </div>
      ),
    },
  };
  return (
    <BasicLayout ref={baseRef} {...basicLayoutProps} {...props}>
      <Outlet />
    </BasicLayout>
  );
}
export default BasicLayoutScreen;
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