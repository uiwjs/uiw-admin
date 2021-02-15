import { Routers } from '@uiw-admin/router-control';

export const routers: Routers[] = [
  {
    path: '/login',
    component: () => import('../layouts/UserLayout'),
    models: ['login'],
  },
  { path: '/e', redirect: '/login' },
  {
    path: '/',
    component: () => import('../layouts/BasicLayout'),
    routes: [
      { path: '/', redirect: '/welcome' },
      {
        path: '/welcome',
        name: '首页',
        icon: 'home',
        component: () => import('../pages/Home'),
      },
      {
        path: '/dashboard',
        name: '仪表盘',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: '分析页',
            icon: 'pie-chart',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/dashboard/monitor',
            name: '监控页',
            icon: 'bar-chart',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/dashboard/workplace',
            name: '工作台',
            icon: 'bar-chart',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/dashboard/test',
            name: '测试',
            routes: [
              {
                path: '/dashboard/test/workplace',
                name: '工作台',
                icon: 'bar-chart',
                component: () => import('../pages/Dashboard'),
              },
            ],
          },
        ],
      },
      {
        path: '/list',
        name: '列表页',
        icon: 'table',
        routes: [
          {
            path: '/list/table-list',
            name: '查询列表',
            icon: 'table',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/list/basic-list',
            name: '标准列表',
            icon: 'table',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/list/card-list',
            name: '卡片列表',
            icon: 'table',
            component: () => import('../pages/Dashboard'),
          },
        ],
      },
      {
        path: '/profile',
        name: '个人设置',
        icon: 'user',
        routes: [
          {
            path: '/profile/center',
            name: '个人中心',
            icon: 'file-text',
            component: () => import('../pages/Dashboard'),
          },
          {
            path: '/profile/settings',
            name: '个人设置',
            icon: 'file-text',
            component: () => import('../pages/Dashboard'),
          },
        ],
      },
    ],
  },
];
