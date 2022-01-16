import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

export default function Demo() {
  const table = useTable('/api/getData', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: data.total,
        data: data.data,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  pageSize 页码
    query: (pageIndex: number) => {
      console.log(pageIndex);
      return {
        page: pageIndex,
        pageSize: 10,
      };
    },
  });

  return (
    <ProTable
      btns={[{ label: '新增', type: 'primary' }]}
      table={table}
      columns={[
        {
          title: '名字',
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
      ]}
    />
  );
}
