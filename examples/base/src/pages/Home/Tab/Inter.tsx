import React from "react";
import { Chart, Interval, Interaction } from "bizcharts";
import { IntervalData1 } from "./../data"

const Inter = () => {
  return (
    <div style={{ padding: 20, flex: 1 }}>
      <Chart autoFit data={IntervalData1} height={250} padding="auto" >
        <Interval position="year*sales" />
        <Interaction type="active-region" />
      </Chart>
    </div>
  )
}
export default Inter