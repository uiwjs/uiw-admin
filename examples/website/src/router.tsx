import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/BaseLayout';
import NoMatch from './components/NoMatch';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

// const Home = Loadable(lazy(() => import('./pages/home')));
const Example = Loadable(lazy(() => import('./pages/example')));
const Authorized = Loadable(lazy(() => import('./pages/authorized')));
const QuickStart = Loadable(lazy(() => import('./pages/quick-start')));
const BasicLayouts = Loadable(lazy(() => import('./pages/basic-layouts')));
const Components = Loadable(lazy(() => import('./pages/components')));
const Config = Loadable(lazy(() => import('./pages/config')));
const Models = Loadable(lazy(() => import('./pages/models')));
const DocumentTitle = Loadable(lazy(() => import('./pages/document-title')));
const LayoutTabs = Loadable(lazy(() => import('./pages/layout-tabs')));
const Exceptions = Loadable(lazy(() => import('./pages/exceptions')));
const Plugins = Loadable(lazy(() => import('./pages/plugins')));
const Utils = Loadable(lazy(() => import('./pages/utils')));
const RouterControl = Loadable(lazy(() => import('./pages/router-control')));
const UserLogin = Loadable(lazy(() => import('./pages/user-login')));
const Protable = Loadable(lazy(() => import('./pages/components/Protable')));
const Skeleton = Loadable(lazy(() => import('./pages/components/Skeleton')));

export const routes: RouteObject[] = [
  {
    path: '/example',
    element: <Example />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <QuickStart /> },
      { path: '/quick-start', element: <QuickStart /> },
      { path: '/authorized', element: <Authorized /> },
      { path: '/basic-layouts', element: <BasicLayouts /> },
      { path: '/components', element: <Components /> },
      { path: '/config', element: <Config /> },
      { path: '/models', element: <Models /> },
      { path: '/layout-tabs', element: <LayoutTabs /> },
      { path: '/document-title', element: <DocumentTitle /> },
      { path: '/exceptions', element: <Exceptions /> },
      { path: '/plugins', element: <Plugins /> },
      { path: '/utils', element: <Utils /> },
      { path: '/router-control', element: <RouterControl /> },
      { path: '/user-login', element: <UserLogin /> },
      { path: '/protable', element: <Protable /> },
      { path: '/skeleton', element: <Skeleton /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];
