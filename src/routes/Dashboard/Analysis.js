import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class Analysis extends Component {
  render() {
    return (
      <PageHeaderLayout title="数据分析" showBreadcrumb={false}>
        这里是内容
      </PageHeaderLayout>
    );
  }
}
