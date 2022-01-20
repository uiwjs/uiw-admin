import { Routers, Loadable } from '@uiw-admin/router-control';
import React from 'react';
import {
  Exceptions403,
  Exceptions500,
  Exceptions404,
} from '@uiw-admin/exceptions';

const BasicLayout = Loadable(
  React.lazy(() => import('../layouts/BasicLayout')),
);

// 这块内容需要进行转换掉
export const routers: Routers[] = [
  {
    path: '/login',
    models: ['login'],
    component: React.lazy(() => import('../pages/login')),
  },
  {
    path: '/',
    models: ['global', 'Doc/doc', 'demo'],
    component: <BasicLayout />,
    routes: [
      {
        index: true,
        redirect: '/tableList',
      },
      {
        path: '/tableList',
        name: '查询表格',
        component: React.lazy(() => import('../pages/TableList')),
      },
      {
        path: '/home',
        name: '首页',
        models: ['home'],
        component: <div>首页</div>,
      },
      {
        path: '/dom',
        name: '子项',
        routes: [
          {
            path: '/dom/courses',
            name: 'Dashboard',
            component: React.lazy(() => import('../pages/Dashboard')),
          },
        ],
      },
      {
        path: '/demo',
        name: 'demo',
        component: React.lazy(() => import('../pages/Demo')),
      },
      {
        path: '/exceptions',
        name: '异常',
        routes: [
          {
            path: '/exceptions/403',
            name: '403',
            component: <Exceptions403 />,
          },
          {
            path: '/exceptions/500',
            name: '500',
            component: <Exceptions500 />,
          },
          {
            path: '/exceptions/404',
            name: '404',
            component: <Exceptions404 />,
          },
        ],
      },
      {
        path: '/403',
        name: '403',
        hideInMenu: true,
        component: <Exceptions403 />,
      },
      {
        path: '/500',
        name: '500',
        hideInMenu: true,
        component: <Exceptions500 />,
      },
      {
        path: '/404',
        name: '404',
        hideInMenu: true,
        component: <Exceptions404 />,
      },
      {
        path: '*',
        name: '404',
        component: <Exceptions404 />,
      },
    ],
  },
];
