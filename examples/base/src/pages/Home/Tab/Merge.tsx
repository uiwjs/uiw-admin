import React from "react";
import { List } from "uiw"
import { listData1 } from "./../data"
import Inter from "./Inter"

const Merge = () => {
  return <div style={{ display: "flex", justifyContent: "space-between" }} >
    <Inter />
    <div style={{ marginLeft: 14, width: 400 }} >
      <List
        bordered={false}
        header={<span style={{ fontSize: 16, fontWeight: "bold" }} >排名</span>}
        style={{ height: 292 }}
        dataSource={listData1}
        renderItem={(item, index) => (<List.Item extra={item.value} >
          <span style={{ marginRight: 14 }} >{index + 1}</span>
          {item.label}
        </List.Item>)}
      />
    </div>
  </div>
}
export default Merge;
