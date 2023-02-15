import { RootModel } from '@uiw-admin/models'
import { createModel } from '@rematch/core'
export interface GlobalState {
  test: string
  [s: string]: any
}

const global = createModel<RootModel>()({
  name: 'global',
  state: {
    test: '测试全局State',
  },
  reducers: {
    updateState: (state: GlobalState, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async verify() {
      const dph = dispatch
      dph.global.updateState({ test: '测试2' })
    },
  }),
})

export default global
