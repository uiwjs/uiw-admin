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
  return (<BasicLayout {...props} routes={routes} >
    <Outlet />
    {/* <LayoutTabs routes={routes || []} /> */}
  </BasicLayout>)
}
export default BasicLayoutScreen;
