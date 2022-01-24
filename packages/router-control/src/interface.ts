import React from 'react';
import type { RouteObject } from 'react-router-dom';
export interface RoutesBaseProps extends Omit<RouteObject, 'children'> {
  key?: string;
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 子集 路由 */
  routes?: RoutesBaseProps[];
  /** 加载 model 的文件路径 , ts 结尾的文件 */
  models?: string[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
}

// json文件格式
export interface RoutersJSON extends Omit<RoutesBaseProps, "routes"> {
  /** 组件地址 如果是 403/404/500 的页面直接写 403/404/500 就可以了，内部直接做转化*/
  component?: string
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
  routes: RoutersProps[];
};

export interface ControllerProps {
  /** 路由模式   默认 history  */
  routeType?: 'history' | 'hash' | 'browser';
}
