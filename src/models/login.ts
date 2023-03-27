// import { Dispatch } from '@kkt/pro';

export interface LoginState {
  token?: string | null
  userData?: {
    username: string
  } | null
}

const login = {
  name: 'login',
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
    async submit() {
      // console.log(555, dispatch.login, data)
      // dispatch.login.updateState({ token: '测试2' })
      // sessionStorage.setItem('auth', JSON.stringify(['/home', '/dac']))
      // history.push('/home')
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
  }),
}

export default login
