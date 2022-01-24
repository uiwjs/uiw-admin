@uiw-admin/basic-layouts
---

## Installation

```bash
npm i @uiw-admin/basic-layouts --save
```

## 说明
> 1. 页面整体布局
> 2. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/src/layouts/BasicLayout.tsx)


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
} & HeaderRightProps;


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
}

export interface HeaderMenuItemsProps {
  /** 标题 */ 
  title: React.ReactNode;
  /** 图标 */ 
  icon: JSX.Element | string | false | null;
  /**  点击事件 */ 
  onClick?: () => void;
  /** 分割线 */ 
  divider?: boolean;
  /** 自定义渲染 */ 
  render?: React.ReactNode;
}

```


## 案例

```tsx

import React from 'react';
import BasicLayout from '@uiw-admin/basic-layouts';
import { Outlet } from 'react-router-dom';
import { RoutersProps } from '@uiw-admin/router-control';
import { Badge, Icon } from 'uiw';
import useSWR from 'swr';

interface BasicLayoutProps {
  routes: RoutersProps[];
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const { routes } = props;
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
        onClick: () => {},
      },
      {
        title: '修改密码',
        icon: 'setting',
        onClick: () => {},
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
    <BasicLayout {...basicLayoutProps} {...props}>
      <Outlet />
    </BasicLayout>
  );
}
export default BasicLayoutScreen;


```