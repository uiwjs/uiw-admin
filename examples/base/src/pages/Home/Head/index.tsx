import React from "react";
import { Card, Progress } from "uiw"
import { Chart, Tooltip, Interval } from 'bizcharts';
import { cardData1, cardData2 } from "./../data"
import AreaChart from "./../Area"

const Head = () => {
  return <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div style={{ width: "24%" }} >
      <Card
        title="访问量"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<span> 日访问量 1,234 </span>}
      >
        <div style={{ fontSize: 20 }} >8,846</div>
        <AreaChart data={cardData1} />
      </Card>
    </div>
    <div style={{ width: "24%" }} >
      <Card
        title="访问量"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<span> 日访问量 1,234 </span>}
      >
        <div style={{ fontSize: 20 }} >8,846</div>
        <AreaChart data={cardData1} />
      </Card>
    </div>
    <div style={{ width: "24%" }} >
      <Card
        title="支付笔数"
        bordered={false}
        footer={<span> 支付笔数 1,234 </span>}
        bodyStyle={{ height: 110 }}
      >
        <div style={{ fontSize: 20 }} >6,560</div>
        <Chart autoFit height={60} data={cardData2} pure >
          <Interval position="year*sales" />
          <Tooltip shared showTitle={false} />
        </Chart>
      </Card>
    </div>
    <div style={{ width: "24%" }} >
      <Card
        title="支付笔数"
        bordered={false}
        bodyStyle={{ height: 110 }}
        footer={<span> 支付笔数 1,234 </span>}
      >
        <div style={{ fontSize: 20 }} >70%</div>
        <Progress.Line percent={70} format={() => ""} />
      </Card>
    </div>
  </div>
}
export default Head;