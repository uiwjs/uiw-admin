import React from 'react';
import { KktproRoutesProps } from '@kkt/pro';
import { useLocation } from 'react-router-dom';

import { getSideMenusMap, getMenuList, getCurrentPath } from './utils';
export const MainContext = React.createContext<{
  headerLayout?: 'top' | 'default';
  headerBackground?: string;
  headerFontColor?: string;
}>({
  headerLayout: 'top',
  headerBackground: '#fff',
  headerFontColor: '#000',
});

export const useMain = () => React.useContext(MainContext);

export const useSideMenus = (props: { routeData: KktproRoutesProps[] }) => {
  const { routeData = [] } = props;
  const location = useLocation();

  const sideMenusMap = getSideMenusMap(routeData);

  const listMenus = getMenuList(routeData);

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
  }, [currentPath, routeData, sideMenusMap]);

  const sideItemIndex = React.useMemo(() => {
    if (currentPath && currentPath.side) {
      const item = ChildMenus.routeData.find((item) => item.index);
      if (item) {
        return item;
      }
    }
    return undefined;
  }, [location.pathname, currentPath]);

  return {
    sideItemIndex,
    ChildMenus,
    sideMenusMap,
    hiddenMainMenu,
  };
};
