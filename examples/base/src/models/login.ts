import { createModel } from '@rematch/core';
import { Dispatch } from './';
// import { login } from '../servers/login';

export interface LoginState {
  token?: string;
  userData?: {
    username: string;
  };
}

export default createModel({
  state: {
    userData: null,
    token: null,
  },
  reducers: {
    updateState: (state: LoginState, payload: LoginState): LoginState => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async submit() {
      const dph = dispatch as Dispatch;
      dph.login.updateState({ token: '测试2' });
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
  }),
});
