import Markdown from '../../components/Markdown';
import { AuthBtn } from '@uiw-admin/authorized';

export default class Page extends Markdown {
  editorUrl = '/packages/authorized/README.md';
  dependencies = { AuthBtn };
  getMdStr = () => import('@uiw-admin/authorized/README.md');
}
