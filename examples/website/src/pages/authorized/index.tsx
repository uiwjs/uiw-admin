import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/authorized/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/authorized/README.md');
}
