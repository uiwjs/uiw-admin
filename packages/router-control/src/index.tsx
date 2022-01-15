import React from 'react';
import {
  unstable_HistoryRouter, useRoutes, useNavigate, NavigateFunction,
  useLocation, useParams, Route, createRoutesFromChildren,
  HashRouter, BrowserRouter, Navigate
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const HistoryRouter = unstable_HistoryRouter
export const history = createBrowserHistory()
export let navigate: NavigateFunction = () => { };

export interface Routers extends Omit<RouteObject, "children"> {
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
  /** 组件 */
  component?: JSX.Element | React.LazyExoticComponent<(props?: any) => JSX.Element>;
  /** 子集 路由 */
  routes?: Routers[]
  /** 加载 model 的文件名称 */
  models?: string[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean
}

export interface RoutersProps extends Routers {
  /** 渲染使用的组件 */
  element?: React.ReactNode;
  /** 子集渲染的组件集合 */
  children?: React.ReactNode[],
}

export type DefaultProps = {
  routes: RoutersProps[];
};

export interface ControllerProps {
  routes?: RoutersProps[];
  /** 路由模式   默认 history  */
  routeType?: "history" | "hash" | "browser";
  basename?: string;
  addModel?: (models: string[]) => void
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

/** 这是一种是否登录验证方式 */
export const AuthLayout = (props: any) => {
  // 本地 存储 token
  const token = sessionStorage.getItem("token")
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return props.children
}

const getTree = (routes: RoutersProps[] = [], authList: string[], addModel?: (models: string[]) => void): JSX.Element[] => {
  let list: JSX.Element[] = []
  routes.forEach((item, ind) => {
    const itemObj = { ...item }

    // 判断是否有子项进行递归处理
    if (item.routes) {
      itemObj.children = getTree(itemObj.routes, authList, addModel)
    }
    // 加载 models 
    if (addModel && !itemObj.element && itemObj.models) {
      addModel(itemObj.models)
    }
    // 懒加载
    if (!React.isValidElement(itemObj.component) && itemObj.component) {
      const Com = Loadable(item.component as React.LazyExoticComponent<() => JSX.Element>)
      itemObj.element = <Com />
    }
    //  当 element 没有值的时候进行赋值
    if (React.isValidElement(itemObj.component) && !itemObj.element) {
      itemObj.element = itemObj.component
    }
    // 有子项数据
    if (React.isValidElement(itemObj.element) && itemObj.children) {
      itemObj.element = React.cloneElement(itemObj.element, { routes: itemObj.routes || [] } as any)
    }
    //  `/` 重定向
    if (itemObj.index && itemObj.redirect) {
      itemObj.element = <Navigate to={itemObj.redirect} />
    }
    if (itemObj.element && itemObj.path === "/") {
      itemObj.element = <AuthLayout>
        {itemObj.element}
      </AuthLayout>
    }
    /** 在这边加路由权限 控制就好了 */
    // isAuth 这边加这个属性
    // 1. 如果加了这个属性 说明  跳转需求进行权限校验
    // 2. 如果没加这个属性 说明  跳转不用权限校验
    // 3. 加了这个属性为 false 说明 这个路由是没权限的，需要跳转403页面
    // 4. 加了这个属性为 true 说明 这个路由是有权限的，跳转正常页面
    // 5. 还有一种方案 直接 element 进行赋值
    // @ts-ignore
    if (AUTH && itemObj.path && !["/", "*", "/403", "/404", "/500", "/welcome", "/home"].includes(itemObj.path)) {
      const fig = authList.find(ite => ite === itemObj.path)
      itemObj.isAuth = !!fig || itemObj.isAuth
      if (!itemObj.isAuth) { // 说明没权限 页面  直接改 element 方式简单 不用渲染做校验
        itemObj.element = <div>403，无权访问</div>
      }
    }
    list.push(<Route key={ind} {...itemObj} />)
  })
  return list
}

export function RouteChild(props: ControllerProps = {}) {
  const { routes = [], addModel } = props;
  // 这边取权限校验值
  const authStr = sessionStorage.getItem("auth")
  let authList: string[] = React.useMemo(() => {
    if (authStr) {
      return JSON.parse(authStr)
    }
    return []
  }, [authStr])
  const roue = React.useMemo(() => createRoutesFromChildren(getTree(routes, authList, addModel)), [JSON.stringify(authList)])
  const dom = useRoutes(roue)
  /** 赋值 用于跳转 */
  navigate = useNavigate()
  console.log(dom)
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
