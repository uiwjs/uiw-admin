import React from 'react';
import {
  useNavigate,
  useLocation,
  useParams,
  Route,
  Navigate,
  matchPath,
} from 'react-router-dom';

// @ts-ignore
import RoutePathArr from '@@/routes';
import { Exceptions403 } from '@uiw-admin/exceptions';
import { ControllerProps, RoutersProps } from './interface';
import { useLoadModels } from './utils';
import { getCookie } from '@uiw-admin/utils';

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
  let notLoginMenus: ControllerProps['notLoginMenus'] = props.notLoginMenus;

  if (notLoginMenus && !token) {
    if (Array.isArray(notLoginMenus)) {
      token = !!notLoginMenus.find((path) =>
        matchPath(path, location.pathname),
      );
    } else if (typeof notLoginMenus === 'function') {
      token = notLoginMenus(location.pathname);
    } else if (
      typeof notLoginMenus === 'object' &&
      notLoginMenus instanceof RegExp
    ) {
      token = notLoginMenus.test(location.pathname);
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
  notLoginMenus: ControllerProps['notLoginMenus'],
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
      if (notLoginMenus && item.path && !fig) {
        if (Array.isArray(notLoginMenus)) {
          fig = authorityJudgmentFig = !!notLoginMenus.find(
            (path) => path === item.path,
          );
        } else if (typeof notLoginMenus === 'function') {
          fig = authorityJudgmentFig = notLoginMenus(item.path);
        } else if (
          typeof notLoginMenus === 'object' &&
          notLoginMenus instanceof RegExp
        ) {
          fig = authorityJudgmentFig = notLoginMenus.test(item.path);
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
        notLoginMenus,
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

export const getTree = (
  routes: RoutersProps[] = [],
  addModels: ControllerProps['addModels'],
  isAutoAuth: boolean,
  notLoginMenus: ControllerProps['notLoginMenus'],
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
        notLoginMenus,
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
        <AuthLayout notLoginMenus={notLoginMenus} navigateTo={navigateTo}>
          {itemObj.element}
        </AuthLayout>
      );
    }
    list.push(<Route key={ind} {...itemObj} />);
  });
  return list;
};
