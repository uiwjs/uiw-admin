import { Fragment } from 'react';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { DefaultProps, RoutesBaseProps } from '@uiw-admin/router-control';
import { useLocation, useNavigate } from 'react-router-dom';
import { matchPath, NavigateFunction } from 'react-router';

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
    } as Omit<MenuItemProps<any> & SubMenuProps<any>, 'ref'>;
    let isAuth = true;
    if (Reflect.has(item, 'isAuth')) {
      isAuth = Reflect.get(item, 'isAuth');
    }
    if (item.index || item.hideInMenu || !isAuth || item.path === '*') {
      return <Fragment key={index} />;
    }
    if (level) {
      props.className = classnames({
        'uiw-admin-global-sider-menu-collapsed': collapsed,
      });
    }
    if (matchPath({ path: item.path }, pathName)) {
      props.active = true;
    }

    if (item.routes) {
      if (collapsed) {
        props.overlayProps = {
          isOutside: true,
          usePortal: true,
        };
      }
      if (
        item.routes.find((route: RoutesBaseProps) => route.path === pathName)
      ) {
        props.overlayProps = {
          isOpen: true,
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
          if (Reflect.has(item, 'navigate') && item.navigate) {
            if (typeof item.navigate === 'function') {
              item.navigate(navigate);
              return;
            }
            const Fun = new Function(`return ${item.navigate}`)();
            if (typeof Fun === 'function') {
              Fun(navigate);
            }
            return;
          }
          navigate(item.path, { replace: true });
        }}
        // to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

export default (props: MenuProps = {}) => {
  const { routes = [], collapsed } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;

  return (
    <Menu
      theme="dark"
      inlineCollapsed={!!collapsed}
      style={{ padding: '0 12px' }}
    >
      {renderMenuItem(routes, !!collapsed, pathName, navigate, true)}
    </Menu>
  );
};
