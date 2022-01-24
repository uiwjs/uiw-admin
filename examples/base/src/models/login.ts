import { ModelDefault } from '@uiw-admin/models'
import { history } from '@uiw-admin/router-control'

export interface LoginState {
  token?: string;
  userData?: {
    username: string;
  };
}

const login: ModelDefault = {
  name: 'login',
  state: {
    userData: null,
    token: null
  },
  reducers: {
    updateState: (state: any, payload: LoginState) => ({
      ...state,
      ...payload
    })
  },
  effects: (dispatch: any) => ({
    async submit () {
      dispatch.login.updateState({ token: '测试2' })
      sessionStorage.setItem('auth', JSON.stringify(['/home', '/dac']))
      history.push('/home')
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    }
  })
}

export default login
