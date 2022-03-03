import Markdown from '../../components/Markdown';
import NavBar from '@uiw-admin/markdown-navbar';

export default class Page extends Markdown {
  editorUrl = '/packages/markdown-navbar/README.md';
  dependencies = {};
  getMdStr = () => import('@uiw-admin/markdown-navbar/README.md');
}
