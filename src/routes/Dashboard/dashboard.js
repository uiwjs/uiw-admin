import React from 'react';
import { Button } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class Dashboard extends React.Component {
  render() {
    return (
      <PageHeaderLayout title="仪表盘" content="hello" showBreadcrumb={false}>
        eeee
      </PageHeaderLayout>
    );
  }
}
