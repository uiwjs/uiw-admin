import { Button, Dropdown, Menu } from 'uiw'
import { ProTable, useTable } from '@uiw-admin/components'
import Detail from './Detail'
import { Dispatch, useDispatch } from '@kkt/pro'

const Demo = () => {
  const dispatch = useDispatch<Dispatch>()
  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    })
  }

  const table = useTable('/api/getData', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: data.total,
        data: data.data,
      }
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, searchValues) => {
      return {
        page: pageIndex,
        pageSize: 10,
        data: searchValues,
      }
    },
  })

  // 操作
  function handleEditTable(type: string, record: Record<string, any>) {
    if (type === 'add') {
      updateData({ drawerVisible: true, queryInfo: {} })
    }
    if (type === 'edit' || type === 'view') {
      dispatch({
        type: 'demo/selectById',
        payload: { id: record?.id },
      })
    }
    updateData({ isView: type === 'view', tableType: type })
  }

  const menu = (
    <div>
      <Menu bordered style={{ maxWidth: 200 }}>
        {[
          { label: '搜索', value: 'search', onClick: () => table?.onSearch() },
          {
            label: '重置',
            value: 'reset',
            onClick: () => console.log('点击重置'),
          },
        ].map((item, idx) => (
          <Menu.Item onClick={item?.onClick} key={idx} text={item.label} />
        ))}
      </Menu>
    </div>
  )

  return (
    <>
      <ProTable
        searchBtns={[
          { label: '搜索', type: 'primary', htmlType: 'submit' },
          {
            render: (
              <Dropdown menu={menu} trigger="click" placement="bottomRight">
                <Button type="danger">搜索render</Button>
              </Dropdown>
            ),
          },
        ]}
        operateButtons={[
          {
            label: '新增',
            type: 'primary',
            onClick: handleEditTable.bind(this, 'add'),
          },
          {
            render: <Button type="danger">操作render</Button>,
          },
        ]}
        columns={[
          {
            title: '姓名',
            key: 'name',
            props: {
              widget: 'input',
              // 组件属性
              widgetProps: {
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
            render: (text, key, rowData) => (
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Button
                  size="small"
                  type="danger"
                  onClick={handleEditTable.bind(this, 'edit', rowData)}>
                  编辑
                </Button>
                <Button
                  size="small"
                  type="success"
                  onClick={handleEditTable.bind(this, 'view', rowData)}>
                  查看
                </Button>
              </div>
            ),
          },
        ]}
        table={table}
      />
      <Detail updateData={updateData} onSearch={table.onSearch} />
    </>
  )
}
export default Demo
