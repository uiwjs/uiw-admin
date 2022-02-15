import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/create-uiw-admin/README.md';
  // dependencies = { };
  getMdStr = () => import('create-uiw-admin/README.md');
}
