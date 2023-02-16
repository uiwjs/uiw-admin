import React from 'react'

import Components0LayoutsUserLayout from '@/layouts/UserLayout'

import Components1LayoutsBasicLayout from '@/layouts/BasicLayout'

import Components2PagesTableList from '@/pages/TableList'

import Components3PagesTableList from '@/pages/TableList'

import Components4PagesTableList from '@/pages/TableList'

import Components5PagesDashboard from '@/pages/Dashboard'

import Components6PagesDemo from '@/pages/Demo'

export default [
  {
    path: '/login',
    element: <Components0LayoutsUserLayout />,
    loader: Components0LayoutsUserLayout.loader,
  },
  {
    path: '/',
    element: <Components1LayoutsBasicLayout />,
    children: [
      {
        index: true,
        redirect: '/tableList',
      },
      {
        path: '/tableList',
        name: '查询表格',
        element: <Components2PagesTableList />,
        icon: 'search',
        navigate: (navigate) => {
          navigate('/tableList', {
            replace: true,
          })
        },
        loader: Components2PagesTableList.loader,
      },
      {
        path: '/tableList/:id',
        name: '查询表格2',
        element: <Components3PagesTableList />,
        icon: 'search',
        navigate: (navigate) => {
          navigate('/tableList', {
            replace: true,
          })
        },
        loader: Components3PagesTableList.loader,
      },
      {
        path: '/home',
        name: '首页',
        element: <Components4PagesTableList />,
        icon: 'home',
        loader: Components4PagesTableList.loader,
      },
      {
        path: '/dom',
        name: '子项',
        icon: 'copy',
        isAuth: true,
        side: true,
        children: [
          {
            index: true,
            path: '/dom/courses',
            name: 'Dashboard',
            isAuth: true,
            element: <Components5PagesDashboard />,
            loader: Components5PagesDashboard.loader,
          },
        ],
      },
      {
        path: '/demo',
        name: '列表查询/新增demo',
        element: <Components6PagesDemo />,
        icon: 'element',
        loader: Components6PagesDemo.loader,
      },
    ],
    loader: Components1LayoutsBasicLayout.loader,
  },
]
