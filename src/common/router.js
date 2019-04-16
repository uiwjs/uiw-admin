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
    '/': {
      component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
    },
    '/home': {
      component: dynamicWrapper([], () => import('../routes/Home/index')),
    },
    '/dashboard/dashboard': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/dashboard')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/analysis')),
    },
    '/form/sample': {
      component: dynamicWrapper([], () => import('../routes/Form/Sample')),
    },
    '/form/step': {
      component: dynamicWrapper([], () => import('../routes/Form/Step')),
    },
    '/result/success': {
      component: dynamicWrapper([], () => import('../routes/Result/Success')),
    },
  };
  return conf;
};
