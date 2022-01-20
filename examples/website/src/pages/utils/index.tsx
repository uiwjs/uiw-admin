import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/utils/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/utils/README.md');
}
