import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/user-login/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/user-login/README.md');
}
