import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/models/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/models/README.md');
}
