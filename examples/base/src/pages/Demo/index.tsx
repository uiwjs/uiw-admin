import { useDispatch } from 'react-redux'
import { Dispatch } from '@uiw-admin/models'
import { ProTable, useTable } from '@uiw-admin/components'
import Detail from './Detail'
import { RootState } from '@uiw-admin/models'
import { useSelector } from 'react-redux'
import {
  Form,
  Row,
  Col,
  SearchSelect,
  Button,
  Notify,
  Dropdown,
  Menu,
} from 'uiw'

const Demo = () => {
  const dispatch = useDispatch<Dispatch>()
  const stores = useSelector((state: RootState) => state)
  console.log(stores)
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
    <Form
      resetOnSubmit={false}
      fields={{
        selectField: {
          children: (
            <SearchSelect labelInValue showSearch allowClear option={[]} />
          ),
        },
      }}>
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row gutter={20}>
              <Col fixed>1{fields.selectField}</Col>
            </Row>

            <Row>
              <Col fixed>
                <Button
                  disabled={!canSubmit()}
                  type="primary"
                  htmlType="submit">
                  提交
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <pre style={{ padding: 10, marginTop: 10 }}>
                  {JSON.stringify(state.current, null, 2)}
                </pre>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  )
}
export default Demo
