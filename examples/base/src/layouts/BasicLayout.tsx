import React from 'react';
import BasicLayout from '@uiw-admin/basic-layouts';
import { Outlet } from "react-router-dom";
import { RoutersProps } from "@uiw-admin/router-control"
// import LayoutTabs from "@uiw-admin/layout-tabs"

interface BasicLayoutProps {
  routes: RoutersProps[]
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  const { routes } = props

  const basicLayoutProps = {
    routes: routes,
    menus: [
      {
        title: '欢迎来到uiw',
        icon: "smile",
        onClick: () => { }
      }
    ],
    profile: { avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644762318&t=a0151d354747c67b096619184d7142d8" }
  }
  return (
    <BasicLayout {...basicLayoutProps} {...props} >
      <Outlet />
      {/* <LayoutTabs routes={routes || []} /> */}
    </BasicLayout>)
}
export default BasicLayoutScreen;
