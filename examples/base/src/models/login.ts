import { createModel } from '@rematch/core';
import { Dispatch, RootModel } from './';
// import { login } from '../servers/login';

export interface LoginState {
  token?: string;
  userData?: {
    username: string;
  };
}

export default createModel<RootModel>()({
  state: {
    userData: null,
    token: null,
  },
  reducers: {
    updateState: (state: any, payload: LoginState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async submit({ payload }) {
      const dph = dispatch as Dispatch;
      dph.login.updateState({ token: '测试2' });
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
  }),
});
