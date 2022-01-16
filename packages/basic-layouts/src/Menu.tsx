import React, { Fragment } from 'react';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { DefaultProps, } from '@uiw-admin/router-control';
import { useLocation, useNavigate } from "react-router-dom";
import { matchPath, NavigateFunction } from "react-router"

interface MenuProps {
  collapsed?: boolean;
  routes?: DefaultProps['routes'];
}

function renderMenuItem(
  routes: MenuProps['routes'] = [],
  collapsed: boolean,
  pathName: string,
  navigate: NavigateFunction,
  level?: boolean,
) {
  return routes.map((item: any, index: number) => {
    const props = {
      key: index,
      icon: item.icon,
    } as MenuItemProps<any> & SubMenuProps<any>;
    let isAuth = true;
    if (Reflect.has(item, "isAuth")) {
      isAuth = Reflect.get(item, "isAuth")
    }
    if (item.index || item.hideInMenu || !isAuth || item.path === "*") {
      return <Fragment key={index} />;
    }
    if (level) {
      props.className = classnames({
        'uiw-admin-global-sider-menu-collapsed': collapsed,
      });
    }
    if (matchPath({ path: item.path, }, location.pathname)) {
      props.active = true;
    }
    if (item.routes) {
      if (collapsed) {
        props.overlayProps = {
          isOutside: true,
          usePortal: true,
        };
      }
      return (
        <Menu.SubMenu {...props} text={item.name || '-'} collapse={collapsed}>
          {renderMenuItem(item.routes, collapsed, pathName, navigate)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        {...props}
        onClick={() => {
          /** 在这边加路由权限 控制就好了 */
          // isAuth 这边加这个属性
          // 1. 如果加了这个属性 说明  跳转需求进行权限校验
          // 2. 如果没加这个属性 说明  跳转不用权限校验
          // 3. 加了这个属性为 false 说明 这个路由是没权限的，需要跳转403页面
          // 4. 加了这个属性为 true 说明 这个路由是有权限的，跳转正常页面
          // if (item.path === "/courses1/:id") {
          //   navigate("/courses1/12", { state: { ad: 122 }, replace: true })
          // } else {
          navigate(item.path, { replace: true })
          // }
        }}
        to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

export default (props: MenuProps = {}) => {
  const { routes = [], collapsed } = props;
  const location = useLocation()
  const navigate = useNavigate()
  const pathName = location.pathname
  return <Menu
    theme="dark"
    inlineCollapsed={!!collapsed}
    style={{ padding: '0 12px' }}
  >
    {renderMenuItem(routes, !!collapsed, pathName, navigate, true)}
  </Menu>
};
