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
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex: number, searchValues: any) => {
      return {
        page: pageIndex,
        pageSize: 10,
        data: searchValues
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
          props: {
            widget: 'input',
            initialValue: 'zzz',
            // 组件属性
            widgetProps: {
              preIcon: 'user',
              placeholder: '输入用户名'
            }
          },
        },
        {
          title: '年龄',
          key: 'age',
          props: {
            widget: 'select',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
        },
        {
          title: '地址',
          key: 'info',
        },
      ]}
    />
  );
}
