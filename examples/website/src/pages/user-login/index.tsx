import Markdown from '../../components/Markdown';
import UserLogin from '@uiw-admin/user-login';
import { Notify } from 'uiw';
import { Form, Row, Col, Button } from 'uiw';

export default class Page extends Markdown {
  editorUrl = '/packages/user-login/README.md';
  dependencies = { UserLogin, Notify, Form, Row, Col, Button };
  getMdStr = () => import('@uiw-admin/user-login/README.md');
}
