import React from 'react'
import UserLogin from '@uiw-admin/user-login'
import { useNavigate } from 'react-router-dom'
import { Notify } from 'uiw'
const UserLayout = () => {
  const navigate = useNavigate()

  return (
    <UserLogin
      buttons={[
        {
          title: '登录',
          htmlType: 'submit',
          type: 'primary',
          style: { width: '45%' },
        },
        {
          title: '注册',
          style: { width: '45%' },
        },
      ]}
      api="/api/login"
      btnProps={{ type: 'primary' }}
      onBefore={(store) => ({ a: 12, b: 1221, ...store })}
      onSuccess={(data) => {
        if (data && data.token) {
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
