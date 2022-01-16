import React from "react";
import { Card, Progress } from "uiw"
import { Chart, Tooltip, Interval, ProgressChart, TinyAreaChart, ColumnChart } from 'bizcharts';
import { cardData1, cardData2 } from "./../data"
import AreaChart from "./../Area"

const Head = () => {
  return <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div style={{ flex: 1, marginRight: 14 }} >
      <Card
        title="总销售额"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<span> 日销售额 ￥12,423 </span>}
      >
        <div style={{ fontSize: 24 }} >¥ 126,560</div>
        <div style={{ marginTop: 18 }}>
          <span style={{ fontSize: 14, marginLeft: 14 }} >周同比 12%</span>
          <span style={{ fontSize: 14, marginLeft: 14 }} >日同比 11%</span>
        </div>
      </Card>
    </div>
    <div style={{ flex: 1, marginRight: 14 }} >
      <Card
        title="访问量"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<span> 日访问量 1,234 </span>}
      >
        <div style={{ fontSize: 20 }} >8,846</div>
        <TinyAreaChart
          height={60}
          data={cardData1}
          xField='month'
          yField='temperature'
          smooth
          color="#975FE4"
        />
      </Card>
    </div>
    <div style={{ flex: 1, marginRight: 14 }}>
      <Card
        title="支付笔数"
        bordered={false}
        footer={<span>转化率 60% </span>}
        bodyStyle={{ height: 110 }}
      >
        <div style={{ fontSize: 20 }} >6,560</div>
        <Chart autoFit height={60} data={cardData2} pure >
          <Interval position="year*sales" />
          <Tooltip shared showTitle={false} />
        </Chart>
      </Card>
    </div>
    <div style={{ flex: 1, }} >
      <Card
        title="运营活动效果"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<div>
          <span style={{ fontSize: 14, marginLeft: 14 }} >周同比 12%</span>
          <span style={{ fontSize: 14, marginLeft: 14 }} >日同比 11%</span>
        </div>}
      >
        <div style={{ fontSize: 20 }} >70%</div>
        <ProgressChart
          percent={0.7}
          barWidthRatio={0.2}
        />
      </Card>
    </div>
  </div>
}
export default Head;