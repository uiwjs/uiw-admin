import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@uiw-admin/models';
import { ProTable, useTable } from '@uiw-admin/components';
import { selectPage } from 'servers/demo'
import { columns } from './columns';
import Detail from './Detail'

const Demo = () => {
  const dispatch = useDispatch<Dispatch>();

  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    });
  };

  const table = useTable(selectPage, {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data: any) => {
      return {
        total: data.data.total,
        data: data.data.rows || [],
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

  // 操作
  function handleEditTable(type: string, record: any) {
    updateData({
      isView: type === 'view',
      tableType: type
    })
    if (type === 'add') {
      updateData({ drawerVisible: true, queryInfo: {} })
    }
    if (type === 'edit' || type === 'view') {
      dispatch({
        type: 'demo/selectById',
        payload: { id: record?.id }
      });
    }
  }

  return (
    <React.Fragment>
      <ProTable
        btns={[
          {
            label: '新增',
            type: 'primary',
            onClick: handleEditTable.bind(this, 'add')
          },
          {
            label: '导出',
            type: "danger",
            onClick: handleEditTable.bind(this, 'export')
          },
          {
            label: '导入',
            type: "dark",
            onClick: handleEditTable.bind(this, 'import')
          },
        ]}
        columns={columns({ handleEditTable: handleEditTable })}
        table={table}
      />
      <Detail updateData={updateData} />
    </React.Fragment>
  );
}
export default Demo