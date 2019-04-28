import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider } from 'uiw';
import classNames from 'classnames';
import PageHeader from '../../components/PageHeader';
import styles from './AdvancedProfile.module.less';

const ButtonGroup = Button.Group;

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
    const action = (
      <div>
        <ButtonGroup>
          <Button>操作</Button>
          <Button>操作</Button>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button><Icon type="ellipsis" /></Button>
          </Dropdown>
        </ButtonGroup>
        <Button type="primary">主操作</Button>
      </div>
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
    return (
      <div>
        <PageHeader
          logo={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />}
          // title="单号：234231029431"
          // action={action}
          // extraContent={extra}
          // tabList={tabList}
        />
      </div>
    );
  }
}
