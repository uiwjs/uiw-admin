import React from 'react';
import {
  unstable_HistoryRouter, useRoutes, useNavigate, NavigateFunction,
  useLocation, useParams, Route, createRoutesFromChildren,
  HashRouter, BrowserRouter,
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
  redirect?: string;
  component?: JSX.Element | React.LazyExoticComponent<(props?: any) => JSX.Element>;
  routes?: Routers[]
  model?: string[];
}

export interface RoutersProps extends Routers {
  component?: JSX.Element | React.LazyExoticComponent<(props?: any) => JSX.Element>;
  children?: React.ReactNode[]
  /** 用于路由校验权限 */
  isAuth?: boolean
}

export type DefaultProps = {
  routes: RoutersProps[];
};

export interface ControllerProps {
  routes?: RoutersProps[];
  /** 路由模式   默认 history  */
  routeType?: "history" | "hash" | "browser";
  basename?: string;
  addModel?: (model: string[]) => void
}

export const Loadable = (Component: React.LazyExoticComponent<(props?: any) => JSX.Element>) => (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component  {...props} router={{ location, navigate, params }} />
    </React.Suspense>
  );
};
const getTree = (routes: RoutersProps[] = [], auths: string | null, addModel?: (model: string[]) => void): JSX.Element[] => {
  let list: JSX.Element[] = []
  routes.forEach((item, ind) => {
    if (item.routes) {
      item.children = getTree(item.routes, auths, addModel)
    }
    if (addModel && !item.element && item.model) {
      addModel(item.model)
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
    /** 在这边加路由权限 控制就好了 */
    // isAuth 这边加这个属性
    // 1. 如果加了这个属性 说明  跳转需求进行权限校验
    // 2. 如果没加这个属性 说明  跳转不用权限校验
    // 3. 加了这个属性为 false 说明 这个路由是没权限的，需要跳转403页面
    // 4. 加了这个属性为 true 说明 这个路由是有权限的，跳转正常页面
    // 5. 还有一种方案 直接 element 进行赋值

    list.push(<Route key={ind} {...item} />)
  })
  return list
}

export function RouteChild(props: ControllerProps = {}) {
  const { routes = [], addModel } = props;
  // 这边取权限校验值
  const auths = sessionStorage.getItem("auth")
  const roue = React.useMemo(() => createRoutesFromChildren(getTree(routes, auths, addModel)), [auths])
  const dom = useRoutes(roue)
  /** 赋值 用于跳转 */
  navigate = useNavigate()
  return dom
}

export default function Controller(props: ControllerProps = {}) {
  const { routes = [], routeType, basename = "/", addModel } = props;
  if (routeType === "hash") {
    return <HashRouter window={window} basename={basename} >
      <RouteChild routes={routes} addModel={addModel} />
    </HashRouter>
  } else if (routeType === "browser") {
    return <BrowserRouter window={window} basename={basename}  >
      <RouteChild routes={routes} addModel={addModel} />
    </BrowserRouter>
  }
  return <HistoryRouter history={history} basename={basename}  >
    <RouteChild routes={routes} addModel={addModel} />
  </HistoryRouter>
}
