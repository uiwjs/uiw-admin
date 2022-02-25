import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/uiw-admin/README.md';
  // dependencies = { };
  getMdStr = () => import('./README.md');
}
