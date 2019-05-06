import React, { Component } from 'react';
import { Button, ButtonGroup, Menu, Dropdown, Icon, Row, Col, Steps, Card, Tabs, Badge, Table, Tooltip, Divider } from 'uiw';
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
      advancedLoading: true,
    };
  }
  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  };

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
    const operationTabList = [{
      key: 'tab1',
      tab: '操作日志一',
    }, {
      key: 'tab2',
      tab: '操作日志二',
    }, {
      key: 'tab3',
      tab: '操作日志三',
    }];
    const advancedOperation1 = [
      {
        key: 'op1',
        type: '订购关系生效',
        name: '牛小小',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
      },
      {
        key: 'op2',
        type: '财务复审',
        name: '熊小倩',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
      },
      {
        key: 'op3',
        type: '部门初审',
        name: '王毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
      },
      {
        key: 'op4',
        type: '提交订单',
        name: '刘东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
      },
      {
        key: 'op5',
        type: '创建订单',
        name: '张益达',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
      },
    ];
    const advancedOperation2 = [
      {
        key: 'op1',
        type: '订购关系生效',
        name: '牛小小',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
      },
    ];
    const advancedOperation3 = [
      {
        key: 'op1',
        type: '创建订单',
        name: '张益达',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
      },
    ];
    const columns = [{
      title: '操作类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '操作人',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '执行结果',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        text === 'agree' ? <Badge status="success" text="成功" /> : <Badge status="error" text="驳回" />
      ),
    }, {
      title: '操作时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    }, {
      title: '备注',
      dataIndex: 'memo',
      key: 'memo',
    }];
    const contentList = {
      tab1: <Table
        pagination={false}
        loading={this.state.advancedLoading}
        dataSource={advancedOperation1}
        columns={columns}
      />,
      tab2: <Table
        pagination={false}
        loading={this.state.advancedLoading}
        dataSource={advancedOperation2}
        columns={columns}
      />,
      tab3: <Table
        pagination={false}
        loading={this.state.advancedLoading}
        dataSource={advancedOperation3}
        columns={columns}
      />,
    };
    const tabDefaultValue = operationTabList && (operationTabList.filter(item => item.default)[0] || operationTabList[0]);
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
          <Card title="用户信息" style={{ marginBottom: 15 }} bordered={false}>
            <DescriptionList style={{ marginBottom: 24 }} column={3} layout="vertical">
              <Description term="用户姓名">牛小妹</Description>
              <Description term="会员卡号">32943898021309809423</Description>
              <Description term="身份证">3321944288191034921</Description>
              <Description term="联系方式">18112345678</Description>
              <Description term="联系地址">uiw 18100000000 上海市青浦区</Description>
            </DescriptionList>
            <DescriptionList style={{ marginBottom: 24 }} title="信息组" column={3} layout="vertical">
              <Description term="某某数据">725</Description>
              <Description term="该数据更新时间">2017-08-08</Description>
              <Description>&nbsp;</Description>
              <Description
                term={
                  <span>
                    某某数据
                    <Tooltip title="数据说明">
                      <Icon style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }} type="information-o" />
                    </Tooltip>
                  </span>
                }
              >725
              </Description>
              <Description term="该数据更新时间">2017-08-08</Description>
            </DescriptionList>
            <h4 style={{ marginBottom: 16 }}>信息组</h4>
            <Card type="inner" title="多层级信息组">
              <DescriptionList column={3} layout="vertical" style={{ marginBottom: 16 }} title="组名称">
                <Description term="负责人">熊恒达</Description>
                <Description term="角色码">1234567</Description>
                <Description term="所属部门">XX公司 - YY部</Description>
                <Description term="过期时间">2017-08-08</Description>
                <Description term="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</Description>
              </DescriptionList>
              <Divider style={{ margin: '16px 0' }} />
              <DescriptionList column={1} layout="vertical" style={{ marginBottom: 16 }} title="组名称" col="1">
                <Description term="学名">
                  Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
                </Description>
              </DescriptionList>
              <Divider style={{ margin: '16px 0' }} />
              <DescriptionList column={3} layout="vertical" title="组名称">
                <Description term="负责人">付晓</Description>
                <Description term="角色码">1234568</Description>
              </DescriptionList>
            </Card>
          </Card>
          <Card title="用户近半年来电记录" style={{ marginBottom: 15 }} bordered={false}>
            <div className={styles.noData}>
              <Icon type="frown-o" />暂无数据
            </div>
          </Card>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
          >
            <Tabs
              onTabClick={ this.onOperationTabChange}
              activeKey={(tabDefaultValue && tabDefaultValue.key)}
            >
              {
                operationTabList.map(item => <Tabs.Pane label={item.tab} key={item.key}>{contentList[this.state.operationkey]}</Tabs.Pane>)
              }
            </Tabs>
          </Card>
        </div>
      </div>
    );
  }
}
