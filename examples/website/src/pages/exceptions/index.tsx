import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/exceptions/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/exceptions/README.md');
}
