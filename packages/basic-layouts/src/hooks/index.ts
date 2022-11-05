import React from 'react';
import { RoutersProps, useLocation } from '@uiw-admin/router-control';

import {
  getSideMenusMap,
  getMenuList,
  getCurrentPath,
  BreadcrumbMap,
} from '../utils';
export const MainContext = React.createContext<{
  headerLayout?: 'top' | 'default';
  headerBackground?: string;
  headerFontColor?: string;
  sideMenus?: {
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
  mianMenuHide?: boolean | undefined;
  mapRoute?: BreadcrumbMap;
  routeData?: RoutersProps[];
}>({
  headerLayout: 'top',
  headerBackground: '#fff',
  headerFontColor: '#000',
});
export const useMain = () => React.useContext(MainContext);

export const useSideMenus = (props: { routeData: RoutersProps[] }) => {
  const { routeData } = props;
  const location = useLocation();

  const sideMenusMap = React.useMemo(() => {
    return getSideMenusMap(routeData);
  }, [JSON.stringify(routeData)]);

  const listMenus = React.useMemo(
    () => getMenuList(routeData),
    [JSON.stringify(routeData)],
  );

  // 获取当前路由匹配信息
  const currentPath = getCurrentPath(listMenus, location.pathname);
  const hiddenMainMenu = currentPath?.hiddenMainMenu;
  // 获取子路由信息
  const ChildMenus = React.useMemo(() => {
    const parentPath = sideMenusMap.flat.get(currentPath?.path || '');
    if (parentPath && parentPath !== '/') {
      return {
        routeData: sideMenusMap.sideMenus.get(parentPath) || [],
        parentPath,
      };
    }
    return {
      routeData,
      parentPath,
    };
  }, [JSON.stringify({ currentPath, routeData, sideMenusMap })]);

  const sideItemIndex = React.useMemo(() => {
    if (currentPath && currentPath.side) {
      const item = ChildMenus.routeData.find((item) => item.index);
      if (item) {
        return item;
      }
    }
    return undefined;
  }, [location.pathname, JSON.stringify(currentPath)]);

  return {
    sideItemIndex,
    ChildMenus,
    sideMenusMap,
    hiddenMainMenu,
  };
};
