import React from 'react';
import { Row, Col, Card, Tooltip, Icon } from 'uiw';
import styles from './analysis.module.less';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Row gutter={10}>
          <Col grow={2}>
            <Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
              <div>
                <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
              </div>
              <div>
                <h3 style={{ margin: 0 }}>我爱漂亮妹妹</h3>
                <p style={{ margin: 0 }}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
