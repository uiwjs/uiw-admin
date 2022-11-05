/**菜单路由配置*/
import { useContext, createContext, createElement } from 'react';
import { getMenu, BreadcrumbMap } from '../utils';
import { RoutersProps } from '@uiw-admin/router-control';
import { useSideMenus } from '../hooks';
import React from 'react';

export interface MenuRouteProps {
  routes: RoutersProps[];
  sideMenus: {
    sideItemIndex: RoutersProps | undefined;
    ChildMenus: {
      routeData: RoutersProps[];
      parentPath: string | undefined;
    };
    sideMenusMap: {
      sideMenus: Map<string, RoutersProps[]>;
      flat: Map<string, string>;
      flatSide: Map<string, string>;
    };
    hiddenMainMenu: boolean | undefined;
  };
  mianMenuHide: boolean | undefined;
  mapRoute: BreadcrumbMap;
  routeData: RoutersProps[];
}

const MenuRouteContext = createContext<MenuRouteProps>({
  routes: [],
  sideMenus: {
    sideItemIndex: undefined,
    ChildMenus: {
      routeData: [],
      parentPath: undefined,
    },
    sideMenusMap: {
      sideMenus: new Map([]),
      flat: new Map([]),
      flatSide: new Map([]),
    },
    hiddenMainMenu: undefined,
  },
  mianMenuHide: false,
  mapRoute: new BreadcrumbMap([]),
  routeData: [],
});

export const MenuRouteProvider = (props: {
  children: React.ReactNode;
  menuHide: boolean | undefined;
  routes: RoutersProps[];
}) => {
  const { children, menuHide, routes } = props;

  /** 转换 用于 侧边路由展示 */
  const routeData = getMenu(routes);
  const newSideMenus = useSideMenus({ routeData });
  const { hiddenMainMenu } = newSideMenus;

  /**路由带参数隐藏菜单 */
  const newMenuHide = menuHide || hiddenMainMenu;
  const mapRoute = React.useMemo(() => {
    return new BreadcrumbMap(routeData);
  }, [JSON.stringify(routeData)]);

  const childProvider = {
    sideMenus: newSideMenus,
    mianMenuHide: newMenuHide,
    mapRoute,
    routeData,
    routes,
  };

  return createElement(MenuRouteContext.Provider, {
    value: { ...childProvider },
    children: children,
  });
};
export const useMenuRoute = () => useContext(MenuRouteContext);
