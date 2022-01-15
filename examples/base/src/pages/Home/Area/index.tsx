import React from 'react';
import { Chart, LineAdvance, Tooltip } from 'bizcharts';

export interface AreaChartProps {
  data: any[]
  color?: string,
  height?: number,
  position?: string
}

const AreaChart = (props: AreaChartProps) => {
  const { data, height = 60, color = "#8A2BE2", position = "month*temperature" } = props
  return (
    <Chart autoFit height={height} data={data} pure >
      <LineAdvance
        shape="smooth"
        point
        area
        position={position}
        color={color}
      />
      <Tooltip shared showTitle={false} />
    </Chart>
  )
}
export default AreaChart 