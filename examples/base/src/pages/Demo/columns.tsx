import React from 'react';
import { Button } from 'uiw'

interface AttrProps {
  handleEditTable: (type: string, record: any) => void
}

export const columns = (attr: AttrProps) => [
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '地址',
    key: 'info',
  },
  {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text: any, key: any, rowData: any) => (
      <div>
        <Button size="small" type="danger" onClick={attr.handleEditTable.bind(this, 'edit',rowData)}>编辑</Button>
        <Button size="small" type="success" onClick={attr.handleEditTable.bind(this, 'view',rowData)}>查看</Button>
      </div>
    ),
  },
]