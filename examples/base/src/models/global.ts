import { Dispatch } from '@kkt/pro'
export interface GlobalState {
  test: string
  [s: string]: any
}

const global = {
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
  effects: (dispatch: Dispatch) => ({
    async verify() {
      const dph = dispatch
      dph.global.updateState({ test: '测试2' })
    },
  }),
}

export default global
