import React from 'react';
import BasicLayout from '@uiw-admin/basic-layouts';
import { Outlet } from "react-router-dom";
import { RoutersProps } from "@uiw-admin/router-control"
import { Badge, Icon } from 'uiw'

import useSWR from 'swr'


// import LayoutTabs from "@uiw-admin/layout-tabs"
// import Auth from "@uiw-admin/authorized"

interface BasicLayoutProps {
  routes: RoutersProps[]
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const { routes } = props
  const { mutate } = useSWR(["/api/reloadAuth", { method: "POST" }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))
        window.location.reload()
      }
    }
  })



  const basicLayoutProps = {
    onReloadAuth: async () => mutate(),
    routes: routes,
    menus: [
      {
        title: '欢迎来到uiw',
        icon: "smile",
        onClick: () => { }
      }
    ],
    profile: {
      avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644762318&t=a0151d354747c67b096619184d7142d8",
      menuLeft: (
        <div style={{ marginRight: 15 }}>
          <Badge count={66}>
            <Icon type="bell" color="#343a40" style={{ fontSize: 20 }} />
          </Badge>
        </div >
      )
    }
  }

  // 验证是否登录的方式
  // 1. 使用 Auth 组件
  // 2. 路由中进行处理  path==="/" 的 element 外层包裹组件进行重定向 
  // return (
  //   <Auth >
  //   <BasicLayout {...basicLayoutProps} {...props} >
  //     <Outlet />
  //     {/* <LayoutTabs routes={routes || []} /> */}
  //   </BasicLayout>
  //   </Auth>
  // )
  return (
    <BasicLayout {...basicLayoutProps} {...props} >
      <Outlet />
      {/* <LayoutTabs routes={routes || []} /> */}
    </BasicLayout>
  )
}
export default BasicLayoutScreen;
