import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/examples/website/src/pages/proxy/README.md';
  // dependencies = { };
  getMdStr = () => import('./README.md');
}
