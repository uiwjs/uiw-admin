import { ModelDefault } from '@uiw-admin/models';
import { history } from "@uiw-admin/router-control"
import { refesh } from '../servers/login'
export interface LoginState {
  token?: string;
  userData?: {
    username: string;
  };
}

const login: ModelDefault = {
  name: "login",
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
    async submit(payload) {
      dispatch.login.updateState({ token: '测试2' });
      sessionStorage.setItem("auth", JSON.stringify(["/home", "/dac"]))
      history.push("/home")
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
    async refeshAuth() {
      const data = await refesh()
      if (data?.code === 200) {
        sessionStorage.setItem("auth", JSON.stringify(data?.data?.authList || []))
        window.location.reload()
      } else {
        sessionStorage.removeItem("auth")
        history.push("/login")
      }
    }
  }),
};

export default login