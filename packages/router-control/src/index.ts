import { unstable_HistoryRouter, NavigateFunction } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { createBrowserHistory } from 'history';

export * from 'react-router-dom';
export * from 'react-router';
export * from 'react-redux';

export const HistoryRouter = unstable_HistoryRouter;
export const history = createBrowserHistory();
export let navigate: NavigateFunction = () => {};

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
  children?: RoutesBaseProps[];
  /** 隐藏主菜单 */
  hiddenMainMenu?: boolean;
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
  /** 自定义 跳转 */
  // navigate?: (navigate: NavigateFunction) => void;
  navigate?: string;
  /** 控制是否侧边只展示子路由 **/
  side?: boolean;
  [k: string]: any;
}
