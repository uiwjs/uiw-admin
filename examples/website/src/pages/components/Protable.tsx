import Markdown from '../../components/Markdown';

export default class Protable extends Markdown {
  editorUrl = '/packages/components/src/ProTable/README.md';
  // dependencies = { };
  getMdStr = () => import('@uiw-admin/components/src/ProTable/README.md');
}
