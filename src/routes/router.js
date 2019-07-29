import React from 'react';
import dynamic from 'react-dynamic-loadable';
import { store } from '../models';

// wrapper of dynamic
const dynamicWrapper = (models, component) => dynamic({
  models: () => models.map((m) => {
    return import(`../models/${m}.js`).then((md) => {
      const modelData = md.default || md;
      store.model({ name: m, ...modelData });
    });
  }),
  component,
  LoadingComponent: () => <span>loading....</span>,
});

export const getRouterData = () => {
  const conf = {
    '/help': {
      component: dynamicWrapper([], () => import('../layouts/HelpLayout')),
    },
    '/help/': {
      component: dynamicWrapper([], () => import('../pages/help/dashboard')),
    },
    '/login': {
      component: dynamicWrapper([], () => import('../layouts/UserLayout')),
    },
    '/login/': {
      component: dynamicWrapper(['login'], () => import('../pages/login')),
    },
    '/': {
      component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
    },
    '/home': {
      component: dynamicWrapper([], () => import('../pages/home')),
    },
  };
  return conf;
};
