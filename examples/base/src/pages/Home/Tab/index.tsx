import React from "react";
import { Tabs } from "uiw"
import Merge from "./Merge"

const Tab = () => {
  return <div style={{ background: "#fff", marginTop: 14, height: 330 }}>
    <Tabs type="line" activeKey="1" >
      <Tabs.Pane label={<span style={{ fontWeight: "bold", fontSize: 16 }} >销售</span>} key="1" ><Merge /></Tabs.Pane>
      <Tabs.Pane label={<span style={{ fontWeight: "bold", fontSize: 16 }} >访问</span>} key="2" ><Merge /></Tabs.Pane>
    </Tabs>
  </div>
}
export default Tab;