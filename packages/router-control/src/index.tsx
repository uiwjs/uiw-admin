import React from 'react';
import {
  unstable_HistoryRouter,
  useRoutes,
  useNavigate,
  NavigateFunction,
  useLocation,
  useParams,
  Route,
  createRoutesFromChildren,
  HashRouter,
  BrowserRouter,
  Navigate,
  matchPath,
} from 'react-router-dom';

// @ts-ignore
import RoutePathArr from '@@/routes';
import { Provider } from 'react-redux';
import { store } from '@uiw-admin/models';
import { Exceptions403 } from '@uiw-admin/exceptions';
import { createBrowserHistory } from 'history';
import { ControllerProps, RoutersProps } from './interface';
export * from './interface';
import { useLoadModels } from './utils';
import { getCookie } from '@uiw-admin/utils';

export const HistoryRouter = unstable_HistoryRouter;
export const history = createBrowserHistory();
export let navigate: NavigateFunction = () => {};

export const Loadable = (
  Component: React.LazyExoticComponent<(props?: any) => JSX.Element>,
  path?: string,
  addModels?: ControllerProps['addModels'],
) => {
  return (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const load = useLoadModels({ path, addModels });

    if (load) {
      return <div>Loading...</div>;
    }
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} router={{ location, navigate, params }} />
      </React.Suspense>
    );
  };
};

/** 这是一种是否登录验证方式 */
export const AuthLayout = (props: any) => {
  const location = useLocation();
  // @ts-ignore
  let tokenName = TOKEN_NAME;
  // 本地 存储 token
  let token: string | boolean | null = sessionStorage.getItem(tokenName);
  // @ts-ignore
  if (TOKEN_STORAGE === 'local') {
    token = localStorage.getItem(tokenName);
  }
  // @ts-ignore
  if (TOKEN_STORAGE === 'cookie') {
    token = getCookie(tokenName);
  }
  let authorityJudgment: ControllerProps['authorityJudgment'] =
    props.authorityJudgment;

  if (authorityJudgment && !token) {
    if (Array.isArray(authorityJudgment)) {
      token = !!authorityJudgment.find((path) =>
        matchPath(path, location.pathname),
      );
    } else if (typeof authorityJudgment === 'function') {
      token = authorityJudgment(location.pathname);
    } else if (
      typeof authorityJudgment === 'object' &&
      authorityJudgment instanceof RegExp
    ) {
      token = authorityJudgment.test(location.pathname);
    }
    if (['/403', '/404', '/500'].includes(location.pathname)) {
      token = true;
    }
  }

  let navigateTo: ControllerProps['navigateTo'] = props.navigateTo;
  let to = '/login';
  if (typeof navigateTo === 'string') {
    to = navigateTo;
  } else if (typeof navigateTo === 'function') {
    to = navigateTo(location.pathname);
  }

  if (!token) {
    return <Navigate to={to} replace />;
  }
  return props.children;
};

const getRegExp = (str: string, path: string | undefined) => {
  try {
    // 为了判断字符串是否可以转换成 RegExp 对象
    const result = new RegExp(`${str}`);
    return result.test(`${path}`);
  } catch (err) {
    return 'noRegExp';
  }
};

/** 递归路由 判断是否有权限  */
export const getDeepTreeRoute = (
  routes: RoutersProps[],
  authList: string[],
  authorityJudgment: ControllerProps['authorityJudgment'],
) => {
  return routes.map((item) => {
    const itemObj = { ...item };
    let authorityJudgmentFig = true;
    // @ts-ignore
    if (
      AUTH &&
      itemObj.path &&
      ![
        '/',
        '*',
        '/403',
        '/404',
        '/500',
        '/welcome',
        '/home',
        '/login',
      ].includes(itemObj.path)
    ) {
      let fig;
      fig = !!authList.find((ite) => {
        if (/\*$/.test(ite)) {
          const result = getRegExp(ite, item.path);
          if (result !== 'noRegExp') {
            return result;
          }
        }
        return ite === itemObj.path;
      });

      /** 可以不用登录直接查看的页面展示有权限 **/
      if (authorityJudgment && item.path && !fig) {
        if (Array.isArray(authorityJudgment)) {
          fig = authorityJudgmentFig = !!authorityJudgment.find(
            (path) => path === item.path,
          );
        } else if (typeof authorityJudgment === 'function') {
          fig = authorityJudgmentFig = authorityJudgment(item.path);
        } else if (
          typeof authorityJudgment === 'object' &&
          authorityJudgment instanceof RegExp
        ) {
          fig = authorityJudgmentFig = authorityJudgment.test(item.path);
        }
      }

      // itemObj.isAuth = !!fig || !!itemObj.isAuth
      // 1. fig 存在
      // 2. fig 不存在 但是 item.isAuth===true 存在
      // 3. fig  不存在 item.isAuth 不存在
      if (!!fig) {
        itemObj.isAuth = true;
      } else if (!fig && item.isAuth && authorityJudgmentFig) {
        itemObj.isAuth = true;
      } else {
        itemObj.isAuth = false;
        itemObj.hideInMenu = true;
        itemObj.component = <Exceptions403 />;
      }
    }
    if (itemObj.routes) {
      itemObj.routes = getDeepTreeRoute(
        itemObj.routes,
        authList,
        authorityJudgment,
      );
    }
    if (itemObj.path && ['*', '/403', '/404', '/500'].includes(itemObj.path)) {
      itemObj.hideInMenu = true;
    }
    // 默认有权限的就是有权限
    if (Reflect.has(item, 'isAuth')) {
      itemObj.isAuth = item.isAuth;
    }
    // authorityJudgmentFig 不登录的权限
    if (!authorityJudgmentFig) {
      itemObj.isAuth = authorityJudgmentFig;
    }
    return { ...itemObj };
  });
};

const getTree = (
  routes: RoutersProps[] = [],
  addModels: ControllerProps['addModels'],
  isAutoAuth: boolean,
  authorityJudgment: ControllerProps['authorityJudgment'],
  navigateTo: ControllerProps['navigateTo'],
): JSX.Element[] => {
  let list: JSX.Element[] = [];
  routes.forEach((item, ind) => {
    const itemObj = item;
    // 判断是否有子项进行递归处理
    if (item.routes) {
      itemObj.children = getTree(
        itemObj.routes,
        addModels,
        isAutoAuth,
        authorityJudgment,
        navigateTo,
      );
    }
    // 懒加载
    if (!React.isValidElement(itemObj.component) && itemObj.component) {
      const Com = Loadable(
        item.component as React.LazyExoticComponent<() => JSX.Element>,
        item.path,
        addModels,
      );
      itemObj.element = <Com />;
    }
    //  当 element 没有值的时候进行赋值
    if (React.isValidElement(itemObj.component) && !itemObj.element) {
      itemObj.element = itemObj.component;
    }
    // 有子项数据
    if (React.isValidElement(itemObj.element) && itemObj.children) {
      itemObj.element = React.cloneElement(itemObj.element, {
        routes: itemObj.routes || [],
      } as any);
    }
    //  `/` 重定向
    if (itemObj.index && itemObj.redirect) {
      itemObj.element = <Navigate to={itemObj.redirect} />;
    }
    if (itemObj.element && itemObj.path === '/' && isAutoAuth) {
      itemObj.element = (
        <AuthLayout
          authorityJudgment={authorityJudgment}
          navigateTo={navigateTo}
        >
          {itemObj.element}
        </AuthLayout>
      );
    }
    list.push(<Route key={ind} {...itemObj} />);
  });
  return list;
};

export function RouteChild(props: ControllerProps = {}) {
  // 这边取权限校验值
  let authStr = sessionStorage.getItem('auth');
  // @ts-ignore
  if (STORAGE === 'local') {
    authStr = localStorage.getItem('auth');
  }
  let authList: string[] = React.useMemo(() => {
    if (authStr) {
      return JSON.parse(authStr);
    }
    return [];
  }, [authStr]);

  const roue = React.useMemo(
    () =>
      createRoutesFromChildren(
        getTree(
          getDeepTreeRoute(RoutePathArr, authList, props.authorityJudgment),
          props.addModels,
          !!props.isAutoAuth,
          props.authorityJudgment,
          props.navigateTo,
        ),
      ),
    [JSON.stringify(authList)],
  );
  const dom = useRoutes(roue);
  /** 赋值 用于跳转 */
  navigate = useNavigate();
  return dom;
}

export default function Controller(props: ControllerProps = {}) {
  const {
    routeType,
    addModels,
    isAutoAuth = true,
    authorityJudgment,
    navigateTo,
  } = props;
  const load = useLoadModels({ path: '/', addModels });
  // @ts-ignore
  let base = BASE_NAME;
  const dom = React.useMemo(() => {
    if (routeType === 'history') {
      return (
        <HistoryRouter history={history} basename={base}>
          <RouteChild
            addModels={props.addModels}
            isAutoAuth={isAutoAuth}
            authorityJudgment={authorityJudgment}
            navigateTo={navigateTo}
          />
        </HistoryRouter>
      );
    } else if (routeType === 'browser') {
      return (
        <BrowserRouter window={window} basename={base}>
          <RouteChild
            addModels={props.addModels}
            isAutoAuth={isAutoAuth}
            authorityJudgment={authorityJudgment}
            navigateTo={navigateTo}
          />
        </BrowserRouter>
      );
    }
    return (
      <HashRouter window={window} basename={base}>
        <RouteChild
          addModels={props.addModels}
          isAutoAuth={isAutoAuth}
          authorityJudgment={authorityJudgment}
          navigateTo={navigateTo}
        />
      </HashRouter>
    );
  }, [routeType]);

  if (load) {
    return <div>Loading...</div>;
  }
  return <Provider store={store}>{dom}</Provider>;
}
