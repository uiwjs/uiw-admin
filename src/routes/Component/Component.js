import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class ComponentView extends Component {
  render() {
    return (
      <PageHeaderLayout title="组件" content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
        <h2 className="a">这里是内容</h2>
        <p className="a">这里是内容</p>
      </PageHeaderLayout>
    );
  }
}
