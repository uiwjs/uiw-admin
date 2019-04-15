import React from 'react';
import { Avatar, Row, Col, Card, formatter, List } from 'uiw';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PageHeader from '../../components/PageHeader';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import DashboardData from './dashboardData';
import styles from './index.module.less';

export default class Dashboard extends React.Component {
  renderActivities = () => {
    DashboardData.activities.length > 0 && DashboardData.activities.map((item) => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
        if (item[key]) {
          return <a href={item[key].link} key={item[key].name}>{item[key].name}</a>;
        }
        return key;
      });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={
              <span>
                <a>{item.user.name}</a>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
                {moment(item.updatedAt).fromNow()}
              </span>
            }
          />
        </List.Item>
      );
    });
  }
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
      <div>
        <PageHeader content={pageHeaderContent} extraContent={pageHeaderExtra} />
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
              {
                DashboardData.notice.length > 0 && DashboardData.notice.map(item => (
                  <Card className={styles.projectGrid} key={item.id}>
                    <div className={styles.cardTitle}>
                      <div className={styles.cardTitle}>
                        <Avatar size="small" src={item.logo} />
                        <Link to="#">{item.title}</Link>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.description}>{item.description}</div>
                      <p className={styles.projectItemContent}><a href="https://uiwjs.github.io">{item.member}</a><span>{formatter(item.updatedAt)}</span></p>
                    </div>
                  </Card>
                ))
              }
            </Card>
            <Card
              title="动态"
              style={{ marginBottom: 15 }}
              bordered={false}
            >
              <List>
                <List.Item>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
                <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
                <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
              </List>
            </Card>
          </Col>
          <Col grow={2}>
            <Card
              title="快速开始 / 便捷导航"
              style={{ marginBottom: 15 }}
            >
              <EditableLinkGroup
                links={DashboardData.links}
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
              <Row gutter={10}>
                {
                  DashboardData.members.map(item => (
                    <Col key={`menbers-item-${item.id}`} span="12">
                      <Link to={item.link} className={styles.membersLink}>
                        <Avatar src={item.logo} />
                        <span className={styles.members}>{item.title}</span>
                      </Link>
                    </Col>
                  ))
                }
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
