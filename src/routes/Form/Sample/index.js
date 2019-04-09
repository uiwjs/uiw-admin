import React from 'react';
import { Form, FormItem, Input, Row, Col, Button } from 'uiw';
import PageHeader from '../../../components/PageHeader';
import styles from './index.module.less';

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
        <div className={styles.sampleForm}>
          <FormItem
            label="可选字段"
            labelFor="basic-input-inline"
          >
            <Input id="basic-input-inline" type="text"/>
          </FormItem>
          <FormItem
            label="用户名"
            labelFor="username-input-inline"
            labelClassName="username"
            help="用户名长度至少为8个字符串。"
          >
            <Input id="username-input-inline" type="text"/>
          </FormItem>
        </div>
      </div>
    );
  }
}
