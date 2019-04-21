import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'uiw';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card title="快捷入口" style={{ margin: '15px 7px' }} >
          <div style={{ textAlign: 'center' }}>
            <h1>欢迎使用uiw ui</h1>
            <Row style={{ marginTop: 50 }}>
              <Col span={6}>
                <Link to="/">
                  <Button size="large" type="light" icon="uiw">网点报价管理</Button>
                </Link>
              </Col>
              <Col span={6}>
                <Link to="/">
                  <Button size="large" type="light" icon="uiw">网点报价管理</Button>
                </Link>
              </Col>
              <Col span={6}>
                <Link to="/">
                  <Button size="large" type="light" icon="uiw">网点报价管理</Button>
                </Link>
              </Col>
              <Col span={6}>
                <Link to="/">
                  <Button size="large" type="light" icon="uiw">网点报价管理</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Card>
        <Card title="自定义导航页面" style={{ margin: '15px 7px' }}>
          <p>点击选择按钮自定义需要的左导航模块</p>
          <Button type="primary" >自定义</Button>
        </Card>
        <Row gutter={15} style={{ marginTop: 15 }}>
          <Col span={12}>
            <Card title="饼状图">
              <p>ddd</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="柱状图">
              <p>ddd</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
