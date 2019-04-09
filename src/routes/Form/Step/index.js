import React from 'react';
import { Steps, Form, Input, Select, Row, Col, Button, message, Spin } from 'uiw';
import PageHeader from '../../../components/PageHeader';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false, // 确认密码框是否输入过
      current: 0,
      valueZero: {},
      valueOne: {},
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <PageHeader
          title="分步表单"
        />
      </div>
    );
  }
}
