import { Dispatch, RootModel } from '@uiw-admin/models'
import { createModel } from '@rematch/core'

export interface GlobalState {
  test: string
  [s: string]: any
}

const doc = createModel<RootModel>()({
  name: 'docD',
  state: {
    test: 'doc model',
  },
  reducers: {
    updateState: (state: GlobalState, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async verify() {
      const dph = dispatch as Dispatch
      dph.doc.updateState({ test: '测试2' })
    },
  }),
})

export default doc
