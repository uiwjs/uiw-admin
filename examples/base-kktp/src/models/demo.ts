import { RootModel } from '@uiw-admin/models'
import { createModel } from '@rematch/core'
import { selectById } from '../servers/demo'

const demo = createModel<RootModel>()({
  name: 'demo',
  state: {
    drawerVisible: false,
    tableType: '',
    queryInfo: {},
    isView: false,
    a: 1,
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async selectById(payload: any) {
      const dph = dispatch
      const data = await selectById(payload)
      if (data.code === 200) {
        dph.demo.updateState({
          drawerVisible: true,
          queryInfo: data.data || {},
        })
      }
    },
    clean() {
      const dph = dispatch
      dph.demo.updateState({
        drawerVisible: false,
        tableType: '',
        queryInfo: {},
        isView: false,
      })
    },
  }),
})
export default demo
