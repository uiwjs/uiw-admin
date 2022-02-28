import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/eslint-packages/config/README.md';
  // dependencies = { };
  getMdStr = () => import('./README.md');
}
