import React from 'react';
import dynamic from 'react-dynamic-loadable';
import { store } from '../store';

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
    '/dashboard': {
      component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
    },
    '/dashboard/dashboard': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/dashboard')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/analysis')),
    },
  };
  return conf;
};
