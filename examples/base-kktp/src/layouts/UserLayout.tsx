import UserLogin from '@uiw-admin/user-login'
import { setCookie } from '@uiw-admin/utils'
import { Notify } from 'uiw'
import { DefaultProps } from '@uiw-admin/router-control'
import { useNavigate } from 'react-router-dom'

const UserLayout = (props: Required<DefaultProps>) => {
  // const {
  //   router: { navigate },
  // } = props
  const navigate = useNavigate()

  return (
    <UserLogin
      buttons={[
        {
          title: '登录',
          htmlType: 'submit',
        },
        {
          title: '注册',
          type: 'light',
        },
      ]}
      api="/api/login"
      btnProps={{ type: 'dark' }}
      saveField={{
        userName: 'username',
        passWord: 'password',
      }}
      // onBefore={(store) => ({ a: 12, b: 1221, ...store })}
      onSuccess={(data) => {
        if (data && data.token) {
          setCookie('token', data.token)
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('auth', JSON.stringify(data.authList || []))
          localStorage.setItem('token', data.token)
          localStorage.setItem('auth', JSON.stringify(data.authList || []))
          navigate('/home', { replace: true })
        } else {
          Notify.error({
            title: '错误通知',
            description: data.error || '请求失败',
          })
        }
      }}
    />
  )
}
export default UserLayout
