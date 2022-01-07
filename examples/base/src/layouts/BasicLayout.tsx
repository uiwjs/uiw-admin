import React from 'react';
import { connect } from 'react-redux';
import BasicLayout from '@uiw-admin/basic-layouts';
import { DefaultProps } from '@uiw-admin/router-control';
import { RootState } from '../models';
import logo from './logo.svg';
import { Outlet } from "react-router-dom";

function BasicLayoutScreen() {
  // console.log('props:', props);
  return <Outlet />;
}

export default BasicLayoutScreen;
