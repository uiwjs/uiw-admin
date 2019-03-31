import React from 'react';
import { Avatar, Row, Col, Card } from 'uiw';
import { Link } from 'react-router-dom';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import styles from './index.module.less';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

export default class Dashboard extends React.Component {
  render() {
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar size="large" src="https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            早安，热巴，祝你开心每一天！
          </div>
          <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时。</div>
        </div>
      </div>
    );
    const pageHeaderExtra = (
      <div className={styles.pageHeaderExtra}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>2<span> / 14</span></p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>1,235</p>
        </div>
      </div>
    );
    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={pageHeaderExtra}>
        <Row gutter={10} style={{ margin: '15px 7px' }}>
          <Col grow={4}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 15 }}
              title="进行中的项目"
              bordered={false}
              extra={<a href="#">全部项目</a>}
              bodyStyle={{ padding: 0 }}
            >
              <Card className={styles.projectGrid}>
                <div className={styles.cardTitle}>
                  <div className={styles.cardTitle}>
                    <Avatar size="small" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
                    <Link to="#">我爱漂亮妹妹</Link>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.description}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
                </div>
              </Card>
            </Card>
            <Card
              title="动态"
              style={{ marginBottom: 15 }}
            >
              <div>1212</div>
            </Card>
          </Col>
          <Col grow={2}>
            <Card
              title="快速开始 / 便捷导航"
              style={{ marginBottom: 15 }}
            >
              <EditableLinkGroup
                links={links}
                onAdd={() => { console.log('===>>', 'onAdd'); }}
                linkElement={Link}
              />

            </Card>
            <Card
              title="XX 指数"
              style={{ marginBottom: 15 }}
            >
              <div>111</div>
            </Card>
            <Card
              title="团队"
              style={{ marginBottom: 15 }}
            >
              <div>666</div>
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
