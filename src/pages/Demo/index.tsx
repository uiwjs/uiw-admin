import React from 'react';
import { Button } from 'uiw';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@uiw-admin/models';
import { ProTable, useTable } from '@uiw-admin/components';
import { selectPage } from '@/servers/demo';
import Detail from './Detail';

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
      tableType: type,
    });
    if (type === 'add') {
      updateData({ drawerVisible: true, queryInfo: {} });
    }
    if (type === 'edit' || type === 'view') {
      dispatch({
        type: 'demo/selectById',
        payload: { id: record?.id },
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
            onClick: handleEditTable.bind(this, 'add'),
          },
          {
            label: '导出',
            type: 'danger',
            onClick: handleEditTable.bind(this, 'export'),
          },
          {
            label: '导入',
            type: 'dark',
            onClick: handleEditTable.bind(this, 'import'),
          },
        ]}
        columns={[
          {
            title: '姓名',
            key: 'name',
            props: {
              widget: 'input',
              initialValue: 'zzz',
              // 组件属性
              widgetProps: {
                preIcon: 'user',
                placeholder: '输入用户名',
              },
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
          {
            title: '操作',
            key: 'edit',
            width: 98,
            render: (text: any, key: any, rowData: any) => (
              <div>
                <Button
                  size="small"
                  type="danger"
                  onClick={handleEditTable.bind(this, 'edit', rowData)}
                >
                  编辑
                </Button>
                <Button
                  size="small"
                  type="success"
                  onClick={handleEditTable.bind(this, 'view', rowData)}
                >
                  查看
                </Button>
              </div>
            ),
          },
        ]}
        table={table}
      />
      <Detail updateData={updateData} />
    </React.Fragment>
  );
};
export default Demo;
