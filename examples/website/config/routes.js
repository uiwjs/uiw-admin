import { Navigate } from 'react-router-dom';

const routeList = [
  {
    path: '/example',
    element: '@/pages/example',
  },
  {
    path: '/',
    element: '@/components/BaseLayout',
    children: [
      {
        path: '/',
        element: <Navigate to="/quick-start" />,
      },
      { path: '/quick-start/*', element: '@/pages/quick-start' },
      { path: '/authorized/*', element: '@/pages/authorized' },
      { path: '/mocker/*', element: '@/pages/mocker' },
      { path: '/proxy/*', element: '@/pages/proxy' },
      { path: '/basic-layouts/*', element: '@/pages/basic-layouts' },
      { path: '/components/*', element: '@/pages/components' },
      { path: '/config/*', element: '@/pages/config' },
      { path: '/models/*', element: '@/pages/models' },
      { path: '/layout-tabs/*', element: '@/pages/layout-tabs' },
      { path: '/document-title/*', element: '@/pages/document-title' },
      { path: '/exceptions/*', element: '@/pages/exceptions' },
      { path: '/plugins/*', element: '@/pages/plugins' },
      { path: '/utils/*', element: '@/pages/utils' },
      { path: '/router-control/*', element: '@/pages/router-control' },
      { path: '/user-login/*', element: '@/pages/user-login' },
      { path: '/protable/*', element: '@/pages/components/Protable' },
      { path: '/prodrawer/*', element: '@/pages/components/ProDrawer' },
      { path: '/proform/*', element: '@/pages/components/ProForm' },
      { path: '/skeleton/*', element: '@/pages/components/Skeleton' },
      { path: '/eslint-config/*', element: '@/pages/eslint-config' },
      { path: '*', element: '@/components/NoMatch' },
    ],
  },
  { path: '*', element: '@/components/NoMatch' },
];

export default routeList;
