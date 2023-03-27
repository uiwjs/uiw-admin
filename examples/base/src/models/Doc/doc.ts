import { Dispatch } from '@kkt/pro'

export interface GlobalState {
  test: string
  [s: string]: any
}

const doc = {
  name: 'doc',
  state: {
    test: 'doc model',
  },
  reducers: {
    updateState: (state: GlobalState, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: Dispatch) => ({
    async verify() {
      const dph = dispatch
      dph.doc.updateState({ test: '测试2' })
    },
  }),
}

export default doc
