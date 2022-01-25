import Markdown from '../../components/Markdown';
import { Skeleton } from '@uiw-admin/components';

export default class Demo extends Markdown {
  editorUrl = '/packages/components/src/Skeleton/README.md';
  dependencies = { Skeleton };
  getMdStr = () => import('@uiw-admin/components/src/Skeleton/README.md');
}
