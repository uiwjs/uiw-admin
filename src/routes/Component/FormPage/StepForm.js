import React, { Component } from 'react';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default class StepForm extends Component {
  render() {
    return (
      <PageHeaderLayout title="分步表单" content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
        <h2 className="a">这里是内容</h2>
        <p className="a">这里是内容</p>
      </PageHeaderLayout>
    );
  }
}
