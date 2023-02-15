import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/config/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/config/README.md');
}
