import { Dispatch, ModelDefault } from './';

export interface GlobalState {
  test: string;
  [s: string]: any
}

const home: ModelDefault = {
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
      const dph = dispatch as Dispatch;
      dph.global.updateState({ test: 'homg2323' });
    },
  }),
};
export default home
