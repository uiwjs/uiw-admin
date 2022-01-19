import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/canvas-layer/README.md';
  // dependencies = { };
  getMdStr = () => import('uiw-admin/README.md');
}
