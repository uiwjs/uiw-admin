import React from 'react';
import BasicLayout from '@uiw-admin/basic-layouts';
import { Outlet } from "react-router-dom";
import { Routers } from "@uiw-admin/router-control"

interface BasicLayoutProps {
  routes?: Routers[]
}

function BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {
  return <div>
    <BasicLayout {...props}  >
      <Outlet />
    </BasicLayout>
  </div>
}
export default BasicLayoutScreen;
