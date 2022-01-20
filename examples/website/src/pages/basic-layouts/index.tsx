import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/basic-layouts/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/basic-layouts/README.md');
}
