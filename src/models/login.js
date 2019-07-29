import { Notify } from 'uiw';
import { login } from '../servers/login';

export default {
  state: {
    account: {
      username: '',
      password: '',
      terms: '',
    },
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
  },
  effects: dispatch => ({
    async submit(payload) {
      const data = await login(payload);
      if (!data.error) {
        this.update({ account: { ...data } });
        Notify.success({ title: '提交成功！', description: '恭喜你登录成功！' });
        localStorage.setItem('token', data.token);
        // 跨 model 调用方法 1
        dispatch.global.update({ userData: data });
        // 跨 model 调用方法 2
        // dispatch({ type: 'global/update', payload: { userData: data } });
      }
    },
  }),
};
