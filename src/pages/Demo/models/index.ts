import { Dispatch } from '@kkt/pro'

export interface GlobalState {
  test: string
  [s: string]: any
}

const doc = {
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
  effects: (dispatch: any) => ({
    async verify() {
      const dph = dispatch as Dispatch
      dph.doc.updateState({ test: '测试2' })
    },
  }),
}

export default doc
