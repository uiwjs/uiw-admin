import React from 'react';
import {
  unstable_HistoryRouter, useRoutes, useNavigate, NavigateFunction,
  useLocation, useParams, Route, createRoutesFromChildren,
  HashRouter, BrowserRouter
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
  component?: JSX.Element | React.LazyExoticComponent<() => JSX.Element>;
  element?: JSX.Element | React.LazyExoticComponent<() => JSX.Element>;
  children?: React.ReactNode[]
  routes?: Routers[]
}

export type DefaultProps = {
  routes: Routers[];
};

export interface ControllerProps {
  routes?: Routers[];
  /** 路由模式   默认 history  */
  routeType?: "history" | "hash" | "browser";
  basename?: string
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
const getTree = (routes: Routers[] = [], auths: string | null): JSX.Element[] => {
  let list: JSX.Element[] = []
  routes.forEach((item, ind) => {
    if (item.routes) {
      item.children = getTree(item.routes, auths)
    }
    if (!React.isValidElement(item.component) && item.component && !item.element) {
      const Com = Loadable(item.component as React.LazyExoticComponent<() => JSX.Element>)
      item.element = <Com />
    }
    if (React.isValidElement(item.component) && !item.element) {
      item.element = item.component
    }
    if (React.isValidElement(item.element) && item.children) {
      item.element = React.cloneElement(item.element, { routes: item.routes || [] } as any)
    }
    console.log("auths", auths)
    /** 在这边加路由权限 控制就好了 */
    list.push(<Route key={ind} {...item} />)
  })
  return list
}

export function RouteChild(props: ControllerProps = {}) {
  const { routes = [] } = props;
  // 这边取权限校验值
  const auths = sessionStorage.getItem("auth")

  const roue = React.useMemo(() => createRoutesFromChildren(getTree(routes, auths)), [auths])
  const dom = useRoutes(roue)
  /** 赋值 用于跳转 */
  navigate = useNavigate()
  return dom
}

export default function Controller(props: ControllerProps = {}) {
  const { routes = [], routeType, basename = "/" } = props;
  if (routeType === "hash") {
    return <HashRouter window={window} basename={basename} >
      <RouteChild routes={routes} />
    </HashRouter>
  } else if (routeType === "browser") {
    return <BrowserRouter window={window} basename={basename}  >
      <RouteChild routes={routes} />
    </BrowserRouter>
  }
  return <HistoryRouter history={history} basename={basename}  >
    <RouteChild routes={routes} />
  </HistoryRouter>
}
