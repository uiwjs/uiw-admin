import React from 'react';
import classNames from 'classnames';
import { Steps, Form, Input, Select, Row, Col, Button, message, Spin } from 'uiw';
import PageHeader from '../../../components/PageHeader';
import styles from './index.module.less';

const steps = [{
  title: '用户验证',
}, {
  title: '修改密码',
}, {
  title: '完成',
}];

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
  /**
   * 获取分步展示页面执行函数
   */
  getStepView = () => {
    const { current } = this.state;
    switch (current) {
      case 0: return this.getStepZeroView();
      case 1: return this.getStepOneView();
      case 2: return this.getStepTowView();
      default: return this.getStepZeroView();
    }
  }

  /**
 * 获取第一步View函数
 */
  getStepZeroView = () => {
    const cls = classNames(styles.step, styles.stepZero);
    return (
      <div className={cls}>
        <Form
          onSubmit={({ initial, current }) => {
            const errorObj = {};
            if (current.userName.startsWith('u')) {
              errorObj.userName = `姓名 ${current.userName} 不能以 ‘u’ 开头`;
            }
            if (!current.checkboxOne) {
              errorObj.checkboxOne = '一个多选条件 为必填';
            }
            if (!current.terms) {
              errorObj.terms = '必须统一服务条款';
            }
            if (Object.keys(errorObj).length > 0) {
              const err = new Error();
              err.filed = errorObj;
              throw err;
            }
          }}
          onSubmitError={(error) => {
            if (error.filed) {
              return { ...error.filed };
            }
            return null;
          }}
          fields={{
            userName: {
              initialValue: 'uiw',
              label: '姓名',
              help: '以“u”开头的名字将在此处显示错误信息',
            },
            age: {
              initialValue: '9',
              label: '年龄',
              children: <Input type="number" />,
            },
          }}
        >
          {({ fields, state, canSubmit, resetForm }) => {
            console.log('fields:-->', state);
            return (
              <div style={{ maxWidth: 500 }}>
                <Row gutter={10}>
                  <Col>{fields.userName}</Col>
                </Row>
                <Row>
                  <Col>{fields.age}</Col>
                </Row>
                <Row gutter={10}>
                  <Col fixed>
                    <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                  </Col>
                </Row>
              </div>
            );
          }}
        </Form>
      </div>
    );
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <PageHeader
          title="分步表单"
          content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成"
        />
        <div className={styles.stepForm}>
          <div className={styles.stepBox}>
            <Steps current={current}>
              {steps.map(item => <Steps.Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">
              {this.getStepView()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
