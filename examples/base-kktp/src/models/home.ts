import { RootModel } from '@uiw-admin/models'
import { createModel } from '@rematch/core'
export interface GlobalState {
  test: string
  [s: string]: any
}

const home = createModel<RootModel>()({
  name: 'home',
  state: {
    test: 'home',
  },
  reducers: {
    updateState: (state: GlobalState, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async verify() {
      const dph = dispatch
      dph.global.updateState({ test: 'homg2323' })
    },
  }),
})
export default home
