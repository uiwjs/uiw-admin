import Markdown from '../../components/Markdown';
import { HashRouter, useRoutes, Outlet, useLocation } from 'react-router-dom';
import BasicLayout, { useLayouts } from '@uiw-admin/basic-layouts';
import LayoutTabs from '@uiw-admin/layout-tabs';

export default class Page extends Markdown {
  editorUrl = '/packages/basic-layouts/README.md';
  dependencies = {
    HashRouter,
    useRoutes,
    Outlet,
    BasicLayout,
    useLayouts,
    LayoutTabs,
    useLocation,
  };
  getMdStr = () => import('@uiw-admin/basic-layouts/README.md');
}
