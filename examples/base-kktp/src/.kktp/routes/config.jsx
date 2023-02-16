import React from 'react'

import Components0LayoutsUserLayout from '@/layouts/UserLayout'

import Components1LayoutsBasicLayout from '@/layouts/BasicLayout'

import Components2LayoutsBasicLayout from '@/layouts/BasicLayout'

export default [
  {
    path: '/login',
    element: <Components0LayoutsUserLayout />,
    loader: Components0LayoutsUserLayout.loader,
  },
  {
    index: true,
    element: <Components1LayoutsBasicLayout />,
    loader: Components1LayoutsBasicLayout.loader,
  },
  {
    path: '/',
    element: <Components2LayoutsBasicLayout />,
    loader: Components2LayoutsBasicLayout.loader,
  },
]
