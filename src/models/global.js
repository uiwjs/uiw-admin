import { verify } from '../servers/login';

export default {
  state: {
    isAuthenticated: false,
    userData: null,
    token: null,
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
  },
  effects: {
    // 验证登录
    async verify(_, { global }) {
      const data = await verify();
      const props = { ...global };
      console.log('data:', data);
      if (data) {
        props.isAuthenticated = true;
        props.userData = data;
        props.token = data.token;
      }
      this.update({ ...props });
    },
  },
};
