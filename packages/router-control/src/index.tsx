// @ts-nocheck
import React from 'react';
import {
  useRoutes,
  useNavigate,
  NavigateFunction,
  createRoutesFromChildren,
  HashRouter,
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import RoutePathArr from '@@/routes';
import { Provider } from 'react-redux';
import { store } from '@uiw-admin/models';
import { createBrowserHistory } from 'history';
import { ControllerProps } from './interface';
export * from './interface';
import { useLoadModels } from './utils';
import { getTree, getDeepTreeRoute } from './Child';

export * from 'react-router-dom';
export * from 'react-router';
export * from 'react-redux';

export const history = createBrowserHistory();
export let navigate: NavigateFunction = () => {};

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

  const routes = React.useMemo(() => {
    const createRouters =
      props.routeType === 'history' ? createBrowserRouter : createHashRouter;
    return createRouters(
      getTree(
        getDeepTreeRoute(
          RoutePathArr,
          authList,
          props.notLoginMenus,
          props.navigateTo,
        ),
        props.addModels,
        !!props.isAutoAuth,
        props.notLoginMenus,
        props.navigateTo,
      ),
    );
  }, [JSON.stringify(authList)]);
  /** 赋值 用于跳转 */
  navigate = routes.navigate;
  console.log('routes', routes);
  return (
    <RouterProvider router={routes} fallbackElement={<div>loading...</div>} />
  );
}

export default function Controller(props: ControllerProps = {}) {
  const {
    routeType,
    addModels,
    isAutoAuth = true,
    notLoginMenus,
    navigateTo,
  } = props;
  const load = useLoadModels({ path: '/', addModels });
  // @ts-ignore
  let base = BASE_NAME;
  // const dom = React.useMemo(() => {
  //   if (routeType === 'browser') {
  //     return (
  //       <BrowserRouter window={window} basename={base}>

  //       </BrowserRouter>
  //     );
  //   }
  //   return (
  //     <HashRouter window={window} basename={base}>
  //       <RouteChild
  //         addModels={props.addModels}
  //         isAutoAuth={isAutoAuth}
  //         notLoginMenus={notLoginMenus}
  //         navigateTo={navigateTo}
  //       />
  //     </HashRouter>
  //   );
  // }, [routeType]);

  if (load) {
    return <div>Loading...</div>;
  }
  return (
    <Provider store={store}>
      <RouteChild
        addModels={props.addModels}
        isAutoAuth={isAutoAuth}
        notLoginMenus={notLoginMenus}
        navigateTo={navigateTo}
        routeType={routeType}
      />
    </Provider>
  );
}
