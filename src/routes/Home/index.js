import React, { Component } from 'react';
import { Row, Col, Card } from 'uiw';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card title="快捷入口">
          <div>
            <h1>欢迎使用uiw ui</h1>
            <Row>
              <Col span={6}>
                <div>11111</div>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}
