import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './config';

let router;
let navigate;
export const createRouter = (routes, options) => {
  router = createHashRouter(routes, options);
  navigate = router.navigate;
  return router;
};
export { router, navigate };

export default () => (
  <RouterProvider
    router={createRouter(routesConfig)}
    fallbackElement={<div>loading...</div>}
  />
);
