import React, { Fragment } from 'react';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { DefaultProps, navigate } from '@uiw-admin/router-control';
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router"

interface MenuProps {
  collapsed?: boolean;
  routes?: DefaultProps['routes'];
}

function renderMenuItem(
  routes: MenuProps['routes'] = [],
  collapsed: boolean,
  pathName: string,
  level?: boolean,
) {
  return routes.map((item: any, index: number) => {
    const props = {
      key: index,
      icon: item.icon,
    } as MenuItemProps<any> & SubMenuProps<any>;
    if (level) {
      props.className = classnames({
        'uiw-admin-global-sider-menu-collapsed': collapsed,
      });
    }
    if (matchPath({ path: item.path, }, location.pathname)) {
      props.active = true;
    }
    if (item.index) {
      return <Fragment key={index} />;
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
          {renderMenuItem(item.routes, collapsed, pathName)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        {...props}
        onClick={() => {
          if (item.path === "/courses1/:id") {
            navigate("/courses1/12", { state: { ad: 122 } })
          } else {
            navigate(item.path)
          }
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
  const pathName = location.pathname
  return <Menu
    theme="dark"
    inlineCollapsed={!!collapsed}
    style={{ padding: '0 12px' }}
  >
    {renderMenuItem(routes, !!collapsed, pathName, true)}
  </Menu>
};
