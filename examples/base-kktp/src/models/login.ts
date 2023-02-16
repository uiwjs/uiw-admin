import { history } from '@uiw-admin/router-control'
import { RootModel } from '@uiw-admin/models'
import { createModel } from '@rematch/core'

export interface LoginState {
  token?: string | null
  userData?: {
    username: string
  } | null
}

const login = createModel<RootModel>()({
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
      dispatch.login.updateState({ token: '测试2' })
      sessionStorage.setItem('auth', JSON.stringify(['/home', '/dac']))
      history.push('/home')
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
  }),
})

export default login
