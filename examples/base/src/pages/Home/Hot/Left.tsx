import AreaChart from "./../Area"
import React from "react"
import { Table, Card, TableColumns } from "uiw"
import { tableData1, cardData1, } from "./../data"
const columns: TableColumns[] = [
  {
    title: "排序",
    key: 'sort',
    render: (test) => {
      return test
    }
  },
  {
    title: '搜索',
    key: 'search',
  },
  {
    title: '数量',
    key: 'use',
  },
  {
    title: '幅度',
    key: 'range',
  },
];

const Tables = () => {
  return <div style={{ flex: 1, marginRight: 14, }} >
    <Card title={<span style={{ fontSize: 16, fontWeight: "bold" }} >热点</span>} style={{ height: 400 }}  >
      <div style={{ display: "flex", justifyContent: "space-between", }} >
        <div style={{ flex: 1 }} >
          <div style={{ color: "#bbb" }} >搜索用户</div>
          <div style={{ fontSize: 20 }} >123,345</div>
          <AreaChart data={cardData1} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#bbb" }} >平均</div>
          <div style={{ fontSize: 20 }} >2.7</div>
          <AreaChart data={cardData1} />
        </div>
      </div>
      <Table
        columns={columns}
        data={tableData1}
      />
    </Card>
  </div>
}
export default Tables