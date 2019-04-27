import React, { Component } from 'react';
import { Card, Badge, Table, Divider } from 'uiw';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DescriptionList from '../../components/DescriptionList';
import { getProfileBasicData } from './profile';
import styles from './BasicProfile.module.less';

const { Description } = DescriptionList;

export default class BasicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log('profile', getProfileBasicData);
    let goodsData = [];
    if (getProfileBasicData.basicGoods.length) {
      let num = 0;
      let amount = 0;
      getProfileBasicData.basicGoods.forEach((item) => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      goodsData = getProfileBasicData.basicGoods.concat({
        id: '总计',
        num,
        amount,
      });
    }
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === getProfileBasicData.basicGoods.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    };

    const goodsColumns = [{
      title: '商品编号',
      key: 'id',
    }, {
      title: '商品名称',
      key: 'name',
    }, {
      title: '商品条码',
      key: 'barcode',
    }, {
      title: '单价',
      key: 'price',
    }, {
      title: '数量（件）',
      key: 'num',
      // render: (text, row, index) => {
      //   if (index < getProfileBasicData.basicGoods.length) {
      //     return text;
      //   }
      //   return <span style={{ fontWeight: 600 }}>{text}</span>;
      // },
    }, {
      title: '金额',
      key: 'amount',
      // render: (text, row, index) => {
      //   if (index < getProfileBasicData.basicGoods.length) {
      //     return text;
      //   }
      //   return <span style={{ fontWeight: 600 }}>{text}</span>;
      // },
    }];
    const progressColumns = [{
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    }, {
      title: '当前进度',
      dataIndex: 'rate',
      key: 'rate',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        text === 'success' ? <Badge color="#28a745">成功</Badge> : <Badge color="#ffc107">进行中</Badge>
      ),
    }, {
      title: '操作员ID',
      dataIndex: 'operator',
      key: 'operator',
    }, {
      title: '耗时',
      dataIndex: 'cost',
      key: 'cost',
    }];
    return (
      <div>
        <PageHeader title="基础详情页" />
        <Card bordered={false} style={{ margin: 15 }}>
          <DescriptionList title="退款申请" column={3} layout="vertical">
            <Description term="取货单号">1000000000</Description>
            <Description term="状态">已取货</Description>
            <Description term="销售单号">12341234122</Description>
            <Description term="子订单">43211234122</Description>
          </DescriptionList>
          <Divider />
          <DescriptionList title="用户信息" column={3} layout="vertical">
            <Description term="用户姓名">Adam Lee</Description>
            <Description term="联系电话">18100000000</Description>
            <Description term="常用快递">菜鸟仓储</Description>
            <Description term="取货地址">上海市青浦区E通世界1018号</Description>
            <Description term="备注">无</Description>
          </DescriptionList>
          <Divider />
          <div className={styles.title}>退货商品</div>
          <Table
            style={{ marginBottom: 24 }}
            data={goodsData}
            columns={goodsColumns}
          />
          <Table
            style={{ marginBottom: 24 }}
            data={getProfileBasicData.basicProgress}
            columns={progressColumns}
          />
        </Card>
      </div>
    );
  }
}

