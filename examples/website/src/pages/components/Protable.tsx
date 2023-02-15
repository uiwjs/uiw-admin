import Markdown from '../../components/Markdown';
import { ProTable, useTable } from '@uiw-admin/components';
import { Dropdown, Menu, ButtonGroup, Button, Divider, Icon } from 'uiw';

export default class Protable extends Markdown {
  editorUrl = '/packages/components/src/ProTable/README.md';
  dependencies = {
    ProTable,
    useTable,
    Dropdown,
    Menu,
    ButtonGroup,
    Button,
    Divider,
    Icon,
  };
  getMdStr = () => import('@uiw-admin/components/src/ProTable/README.md');
}
