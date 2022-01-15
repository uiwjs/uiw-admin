import React from 'react';
import Head from './Head';
import Tab from "./Tab"
import Hot from "./Hot"
import { Card } from 'uiw';
import { LineChart } from "bizcharts"
import { lineData1 } from "./data"
const Home = () => {
  return (
    <div style={{ overflow: "auto" }} >
      <Head />
      <Tab />
      <Hot />
      <Card title={<span style={{ fontSize: 16, fontWeight: "bold" }}>统计</span>} style={{ marginTop: 14 }} >
        <LineChart
          data={lineData1}
          xField='year'
          yField='value'
          seriesField="type"
          legend={{
            position: "top"
          }}
          interactions={[
            {
              type: 'slider',
              cfg: {
                start: 0.2,
                end: 0.8,
              },
            },
          ]}
        />
      </Card>
    </div>
  );
}
export default Home