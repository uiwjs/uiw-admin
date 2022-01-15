import React from "react";
import { DonutChart, Chart } from "bizcharts";


export interface PIEChartProps {
  data: any[],
  text?: string,
}
const PIEChart = (props: PIEChartProps) => {
  const { data, text = "销售额" } = props
  return (<DonutChart
    data={data || []}
    title={{
      visible: true,
      text: text,
    }}
    autoFit
    height={350}
    radius={0.8}
    innerRadius={0.6}
    padding="auto"
    angleField="value"
    colorField="type"
    legend={false}
    label={{
      type: 'spider',
      formatter: (data, index) => {
        return `${data.type},${data.value}`
      },
      style: {
        fontSize: 14
      }
    }}
    statistic={{
      title: {
        customHtml: () => '销售额'
      }
    }}
    pieStyle={{ stroke: "white", lineWidth: 5 }}
  />)
}

export default PIEChart