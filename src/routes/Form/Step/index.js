import React from 'react';
import { Steps, Form, Input, Select, Row, Col, Button, message, Spin } from 'uiw';
import PageHeader from '../../../components/PageHeader';
import styles from './index.module.less';

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
          content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成"
        />
        <div className={styles.stepForm}>
          <div className={styles.stepBox}>

          </div>
        </div>
      </div>
    );
  }
}
