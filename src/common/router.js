import React from 'react';
import dynamic from 'react-dynamic-loadable';

// wrapper of dynamic
const dynamicWrapper = (models, component) => dynamic({
  models: () => {},
  component,
  LoadingComponent: () => <span>loading....</span>,
});

export const getRouterData = () => {
  const conf = {
    '/': {
      component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
    },
    '/dashboard/dashboard': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/Dashboard')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/Analysis')),
    },
    '/dashboard/workplace': {
      component: dynamicWrapper([], () => import('../routes/Dashboard/Workplace')),
    },
    '/component/form-page/step-form': {
      component: dynamicWrapper([], () => import('../routes/Component/FormPage/StepForm')),
    },
    '/component/form-page/advanced-form': {
      component: dynamicWrapper([], () => import('../routes/Component/FormPage/AdvancedForm')),
    },
    '/component/form/form': {
      component: dynamicWrapper([], () => import('../routes/Component/Form/FormElements')),
    },
    '/component/avatarlist': {
      component: dynamicWrapper([], () => import('../routes/Component/AvatarList')),
    },
    '/component/countdown': {
      component: dynamicWrapper([], () => import('../routes/Component/CountDown')),
    },
    '/component/ellipsis': {
      component: dynamicWrapper([], () => import('../routes/Component/Ellipsis')),
    },
    '/component/description-list': {
      component: dynamicWrapper([], () => import('../routes/Component/DescriptionList')),
    },
    '/component/result': {
      component: dynamicWrapper([], () => import('../routes/Component/Result')),
    },
    '/component/footer-toolbar': {
      component: dynamicWrapper([], () => import('../routes/Component/FooterToolbar')),
    },
    '/component/global-footer': {
      component: dynamicWrapper([], () => import('../routes/Component/GlobalFooter')),
    },
    '/component/charts/bar-chart': {
      component: dynamicWrapper([], () => import('../routes/Component/Charts/Bar')),
    },
    '/exception/403': {
      component: dynamicWrapper([], () => import('../routes/Exception/403')),
    },
    '/exception/404': {
      component: dynamicWrapper([], () => import('../routes/Exception/404')),
    },
    '/exception/500': {
      component: dynamicWrapper([], () => import('../routes/Exception/500')),
    },
  };

  return conf;
};
