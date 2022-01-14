import { Dispatch, ModelDefault } from '@uiw-admin/models';
export interface GlobalState {
  test: string;
  [s: string]: any
}

const global: ModelDefault = {
  name: "doc",
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
      const dph = dispatch as Dispatch;
      dph.global.updateState({ test: '测试2' });
    },
  }),
};

export default global
