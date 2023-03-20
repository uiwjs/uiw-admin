import Markdown from '../../components/Markdown';
import { ProForm, useForm } from '@uiw-admin/components';
import { Button, Notify, Slider, formatter, Card, Input } from 'uiw';

export default class Page extends Markdown {
  editorUrl = '/packages/components/src/ProForm/README.md';
  dependencies: any = {
    ProForm,
    Button,
    Notify,
    Slider,
    formatter,
    useForm,
    Card,
    Input,
  };
  getMdStr = () => import('@uiw-admin/components/src/ProForm/README.md');
}
