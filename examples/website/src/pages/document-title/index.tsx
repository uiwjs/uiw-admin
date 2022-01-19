import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/document-title/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/document-title/README.md');
}
