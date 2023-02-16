import Markdown from '../../components/Markdown';
import LayoutTabs from '@uiw-admin/layout-tabs';
import { HashRouter } from 'react-router-dom';
import BasicLayout from '@uiw-admin/basic-layouts';

export default class Page extends Markdown {
  editorUrl = '/packages/layout-tabs/README.md';
  dependencies = { LayoutTabs, HashRouter, BasicLayout };
  getMdStr = () => import('@uiw-admin/layout-tabs/README.md');
}
