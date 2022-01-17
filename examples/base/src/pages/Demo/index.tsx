import React from 'react';
import { Row, Col, Button, Card, Table, Pagination, Loader } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
import { columns } from './columns';
import Search from './search'
import Detail from './Detail'
import useSWR from 'swr';

const Demo = () => {
  const dispatch = useDispatch<Dispatch>();

  const { demo: { current, pageSize, total, dataSource, filter } } = useSelector((state: RootState) => state);

  const { isValidating } = useSWR(["/api/selectDemoPage", { method: "POST", body: { page: current, pageSize, queryData: filter } }], {
    revalidateOnFocus: false,
    // revalidateOnMount: false,
    onSuccess: (res) => {
      if (res?.code === 200) {
        const { data } = res
        updateData({
          dataSource: data?.rows || [],
          total: data?.total
        })
      }
    }
  })


  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    });
  };

  // 操作
  function handleEditTable(type: string, record: any) {
    updateData({
      isView: type === 'view',
      tableType: type
    })
    if (type === 'add' || type === 'view' || type === 'edit') {
      updateData({ drawerVisible: true })
    }
  }

  return (
    <Loader loading={isValidating} size="large" style={{ display: 'block' }} >
      <React.Fragment>
        <Card>
          <Search updateData={updateData} />
        </Card>
        <div style={{ marginTop: 14 }} />
        <Card>
          <Row gutter={10}>
            <Col>
              <Button style={{ width: 60 }} type="primary" onClick={handleEditTable.bind(this, 'add')}>新增</Button>
              <Button style={{ width: 60 }} type="danger" onClick={handleEditTable.bind(this, 'export')}> 导出 </Button>
              <Button style={{ width: 60 }} type="light" onClick={handleEditTable.bind(this, 'export')}> 导入 </Button>
            </Col>
          </Row>
        </Card>
        <div style={{ marginTop: 14 }} />
        <Card>
          <Table
            columns={columns({ handleEditTable: handleEditTable })}
            data={dataSource}
            footer={<Pagination current={current} pageSize={pageSize} total={total} divider onChange={(current: number, _: any, pageSize: number) => updateData({ current, pageSize })} />}
          />
        </Card>
        <Detail updateData={updateData} />
      </React.Fragment>
    </Loader>
  );
}
export default Demo