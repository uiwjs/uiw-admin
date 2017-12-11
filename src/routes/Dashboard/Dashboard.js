import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class Dashboard extends Component {
  render() {
    return (
      <PageHeaderLayout title="仪表盘" content="欢迎回来" showBreadcrumb={false}>
        这里是内容
      </PageHeaderLayout>
    );
  }
}
