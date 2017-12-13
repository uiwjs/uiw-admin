import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import numeral from 'numeral';
import { Tooltip, Icon } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import {
  yuan,
  Field,
  Bar,
  MiniBar,
  ChartCard
} from '../../components/Charts'
import Trend from '../../components/Trend'
import styles from './Analysis.less'

export default class Analysis extends Component {
  render() {
    return (
      <PageHeaderLayout title="数据分析" showBreadcrumb={false}>
        <ChartCard
          bordered={false}
          title="总销售额"
          action={<Tooltip title="指标说明"><Icon type="file-text" /></Tooltip>}
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
      </PageHeaderLayout>
    );
  }
}
