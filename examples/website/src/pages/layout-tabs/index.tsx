import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/layout-tabs/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/layout-tabs/README.md');
}
