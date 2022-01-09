import React from 'react';
export * from './utils';
import { unstable_HistoryRouter, useRoutes, useNavigate, NavigateFunction } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const HistoryRouter = unstable_HistoryRouter
export const history = createBrowserHistory()
export let navigate: NavigateFunction = () => { };

export interface Routers extends RouteObject {
  path?: string;
  key?: string;
  name?: string;
  icon?: string;
  element?: JSX.Element;
  component?: string;
  routes?: Routers[];
  children?: Routers[]
}

export type DefaultProps = {
  routes: Routers[];
};

export interface ControllerProps {
  routes?: Routers[];
}

export const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: any) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

const getTree = (routes: Routers[] = []): Routers[] => {
  return routes.map((item) => {
    if (item.children && item.element) {
      /** 处理数据用于渲染侧边路由使用 */
      const dom = React.isValidElement(item.element) ? React.cloneElement(item.element, { routes: item.children } as any) : item.element;
      return {
        ...item,
        element: dom
      }
    } else if (item.children) {
      return {
        ...item,
        children: getTree(item.children)
      }
    }
    return {
      ...item
    }
  })
}

export function RouteChild(props: ControllerProps = {}) {
  const { routes = [] } = props;
  const dom = useRoutes(getTree(routes))
  /** 赋值 用于跳转 */
  navigate = useNavigate()
  return dom
}

export default function Controller(props: ControllerProps = {}) {
  const { routes = [] } = props;
  return <HistoryRouter history={history} >
    <RouteChild routes={routes} />
  </HistoryRouter>
}
