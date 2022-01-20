import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/components/src/ProDrawer/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/components/src/ProDrawer/README.md');
}
