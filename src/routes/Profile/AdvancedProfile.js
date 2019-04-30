import React, { Component } from 'react';
import { Button, ButtonGroup, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider } from 'uiw';
import { Link } from 'react-router-dom';
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
    return (
      <div>
        <PageHeader
          logo={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />}
          title="单号：234231029431"
          content={description}
          extraContent={extra}
        />
      </div>
    );
  }
}
