import React, { Fragment } from 'react';
import classnames from 'classnames';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import {
  DefaultProps,
  RoutesBaseProps,
  Routers,
} from '@uiw-admin/router-control';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { matchPath, NavigateFunction } from 'react-router';
import { getRoutesList } from './../utils';
import { SearchSelect, SearchSelectOptionData } from 'uiw';

import pinyin from 'pinyin';

type ValueType = string | number;

type Options = {
  location: Location;
};

interface MenuProps {
  collapsed?: boolean;
  routes?: DefaultProps['routes'];
}

export const onNavigate = (
  item: Omit<Routers, 'navigate'> & { navigate: Function | string },
  navigate: NavigateFunction,
  options: Options,
) => {
  if (Reflect.has(item, 'navigate') && item.navigate) {
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
      icon: item.icon,
    } as Omit<MenuItemProps<any> & SubMenuProps<any>, 'ref'>;
    let isAuth = true;
    if (Reflect.has(item, 'isAuth')) {
      isAuth = Reflect.get(item, 'isAuth');
    }
    if (
      (item.index && item.redirect) ||
      item.hideInMenu ||
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

    if (item.routes && !item.side) {
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
          {renderMenuItem(item.routes, collapsed, pathName, navigate, options)}
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
          navigate(item.path, { replace: true });
        }}
        // to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

const SearchMenus = (props: MenuProps) => {
  const { routes = [] } = props || {};
  const location = useLocation();
  const navigate = useNavigate();

  const listRouters = React.useMemo(() => {
    return getRoutesList(routes);
  }, [routes]);

  const listMenus = React.useMemo(() => {
    return listRouters
      .filter((item) => {
        return (
          item &&
          'name' in item &&
          !item.hideInMenu &&
          !item.index &&
          item.path !== '*'
        );
      })
      .map((item) => {
        let pyInitials = pinyin(item.name || '', {
          style: pinyin.STYLE_FIRST_LETTER,
        });

        let py = pinyin(item.name || '', {
          style: pinyin.STYLE_NORMAL,
        });

        let pyInitialsValue = '';
        let pyValue = '';

        if (Array.isArray(py)) {
          pyValue = py.join('');
        }

        if (Array.isArray(pyInitials)) {
          pyInitialsValue = pyInitials.join('');
        }
        return {
          label: item.name,
          value: item.path,
          py: pyValue,
          pyInitials: pyInitialsValue,
        } as SearchSelectOptionData;
      });
  }, [listRouters]);

  const [list, setList] = React.useState<SearchSelectOptionData[]>(listMenus);

  const onChange = (
    event: SearchSelectOptionData[] | ValueType | ValueType[],
  ) => {
    if (Array.isArray(event)) {
      const [obj] = event;
      if (obj && typeof obj === 'object' && obj.value) {
        const current: any = listRouters.find(
          (item) => item.path === obj.value,
        );
        const result = onNavigate(current, navigate, { location });
        if (!result) {
          return;
        }
        navigate(current.path, { replace: true });
      }
    }
  };

  const handleSearch = (value: string) => {
    if (value) {
      const li = listMenus.filter((item) => {
        const Reg = new RegExp(`${value}`);
        if (
          Reg.test(item.label) ||
          Reg.test(item.py) ||
          Reg.test(item.pyInitials)
        ) {
          return true;
        }
        return false;
      });
      setList(li);
    } else {
      setList(listMenus);
    }
  };

  return (
    <div style={{ marginBottom: 10, padding: '0px 10px' }}>
      <SearchSelect
        placeholder="请输入"
        mode="single"
        labelInValue
        showSearch={true}
        option={list}
        onSearch={handleSearch}
        onChange={onChange}
      />
    </div>
  );
};
export default (props: MenuProps = {}) => {
  const { routes = [], collapsed } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;

  // @ts-ignore
  const searchMenu = (SEARCH_MENU && collapsed) || (
    <SearchMenus routes={routes} />
  );
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
