import { RoutesBaseProps } from '@uiw-admin/router-control';
import { matchPath } from '@uiw-admin/router-control';

/** 菜单转化 去除 dom  */
export function getMenu(data: RoutesBaseProps[] = []) {
  let treeList: RoutesBaseProps[] = [];
  data.forEach((item) => {
    let obj = { ...item };
    if (item.children) {
      const child = getMenu(obj.children);
      obj.children = child;
    }
    if (item.path && item.path !== '*') {
      const { element, component, path, ...rest } = obj;
      treeList.push({ ...rest, path, key: path });
    }
  });
  return treeList;
}

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (
  data: RoutesBaseProps[] = [],
  list: RoutesBaseProps[] = [],
) => {
  data.forEach((item) => {
    if (item.children) {
      getRoutesList(item.children, list);
      if (item.side) {
        list.push(item);
      }
    } else {
      list.push(item);
    }
  });
  return list;
};

/** 把数组扁平化 用于 选项卡渲染 */
export const getMenuList = (
  data: RoutesBaseProps[] = [],
  list: RoutesBaseProps[] = [],
) => {
  data.forEach((item) => {
    const { children, ...rest } = item;
    if (Array.isArray(children)) {
      getMenuList(children, list);
    }
    list.push(rest);
  });
  return list;
};

/** 菜单 转换成 渲染面包屑导航  */
export class BreadcrumbMap {
  breadcrumb: Map<string, RoutesBaseProps[]> = new Map([]);
  flat: RoutesBaseProps[] = [];
  constructor(routeData: RoutesBaseProps[]) {
    this.init(routeData);
  }
  private init(route: RoutesBaseProps[], parent?: RoutesBaseProps[]) {
    route.forEach((item) => {
      let par = (parent || []).concat([item]);
      /** 始终把自己加载最后 */
      if (item.children) {
        this.init(item.children, par);
      }
      if (item.path && item.path !== '*') {
        this.breadcrumb.set(item.path, par);
      }
      this.flat.push(item);
    });
  }
}

/**
 * 1. 根据当前路由获取对应的路由信息
 * 2. 通过路由信息判断是否是side===true,是则只在侧边展示当前路由下的所有子集路由，如果不是则展示所有或其父级是 side===true的路由
 * ***/

/**
 * 1. 拆分路由，把 side===true 的放入一个存储里面
 * 2. 子集对应的第一个  side===true 存储到一个位置里面
 * ***/
export const getSideMenusMap = (route: RoutesBaseProps[]) => {
  /** 对应的下级路由 **/
  const sideMenus = new Map<string, RoutesBaseProps[]>([]);
  /** 子集对应的所有 side===true 的路由地址 **/
  const flat = new Map<string, string>([]);
  const flatSide = new Map<string, string>([]);

  const loop = (route: RoutesBaseProps[], parent?: string) => {
    route.forEach((item) => {
      const { path, side, children } = item;
      if (Array.isArray(children)) {
        loop(children, side ? path : parent);
      }
      if (side && path && children) {
        sideMenus.set(path, children);
      }
      if (path) {
        if (side) {
          flat.set(path, path);
        } else if (parent) {
          flat.set(path, parent);
        }
        flatSide.set(path, parent || '/');
      }
    });
  };
  loop(route);
  return {
    sideMenus,
    flat,
    flatSide,
  };
};

export const getCurrentPath = (routes: RoutesBaseProps[], path: string) => {
  // matchPath;
  // 1. 选判断直接相等的
  const isOne = routes.find((item) => item.path === path);
  if (isOne) {
    return isOne;
  }
  // 匹配路由
  const isTwo = routes.find(
    (item) =>
      item.path && item.path !== '*' && matchPath({ path: item.path }, path),
  );
  if (isTwo) {
    return isTwo;
  }
  return undefined;
};

export const getDiffIndex = (routes: RoutesBaseProps[], pathname: string) => {
  return routes.find((item) => item.index);
};
