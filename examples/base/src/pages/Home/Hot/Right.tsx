import React from "react";
import PIEChart from "../PIE";
import { Card } from "uiw"
import { pieData1 } from "./../data"
const Right = () => {

  return <div style={{ width: "50%", }} >
    <Card
      bordered={false}
      title={<span style={{ fontSize: 16, fontWeight: "bold" }}>统计</span>}
      style={{ height: 400 }}
    >
      <PIEChart data={pieData1} />
    </Card>
  </div>
}
export default Right;