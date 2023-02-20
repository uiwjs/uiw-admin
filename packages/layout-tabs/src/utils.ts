import { RoutersProps } from '@uiw-admin/router-control';
import { Location } from 'react-router-dom';
import { matchPath } from 'react-router';

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (data: any[] = []) => {
  const list: any[] = [];
  (function returnArr(arr) {
    arr.forEach((item) => {
      if (item.children) {
        returnArr(item.children);
      } else {
        list.push(item);
      }
    });
  })(data);
  return list;
};

const getO = (routeListData: RoutersProps[], location: Location) => {
  return routeListData.find((item) => {
    if (location.pathname === '/' && item.index && item.redirect) {
      return item.index;
    }
    if (
      location &&
      location.pathname &&
      item.path &&
      location.pathname !== '/'
    ) {
      return location.pathname === item.path;
    }
    return false;
  });
};

const getM = (routeListData: RoutersProps[], location: Location) => {
  return routeListData.find((item) => {
    if (location.pathname === '/' && item.index && item.redirect) {
      return item.index;
    }
    if (
      location &&
      location.pathname &&
      item.path &&
      location.pathname !== '/'
    ) {
      return matchPath({ path: item.path }, location.pathname);
    }
    return false;
  });
};

export const getMatch = (routeListData: RoutersProps[], location: Location) => {
  const o = getO(routeListData, location);
  if (o) {
    return {
      current: o,
      isMatch: false,
    };
  } else {
    const match = getM(routeListData, location);
    return {
      current: match,
      isMatch: match ? true : false,
    };
  }
};

export const getMatchRender = (
  routeListData: (RoutersProps & { location: Location; isMatch: boolean })[],
  location: Location,
  isMatch: boolean,
) => {
  if (isMatch) {
    return getM(routeListData, location) as RoutersProps & {
      location: Location;
      isMatch: boolean;
    };
  } else {
    return getO(routeListData, location) as RoutersProps & {
      location: Location;
      isMatch: boolean;
    };
  }
};
