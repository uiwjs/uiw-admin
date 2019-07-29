import { verify } from '../servers/login';

export default {
  state: {
    test: 'test',
    userData: null,
    token: null,
  },
  reducers: {
    update: (state, payload) => {
      console.log('~~:', state, payload);
      return ({ ...state, ...payload });
    },
  },
  effects: {
    // 验证登录
    async verify() {
      const data = await verify();
      const props = { isAuthenticated: true };
      if (data) {
        props.userData = data;
        props.token = data.token;
      }
      this.update({ ...props });
    },
  },
};
