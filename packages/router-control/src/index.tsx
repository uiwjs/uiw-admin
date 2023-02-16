import React from 'react';
import {
  unstable_HistoryRouter,
  useRoutes,
  useNavigate,
  NavigateFunction,
  createRoutesFromChildren,
  HashRouter,
  BrowserRouter,
} from 'react-router-dom';

// @ts-ignore
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

export const HistoryRouter = unstable_HistoryRouter;
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

  const roue = React.useMemo(
    () =>
      createRoutesFromChildren(
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
    notLoginMenus,
    navigateTo,
    isKktp,
  } = props;
  const load = useLoadModels({ path: '/', addModels });
  const dom = React.useMemo(() => {
    if (isKktp) {
      return (
        <RouteChild
          addModels={props.addModels}
          isAutoAuth={isAutoAuth}
          notLoginMenus={notLoginMenus}
          navigateTo={navigateTo}
        />
      );
    } else {
      if (routeType === 'history') {
        return (
          <HistoryRouter history={history}>
            <RouteChild
              addModels={props.addModels}
              isAutoAuth={isAutoAuth}
              notLoginMenus={notLoginMenus}
              navigateTo={navigateTo}
            />
          </HistoryRouter>
        );
      } else if (routeType === 'browser') {
        return (
          <BrowserRouter window={window}>
            <RouteChild
              addModels={props.addModels}
              isAutoAuth={isAutoAuth}
              notLoginMenus={notLoginMenus}
              navigateTo={navigateTo}
            />
          </BrowserRouter>
        );
      }
      return (
        <HashRouter window={window}>
          <RouteChild
            addModels={props.addModels}
            isAutoAuth={isAutoAuth}
            notLoginMenus={notLoginMenus}
            navigateTo={navigateTo}
          />
        </HashRouter>
      );
    }
  }, [routeType]);

  if (load) {
    return <div>Loading...</div>;
  }
  return <Provider store={store}>{dom}</Provider>;
}
