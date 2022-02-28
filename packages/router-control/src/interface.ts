import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Location, NavigateFunction, Params } from 'react-router-dom';

export interface RoutesBaseProps extends Omit<RouteObject, 'children'> {
  key?: string;
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string | React.ReactNode;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 子集 路由 */
  routes?: RoutesBaseProps[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
  /** 自定义 跳转 */
  // navigate?: (navigate: NavigateFunction) => void;
  navigate?: string;
}

// json文件格式
export interface RoutersJSON extends Omit<RoutesBaseProps, 'routes'> {
  /** 组件地址 如果是 403/404/500 的页面直接写 403/404/500 就可以了，内部直接做转化*/
  component?: string;
  /** 子集 路由 */
  routes?: RoutersJSON[];
}

export interface Routers extends RoutesBaseProps {
  /** 组件 */
  component?:
    | JSX.Element
    | React.LazyExoticComponent<(props?: any) => JSX.Element>;
  /** 子集 路由 */
  routes?: Routers[];
}

export interface RoutersProps extends Routers {
  /** 渲染使用的组件 */
  element?: React.ReactNode;
  /** 子集渲染的组件集合 */
  children?: React.ReactNode[];
}

export type DefaultProps = {
  /** 子集路由 */
  routes?: Routers[];
  /** 路由 参数 */
  router?: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
};

export interface ControllerProps {
  /** 路由模式   默认 history  */
  routeType?: 'history' | 'hash' | 'browser';
  // addModels?: (modelsArr: { path: string, name: string }[], addModel: Store["addModel"]) => void
  addModels?: (path: string) => Promise<{ default: any }>;
  /** 是否自动校验 "/" 路由  token 是否存在,   */
  isAutoAuth?: boolean;
}
