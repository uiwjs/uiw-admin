import { Navigate } from 'react-router-dom';

const routeList = [
  {
    path: '/example',
    element: '@/pages/example',
  },
  {
    path: '/',
    element: '@/components/Layouts/index',
    children: [
      {
        index: true,
        redirect: '/home',
      },
      { path: '/home', element: '@/pages/home' },
      {
        path: '/docs',
        children: [
          {
            index: true,
            redirect: '/docs/quick-start',
          },
          { path: '/docs/quick-start/*', element: '@/pages/quick-start' },
          { path: '/docs/newPages/*', element: '@/pages/newPages' },
          { path: '/docs/mocker/*', element: '@/pages/mocker' },
          { path: '/docs/request/*', element: '@/pages/request' },
          { path: '/docs/models/*', element: '@/pages/models' },
          { path: '/docs/auth/*', element: '@/pages/auth' },
          { path: '/docs/proxy/*', element: '@/pages/proxy' },
          { path: '/docs/eslint-config/*', element: '@/pages/eslint-config' },
        ],
      },
      {
        path: '/components',
        children: [
          {
            index: true,
            redirect: '/components/authorized',
          },
          { path: '/components/authorized/*', element: '@/pages/authorized' },
          {
            path: '/components/basic-layouts/*',
            element: '@/pages/basic-layouts',
          },
          { path: '/components/config/*', element: '@/pages/config' },
          {
            path: '/components/document-title/*',
            element: '@/pages/document-title',
          },
          { path: '/components/exceptions/*', element: '@/pages/exceptions' },
          {
            name: '选项卡',
            path: '/components/layout-tabs/*',
            element: '@/pages/layout-tabs',
          },
          { path: '/components/plugins/*', element: '@/pages/plugins' },
          {
            name: '登录页',
            path: '/components/user-login/*',
            element: '@/pages/user-login',
          },
          { path: '/components/utils/*', element: '@/pages/utils' },
          { path: '/components/components/*', element: '@/pages/components' },
          {
            path: '/components/protable/*',
            element: '@/pages/components/Protable',
          },
          {
            path: '/components/prodrawer/*',
            element: '@/pages/components/ProDrawer',
          },
          {
            path: '/components/proform/*',
            element: '@/pages/components/ProForm',
          },
          {
            path: '/components/skeleton/*',
            element: '@/pages/components/Skeleton',
          },
        ],
      },
      { path: '*', element: '@uiw-admin/exceptions/esm/Exceptions/404' },
    ],
  },
  { path: '*', element: '@uiw-admin/exceptions/esm/Exceptions/404' },
];

export default routeList;
