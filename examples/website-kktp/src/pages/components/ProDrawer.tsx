import Markdown from '../../components/Markdown';
import { ProDrawer, ProForm } from '@uiw-admin/components';
import { Button } from 'uiw';

export default class Page extends Markdown {
  editorUrl = '/packages/components/src/ProDrawer/README.md';
  dependencies: any = { ProDrawer, Button, ProForm };
  getMdStr = () => import('@uiw-admin/components/src/ProDrawer/README.md');
}
