import React, { Component } from 'react';
import numeral from 'numeral';
import classNames from 'classnames';

import { Tooltip, Icon, Layout, Card, DatePicker } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import {
  yuan,
  Field,
  Bar,
  MiniBar,
  MiniArea,
  ChartCard,
  MiniProgress,
} from '../../components/Charts';
import {
  visitData,
  salesData,
  rankingListData,
} from '../Component/Charts/chartDatas';
import Trend from '../../components/Trend';
import styles from './Analysis.less';

const { Row, Col } = Layout;
const topColResponseiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 16 },
};

export default class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnactive: 0,
      dateactive: 0,
    };
  }
  onClick = (idx) => {
    this.setState({ btnactive: idx });
  }

  onClickDate = (idx) => {
    this.setState({ dateactive: idx });
  }


  render() {
    return (
      <PageHeaderLayout title="数据分析" showBreadcrumb={false}>
        <Row style={{ marginLeft: -10, marginRight: -10 }}>
          <Col {...topColResponseiveProps} >
            <ChartCard
              bordered={false}
              title="总销售额"
              action={<Tooltip content="指标说明" className={styles.tooltip}><Icon type="information-o" /></Tooltip>}
              total={yuan(126560)}
              footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
              contentHeight={46}
            >
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比<span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日环比<span className={styles.trendText}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...topColResponseiveProps}>
            <ChartCard
              bordered={false}
              title="访问量"
              action={<Tooltip content="指标说明" className={styles.tooltip}><Icon type="information-o" /></Tooltip>}
              total={numeral(8846).format('0,0')}
              footer={<Field label="日访问量" value={numeral(1234).format(0, 0)} />}
              contentHeight={46}
            >
              <MiniArea
                color="#975FE4"
                height={46}
                data={visitData}
              />
            </ChartCard>
          </Col>
          <Col {...topColResponseiveProps}>
            <ChartCard
              bordered={false}
              title="支付笔数"
              action={<Tooltip content="指标说明" className={styles.tooltip}><Icon type="information-o" /></Tooltip>}
              total={numeral(6560).format('0,0')}
              footer={<Field label="转化率" value="60%" />}
              contentHeight={46}
            >
              <MiniBar
                height={46}
                data={visitData}
              />
            </ChartCard>
          </Col>
          <Col {...topColResponseiveProps}>
            <ChartCard
              bordered={false}
              title="运营活动效果"
              action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
              total="78%"
              footer={
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  <Trend flag="up" style={{ marginRight: 16 }}>
                    周同比<span className={styles.trendText}>12%</span>
                  </Trend>
                  <Trend flag="down">
                    日环比<span className={styles.trendText}>11%</span>
                  </Trend>
                </div>
              }
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
          <Col span="24">
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              style={{ margin: '0 9px' }}
            >
              <div className={styles.salesCard}>
                <Row className={styles.row}>
                  {['销售额', '访问量'].map((item, idx) => {
                    return (
                      <Col span="4" key={idx}>
                        <div
                          className={classNames(styles.tabModal, {
                            [`${styles.moduleActive}`]: this.state.btnactive === idx,
                          })}
                          onClick={this.onClick.bind(this, idx)}
                        >
                          <div>{item}</div>
                        </div>
                      </Col>
                    );
                  })}
                  <div className={styles.datePicker}>
                    {['今天', '本周', '本月', '本年'].map((item, idx) => {
                      return (
                        <span
                          key={idx}
                          className={classNames({
                            [`${styles.dateActive}`]: this.state.dateactive === idx,
                          })}
                          onClick={this.onClickDate.bind(this, idx)}
                        >
                          {item}
                        </span>
                      );
                    })}
                    <DatePicker showToday style={{ width: 125 }} />
                    <DatePicker showToday style={{ width: 125 }} />
                  </div>

                </Row>
                {this.state.btnactive ?
                  <Row type="flex">
                    <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                      <div className={styles.salesBar}>
                        <Bar
                          height={295}
                          title="销售额趋势"
                          data={salesData}
                        />
                      </div>
                    </Col>
                    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                      <div className={styles.salesRank}>
                        <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                        <ul className={styles.rankingList}>
                          {rankingListData.map((item, i) => {
                            return (
                              <li key={item.title}>
                                <span className={(i < 3) ? styles.active : ''}>{i + 1}</span>
                                <span>{item.title}</span>
                                <span>{numeral(item.total).format('0,0')}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  :
                  <Row type="flex">
                    <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                      <div className={styles.salesBar}>
                        <Bar
                          height={296}
                          title="销售额趋势"
                          data={salesData}
                        />
                      </div>
                    </Col>
                    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                      <div className={styles.salesRank}>
                        <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                        <ul className={styles.rankingList}>
                          {rankingListData.map((item, i) => {
                            return (
                              <li key={item.title}>
                                <span className={(i < 3) ? styles.active : ''}>{i + 1}</span>
                                <span>{item.title}</span>
                                <span>{numeral(item.total).format('0,0')}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                }
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
