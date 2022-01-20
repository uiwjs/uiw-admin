import Markdown from '../../components/Markdown';

export default class Skeleton extends Markdown {
  editorUrl = '/packages/components/src/Skeleton/README.md';
  getMdStr = () => import('@uiw-admin/components/src/Skeleton/README.md');
}
