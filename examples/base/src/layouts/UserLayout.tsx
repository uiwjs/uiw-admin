import React from 'react';
import UserLogin from '@uiw-admin/user-login';
import { useNavigate, } from 'react-router-dom';
import { Notify } from "uiw"
const UserLayout = () => {
  const navigate = useNavigate()

  return <UserLogin
    btnProps={{ type: "primary" }}
    onSuccess={(data) => {
      if (data && data.token) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
        navigate("/home", { replace: true })
      } else {
        Notify.error({ title: "错误通知", description: data.message || "请求失败" })
      }
    }}
  />
}
export default UserLayout;
