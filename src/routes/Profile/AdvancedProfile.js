import React, { Component } from 'react';
import { Button, ButtonGroup, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider } from 'uiw';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PageHeader from '../../components/PageHeader';
import DescriptionList from '../../components/DescriptionList';
import styles from './AdvancedProfile.module.less';

const { Description } = DescriptionList;
export default class AdvancedProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationkey: 'tab1',
      stepDirection: 'horizontal',
    };
  }
  render() {
    const { stepDirection } = this.state;
    const menu = (
      <Menu>
        <Menu.Item key="1">选项一</Menu.Item>
        <Menu.Item key="2">选项二</Menu.Item>
        <Menu.Item key="3">选项三</Menu.Item>
      </Menu>
    );
    const extra = (
      <Row>
        <Col xs={24} sm={12}>
          <div className={styles.textSecondary}>状态</div>
          <div className={styles.heading}>待审批</div>
        </Col>
        <Col xs={24} sm={12}>
          <div className={styles.textSecondary}>订单金额</div>
          <div className={styles.heading}>¥ 568.08</div>
        </Col>
      </Row>
    );
    const tabList = [{
      key: 'detail',
      tab: '详情',
    }, {
      key: 'rule',
      tab: '规则',
    }];
    const description = (
      <DescriptionList className={styles.headerList} column={2} layout="vertical" col="2">
        <Description term="创建人">小莉</Description>
        <Description term="订购产品">XX 服务</Description>
        <Description term="创建时间">2017-07-07</Description>
        <Description term="关联单据"><Link to="/">12421</Link></Description>
        <Description term="生效日期">2017-07-07 ~ 2017-08-08</Description>
        <Description term="备注">请于两个工作日内确认</Description>
      </DescriptionList>
    );
    const desc1 = (
      <div className={classNames(styles.textSecondary, styles.stepDescription)}>
        <div>
          小莉
          <Icon type="dingding-o" style={{ marginLeft: 8 }} />
        </div>
        <div>2016-12-12 12:32</div>
      </div>
    );

    const desc2 = (
      <div className={styles.stepDescription}>
        <div>
          安安
          <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
        </div>
        <div><Link to="/">催一下</Link></div>
      </div>
    );
    return (
      <div>
        <PageHeader
          logo={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />}
          title="单号：234231029431"
          content={description}
          extraContent={extra}
          tabList={tabList}
        />
        <div style={{ margin: 15 }}>
          <Card title="流程进度" style={{ marginBottom: 15 }} bordered={false}>
            <Steps direction={stepDirection} progressDot current={1}>
              <Steps.Step title="创建项目" description={desc1} />
              <Steps.Step title="部门初审" description={desc2} />
              <Steps.Step title="财务复核" />
              <Steps.Step title="完成" />
            </Steps>
          </Card>
        </div>
      </div>
    );
  }
}
