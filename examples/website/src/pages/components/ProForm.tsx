import Markdown from '../../components/Markdown';
import { ProForm } from '@uiw-admin/components';
import { Button, Notify, Slider, formatter } from 'uiw';

export default class Page extends Markdown {
  editorUrl = '/packages/components/src/ProForm/README.md';
  dependencies: any = { ProForm, Button, Notify, Slider, formatter };
  getMdStr = () => import('@uiw-admin/components/src/ProForm/README.md');
}
