import React from 'react'

import Components0LayoutsUserLayout from '@/layouts/UserLayout'

import Components1LayoutsBasicLayout from '@/layouts/BasicLayout'

import Components2PagesTableList from '@/pages/TableList'

import Components3PagesTableList from '@/pages/TableList'

import Components4PagesTableList from '@/pages/TableList'

import Components5PagesTableList from '@/pages/TableList'

import Components6PagesDashboard from '@/pages/Dashboard'

import Components7PagesDemo from '@/pages/Demo'

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
        element: <Components2PagesTableList />,
        loader: Components2PagesTableList.loader,
      },
      {
        path: '/tableList',
        name: '查询表格',
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
        path: '/tableList/:id',
        name: '查询表格2',
        element: <Components4PagesTableList />,
        icon: 'search',
        navigate: (navigate) => {
          navigate('/tableList', {
            replace: true,
          })
        },
        loader: Components4PagesTableList.loader,
      },
      {
        path: '/home',
        name: '首页',
        element: <Components5PagesTableList />,
        icon: 'home',
        loader: Components5PagesTableList.loader,
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
            element: <Components6PagesDashboard />,
            loader: Components6PagesDashboard.loader,
          },
        ],
      },
      {
        path: '/demo',
        name: '列表查询/新增demo',
        element: <Components7PagesDemo />,
        icon: 'element',
        loader: Components7PagesDemo.loader,
      },
    ],
    loader: Components1LayoutsBasicLayout.loader,
  },
]
