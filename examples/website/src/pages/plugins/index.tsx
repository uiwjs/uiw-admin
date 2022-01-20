import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/plugins/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/plugins/README.md');
}
