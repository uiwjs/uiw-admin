import React, { Component } from 'react';
import { Card, Badge, Table, Divider } from 'uiw';
import PageHeader from '../../components/PageHeader';
import DescriptionList from '../../components/DescriptionList';
import styles from './BasicProfile.module.less';

const { Description } = DescriptionList;

export default class BasicProfile extends Component {
  render() {
    return (
      <div>
        <PageHeader title="基础详情页" />
        <Card bordered={false} style={{ margin: 15 }}>
          <DescriptionList>
            <DescriptionList title="退款申请" column={3} layout="vertical" >
              <Description term="取货单号">1000000000</Description>
              <Description term="状态">已取货</Description>
              <Description term="销售单号">12341234122</Description>
              <Description term="子订单">43211234122</Description>
            </DescriptionList>
            <Divider />
          </DescriptionList>
        </Card>
      </div>
    );
  }
}

