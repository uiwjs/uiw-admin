import React from 'react';

import Components0ComponentsBaseLayout from '@/components/BaseLayout';

import Components1PagesQuickStart from '@/pages/quick-start';

import Components2PagesQuickStart from '@/pages/quick-start';

import Components3PagesMocker from '@/pages/mocker';

import Components4PagesProxy from '@/pages/proxy';

import Components5PagesAuthorized from '@/pages/authorized';

import Components6PagesBasicLayouts from '@/pages/basic-layouts';

import Components7PagesComponents from '@/pages/components';

import Components8PagesConfig from '@/pages/config';

import Components9PagesModels from '@/pages/models';

import Components10PagesLayoutTabs from '@/pages/layout-tabs';

import Components11PagesDocumentTitle from '@/pages/document-title';

import Components12PagesExceptions from '@/pages/exceptions';

import Components13PagesPlugins from '@/pages/plugins';

import Components14PagesUtils from '@/pages/utils';

import Components15PagesRouterControl from '@/pages/router-control';

import Components16PagesUserLogin from '@/pages/user-login';

import Components17PagesComponentsProtable from '@/pages/components/Protable';

import Components18PagesComponentsProDrawer from '@/pages/components/ProDrawer';

import Components19PagesComponentsProForm from '@/pages/components/ProForm';

import Components20PagesComponentsSkeleton from '@/pages/components/Skeleton';

import Components21PagesEslintConfig from '@/pages/eslint-config';

import Components22ComponentsNoMatch from '@/components/NoMatch';

import Components23PagesExample from '@/pages/example';

export default [
  {
    path: '/',
    element: <Components0ComponentsBaseLayout />,
    children: [
      {
        index: true,
        element: <Components1PagesQuickStart />,
        loader: Components1PagesQuickStart.loader,
      },
      {
        path: '/quick-start/*',
        element: <Components2PagesQuickStart />,
        loader: Components2PagesQuickStart.loader,
      },
      {
        path: '/mocker/*',
        element: <Components3PagesMocker />,
        loader: Components3PagesMocker.loader,
      },
      {
        path: '/proxy/*',
        element: <Components4PagesProxy />,
        loader: Components4PagesProxy.loader,
      },
      {
        path: '/authorized/*',
        element: <Components5PagesAuthorized />,
        loader: Components5PagesAuthorized.loader,
      },
      {
        path: '/basic-layouts/*',
        element: <Components6PagesBasicLayouts />,
        loader: Components6PagesBasicLayouts.loader,
      },
      {
        path: '/components/*',
        element: <Components7PagesComponents />,
        loader: Components7PagesComponents.loader,
      },
      {
        path: '/config/*',
        element: <Components8PagesConfig />,
        loader: Components8PagesConfig.loader,
      },
      {
        path: '/models/*',
        element: <Components9PagesModels />,
        loader: Components9PagesModels.loader,
      },
      {
        path: '/layout-tabs/*',
        element: <Components10PagesLayoutTabs />,
        loader: Components10PagesLayoutTabs.loader,
      },
      {
        path: '/document-title/*',
        element: <Components11PagesDocumentTitle />,
        loader: Components11PagesDocumentTitle.loader,
      },
      {
        path: '/exceptions/*',
        element: <Components12PagesExceptions />,
        loader: Components12PagesExceptions.loader,
      },
      {
        path: '/plugins/*',
        element: <Components13PagesPlugins />,
        loader: Components13PagesPlugins.loader,
      },
      {
        path: '/utils/*',
        element: <Components14PagesUtils />,
        loader: Components14PagesUtils.loader,
      },
      {
        path: '/router-control/*',
        element: <Components15PagesRouterControl />,
        loader: Components15PagesRouterControl.loader,
      },
      {
        path: '/user-login/*',
        element: <Components16PagesUserLogin />,
        loader: Components16PagesUserLogin.loader,
      },
      {
        path: '/protable/*',
        element: <Components17PagesComponentsProtable />,
        loader: Components17PagesComponentsProtable.loader,
      },
      {
        path: '/prodrawer/*',
        element: <Components18PagesComponentsProDrawer />,
        loader: Components18PagesComponentsProDrawer.loader,
      },
      {
        path: '/proform/*',
        element: <Components19PagesComponentsProForm />,
        loader: Components19PagesComponentsProForm.loader,
      },
      {
        path: '/skeleton/*',
        element: <Components20PagesComponentsSkeleton />,
        loader: Components20PagesComponentsSkeleton.loader,
      },
      {
        path: '/eslint-config/*',
        element: <Components21PagesEslintConfig />,
        loader: Components21PagesEslintConfig.loader,
      },
      {
        path: '*',
        element: <Components22ComponentsNoMatch />,
        loader: Components22ComponentsNoMatch.loader,
      },
    ],
    loader: Components0ComponentsBaseLayout.loader,
  },
  {
    path: '/example',
    element: <Components23PagesExample />,
    loader: Components23PagesExample.loader,
  },
];
