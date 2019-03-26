import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'uiw';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card title="快捷入口">
          <div>
            <h1>欢迎使用uiw ui</h1>
            <Row>
              <Col span={6}>
                <Link to="#">
                  <Button size="large" type="dashed" icon="desktop">网点报价管理</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}
