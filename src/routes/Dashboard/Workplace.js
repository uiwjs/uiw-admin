import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class Workplace extends Component {
  render() {
    return (
      <PageHeaderLayout title="早安，热巴，祝你开心每一天！" content="曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。">
        这里是内容
      </PageHeaderLayout>
    );
  }
}
