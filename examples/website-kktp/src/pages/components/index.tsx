import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/components/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/components/README.md');
}
