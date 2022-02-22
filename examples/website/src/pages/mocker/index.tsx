import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = './README.md';
  // dependencies = { };
  getMdStr = () => import('./README.md');
}
