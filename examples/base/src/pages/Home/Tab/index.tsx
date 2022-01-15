import React from "react";
import { Tabs } from "uiw"
import Merge from "./Merge"

const Tab = () => {
  return <div style={{ background: "#fff", marginTop: 14, height: 330 }}>
    <Tabs type="line" activeKey="1" >
      <Tabs.Pane label="销售" key="1" ><Merge /></Tabs.Pane>
      <Tabs.Pane label="访问" key="2" ><Merge /></Tabs.Pane>
    </Tabs>
  </div>
}
export default Tab;