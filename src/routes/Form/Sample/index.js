import React from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, message as Message, Spin } from 'uiw';
import PageHeader from '../../../components/PageHeader';


export default class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }
  render() {
    return (
      <div>
        <PageHeader
          title="基础表单"
          action={<a href="">编辑</a>}
          content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景"
        />
      </div>
    );
  }
}
