import React, { Fragment } from 'react';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { DefaultProps, history } from '@uiw-admin/router-control';
interface MenuProps {
  collapsed?: boolean;
  routes?: DefaultProps['routes'];
}

function renderMenuItem(
  routes: MenuProps['routes'] = [],
  collapsed: boolean,
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
    if (item.index) {
      return <Fragment key={index} />;
    }
    if (item.children) {
      if (collapsed) {
        props.overlayProps = {
          isOutside: true,
          usePortal: true,
        };
      }
      return (
        <Menu.SubMenu {...props} text={item.name || '-'} collapse={collapsed}>
          {renderMenuItem(item.children, collapsed)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        {...props}
        // tagName={}
        onClick={() => {
          history.push(item.path)
        }}
        to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

export default (props: MenuProps = {}) => {
  const { routes = [] } = props;
  return (
    <Menu
      theme="dark"
      inlineCollapsed={!!props.collapsed}
      style={{ padding: '0 12px' }}
    >
      {renderMenuItem(routes, !!props.collapsed, true)}
    </Menu>
  );
};
