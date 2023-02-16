import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/router-control/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/router-control/README.md');
}
