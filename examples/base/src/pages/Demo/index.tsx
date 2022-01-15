import React from 'react';
import { Row, Col, Button, Card, Table, Pagination, Checkbox } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
import Search from './search'
import Detail from './Detail'

const Demo = () => {
  const dispatch = useDispatch<Dispatch>();

  const { demo: { selectChecked, dataSource } } = useSelector((state: RootState) => state);

  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    });
  };

  function handleChange(type: string, record: any) {
    if (type === 'add') {
      updateData({ drawerVisible: true })
    }
  }

  function onClickCheckedItem(rowNumber: number, env: any) {
    const isChecked = env.target.checked;
    if (isChecked) {
      // 添加到选中数组中
      selectChecked.push(rowNumber);
      selectChecked.sort((a: number, b: number) => a - b)
    } else {
      // 删除选中项
      selectChecked.splice(selectChecked.indexOf(rowNumber), 1);
    }
    updateData({ selectChecked: selectChecked })
  }

  const columns = [
    {
      title: () => {
        const indeterminate = dataSource.length !== selectChecked.length && selectChecked.length > 0;
        const checked: boolean = dataSource.length === selectChecked.length;
        return (
          <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            onClick={(evn: any) => {
              let checked = dataSource.map((item: any, idx: number) => idx);
              if (!evn.target.checked) {
                checked = [];
              }
              updateData({ selectChecked: checked })
            }}
          />
        );
      },
      key: 'checked',
      render: (text: any, key: any, rowData: any, rowNumber: number) => {
        const checked: boolean = selectChecked.includes(rowNumber)
        return (
          <Checkbox checked={checked} onClick={onClickCheckedItem.bind(this, rowNumber)} />
        );
      }
    },
    {
      title: '姓名',
      key: 'name',
    }, {
      title: '年龄',
      key: 'age',
    }, {
      title: '地址',
      key: 'info',
    }, {
      title: '操作',
      key: 'edit',
      width: 98,
      render: () => (
        <div>
          <Button size="small" type="danger">编辑</Button>
          <Button size="small" type="success">查看</Button>
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Card>
        <Search />
      </Card>
      <div style={{ marginTop: 14 }} />
      <Card>
        <Row gutter={10}>
          <Col>
            <Button style={{ width: 60 }} type="primary" onClick={handleChange.bind(this, 'add')}>新增</Button>
            <Button style={{ width: 60 }} type="danger" onClick={handleChange.bind(this, 'delete')}> 删除 </Button>
          </Col>
        </Row>
      </Card>
      <div style={{ marginTop: 14 }} />
      <Card>
        <Table
          columns={columns}
          data={dataSource}
          footer={<Pagination current={2} pageSize={10} total={20} divider />}
        />
      </Card>
      <Detail />
    </React.Fragment>
  );
}
export default Demo