import React from 'react';
import {
  unstable_HistoryRouter, useRoutes, useNavigate, NavigateFunction,
  useLocation, useParams, Route, createRoutesFromChildren
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const HistoryRouter = unstable_HistoryRouter
export const history = createBrowserHistory()
export let navigate: NavigateFunction = () => { };

export interface Routers extends Omit<RouteObject, "children"> {
  path?: string;
  key?: string;
  name?: string;
  icon?: string;
  element?: JSX.Element | React.LazyExoticComponent<() => JSX.Element>;
  children?: React.ReactNode[]
  routes?: Routers[]
}

export type DefaultProps = {
  routes: Routers[];
};

export interface ControllerProps {
  routes?: Routers[];
}

export const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component  {...props} router={{ location, navigate, params }} />
    </React.Suspense>
  );
};
// const getTree = (routes: Routers[] = []): Routers[] => {
//   return routes.map((item) => {
//     const { element: Element } = item
//     const obj = { ...item }
//     if (Element && Object.prototype.toString.call(Element) === "[object Function]") {
//       const Com = Element as (props: any) => JSX.Element
//       obj.element = <Com />
//     }
//     if (obj.children && obj.element) {
//       /** 处理数据用于渲染侧边路由使用 */
//       const dom = React.isValidElement(obj.element) ? React.cloneElement(obj.element, { routes: obj.children } as any) : obj.element;
//       return {
//         ...obj,
//         element: dom
//       }
//     } else if (obj.children) {
//       return {
//         ...obj,
//         children: getTree(obj.children)
//       }
//     }
//     return {
//       ...obj
//     }
//   })
// }
const getTree = (routes: Routers[] = []): JSX.Element[] => {
  return routes.map((item, ind) => {
    const obj = { ...item }
    if (item.routes) {
      obj.children = getTree(item.routes) as Routers["children"]
    }
    if (item.element && !React.isValidElement(item.element)) {
      const Com = Loadable(item.element as React.LazyExoticComponent<() => JSX.Element>)
      obj.element = <Com />
    }
    if (React.isValidElement(obj.element) && obj.children) {
      obj.element = React.cloneElement(obj.element, { routes: item.routes || [] } as any)
    }
    return <Route key={ind} {...obj} />
  })
}

export function RouteChild(props: ControllerProps = {}) {
  const { routes = [] } = props;
  const rou = createRoutesFromChildren(getTree(routes))
  const dom = useRoutes(rou)
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
