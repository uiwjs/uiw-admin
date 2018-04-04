import React, { Component } from 'react';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default class FormElements extends Component {
  render() {
    return (
      <PageHeaderLayout title="表单元素" content="高级表单常见于一次性输入和提交大批量数据的场景。（示例采用响应式表单，也可使用模板驱动方式）">
        <h2 className="a">这里是内容</h2>
        <p className="a">这里是内容</p>
      </PageHeaderLayout>
    );
  }
}
