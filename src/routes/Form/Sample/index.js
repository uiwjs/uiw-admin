import React from 'react';
import { Form, Input, Checkbox, Row, Col, Button } from 'uiw';
import PageHeader from '../../../components/PageHeader';
import styles from './index.module.less';

export default class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }
  render() {
    return (
      <div>
        <PageHeader
          title="基础表单"
          action={<a href="">编辑</a>}
          content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景"
        />
        <div className={styles.sampleForm}>
          <Form
            fields={{
              username: {
                labelClassName: 'fieldLabel',
                labelStyle: { width: 60 },
                labelFor: 'username',
                children: <Input preIcon="user" id="username" />,
              },
              password: {
                labelClassName: 'fieldLabel',
                labelStyle: { width: 60 },
                labelFor: 'password',
                children: <Input preIcon="lock" id="password" type="password" />,
              },
            }}
          >
            {({ fields, state, canSubmit }) => {
              console.log('fields:', state);
              return (
                <div>
                  <Row>
                    <Col fixed>{fields.username}</Col>
                  </Row>
                  <Row>
                    <Col fixed>{fields.password}</Col>
                  </Row>
                  <Row>
                    <Col fixed align="middle">{fields.terms}</Col>
                    <Col fixed style={{ marginTop: -4 }}><a href="#">服务条款</a></Col>
                  </Row>
                  <Row>
                    <Col fixed>
                      <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                    </Col>
                  </Row>
                </div>
              );
            }}
          </Form>
        </div>
      </div>
    );
  }
}
