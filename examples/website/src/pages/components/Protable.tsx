import Markdown from '../../components/Markdown';
import { ProTable, useTable } from '@uiw-admin/components';

export default class Protable extends Markdown {
  editorUrl = '/packages/components/src/ProTable/README.md';
  dependencies = { ProTable, useTable };
  getMdStr = () => import('@uiw-admin/components/src/ProTable/README.md');
}
