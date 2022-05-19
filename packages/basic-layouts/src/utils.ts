import { RoutersProps } from '@uiw-admin/router-control';
import { matchPath } from '@uiw-admin/router-control';

/** 菜单转化 去除 dom  */
export function getMenu(data: RoutersProps[] = []) {
  let treeList: RoutersProps[] = [];
  data.forEach((item) => {
    let obj = { ...item };
    if (item.routes) {
      const child = getMenu(obj.routes);
      obj.routes = child;
    }
    if (item.path && item.path !== '*') {
      const { element, component, children, path, ...rest } = obj;
      treeList.push({ ...rest, path, key: path });
    }
  });
  return treeList;
}

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (
  data: RoutersProps[] = [],
  list: RoutersProps[] = [],
) => {
  data.forEach((item) => {
    if (item.routes) {
      getRoutesList(item.routes, list);
    } else {
      list.push(item);
    }
  });
  return list;
};

/** 把数组扁平化 用于 选项卡渲染 */
export const getMenuList = (
  data: RoutersProps[] = [],
  list: RoutersProps[] = [],
) => {
  data.forEach((item) => {
    const { routes, ...rest } = item;
    if (Array.isArray(routes)) {
      getMenuList(routes, list);
    }
    list.push(rest);
  });
  return list;
};

/** 菜单 转换成 渲染面包屑导航  */
export class BreadcrumbMap {
  breadcrumb: Map<string, RoutersProps[]> = new Map([]);
  flat: RoutersProps[] = [];
  constructor(routeData: RoutersProps[]) {
    this.init(routeData);
  }
  private init(route: RoutersProps[], parent?: RoutersProps[]) {
    route.forEach((item) => {
      let par = (parent || []).concat([item]);
      /** 始终把自己加载最后 */
      if (item.routes) {
        this.init(item.routes, par);
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
export const getSideMenusMap = (route: RoutersProps[]) => {
  /** 对应的下级路由 **/
  const sideMenus = new Map<string, RoutersProps[]>([]);
  /** 子集对应的所有 side===true 的路由地址 **/
  const flat = new Map<string, string>([]);
  const flatSide = new Map<string, string>([]);

  const loop = (route: RoutersProps[], parent?: string) => {
    route.forEach((item) => {
      const { path, side, routes } = item;
      if (Array.isArray(routes)) {
        loop(routes, side ? path : parent);
      }
      if (side && path && routes) {
        sideMenus.set(path, routes);
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

export const getCurrentPath = (routes: RoutersProps[], path: string) => {
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

export const getDiffIndex = (routes: RoutersProps[], pathname: string) => {
  return routes.find((item) => item.index);
};
