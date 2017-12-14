import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import numeral from 'numeral';
import { Tooltip, Icon, Layout } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import {
  yuan,
  Field,
  Bar,
  MiniBar,
  MiniArea,
  ChartCard
} from '../../components/Charts'
import { visitData } from '../Component/Charts/chartDatas'
import Trend from '../../components/Trend'
import styles from './Analysis.less'

const { Row, Col } = Layout;
const topColResponseiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
}
export default class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <PageHeaderLayout title="数据分析" showBreadcrumb={false}>
        <Row>
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
              action={<Tooltip content='指标说明' className={styles.tooltip}><Icon type="information-o" /></Tooltip>}
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
        </Row>

      </PageHeaderLayout>
    );
  }
}
