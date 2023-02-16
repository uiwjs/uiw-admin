import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import routesConfig from './config'
import RoutesOutletElement from '@/routesOutletElement'

let router
let navigate
export const createRouter = (routes, options) => {
  router = createHashRouter(routes, options)
  navigate = router.navigate
  return router
}
export { router, navigate }

export default () => (
  <RoutesOutletElement routes={routesConfig} createRouter={createRouter}>
    <RouterProvider
      router={createRouter(routesConfig)}
      fallbackElement={<div>loading...</div>}
    />
  </RoutesOutletElement>
)
