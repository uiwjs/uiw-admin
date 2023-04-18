import React, { Fragment } from 'react';
import { KktproRoutesProps } from '@kkt/pro';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { matchPath, NavigateFunction } from 'react-router';
import { Icon } from 'uiw';
import SearchMenus from './Search';

type Options = {
  location: Location;
};

export interface MenuProps {
  collapsed?: boolean;
  allRoutes?: KktproRoutesProps[];
  routes?: KktproRoutesProps[];
}

export const onNavigate = (
  item: Omit<KktproRoutesProps, 'navigate'> & { navigate: Function | string },
  navigate: NavigateFunction,
  options: Options,
) => {
  if (item && Reflect.has(item, 'navigate') && item.navigate) {
    if (typeof item.navigate === 'function') {
      item.navigate(navigate, options);
      return;
    }
    const Fun = new Function(`return ${item.navigate}`)();
    if (typeof Fun === 'function') {
      Fun(navigate, options);
    }
    return;
  }
  return true;
};

function renderMenuItem(
  routes: MenuProps['routes'] = [],
  collapsed: boolean,
  pathName: string,
  navigate: NavigateFunction,
  options: Options,
  level?: boolean,
) {
  return routes.map((item: any, index: number) => {
    const props = {
      key: index,
      icon: item.icon ? <Icon type={item.icon} /> : undefined,
    } as Omit<MenuItemProps<any> & SubMenuProps<any>, 'ref'>;
    let isAuth = true;
    if (Reflect.has(item, 'isAuth')) {
      isAuth = Reflect.get(item, 'isAuth');
    }
    if (
      (item.index && item.redirect) ||
      item.hideInMenu ||
      item.hiddenMainMenu ||
      !isAuth ||
      item.path === '*'
    ) {
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

    if (item.children && !item.side) {
      if (collapsed) {
        props.overlayProps = {
          isOutside: true,
          usePortal: true,
        };
      }
      if (
        item.children.find(
          (route: KktproRoutesProps) => route.path === pathName,
        ) &&
        !collapsed
      ) {
        props.overlayProps = {
          isOpen: true,
        };
      }

      return (
        <Menu.SubMenu {...props} text={item.name || '-'} collapse={collapsed}>
          {renderMenuItem(
            item.children,
            collapsed,
            pathName,
            navigate,
            options,
          )}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        {...props}
        onClick={() => {
          const result = onNavigate(item, navigate, options);
          if (!result) {
            return;
          }
          if (item.children && item.children.length > 0) {
            const filterData = item.children.filter(
              (item2: KktproRoutesProps) => item2.redirect,
            );
            navigate(filterData[0].redirect, { replace: true });
          } else {
            navigate(item.path, { replace: true });
          }
        }}
        // to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

export default (props: MenuProps = {}) => {
  const { routes = [], collapsed, allRoutes } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;

  const searchMenu =
    // @ts-ignore
    (SEARCH_MENU && collapsed) ||
    // @ts-ignore
    (SEARCH_MENU ? <SearchMenus routes={allRoutes} /> : <Fragment />);
  return (
    <React.Fragment>
      {searchMenu}
      <Menu
        theme="dark"
        inlineCollapsed={!!collapsed}
        style={{ padding: '0 12px' }}
      >
        {renderMenuItem(
          routes,
          !!collapsed,
          pathName,
          navigate,
          { location },
          true,
        )}
      </Menu>
    </React.Fragment>
  );
};
