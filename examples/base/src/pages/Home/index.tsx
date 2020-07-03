import React, { Component } from 'react';
import { Button } from 'uiw';
import { DefaultProps } from '@uiw-admin/router-control';
import {Link}from 'react-router-dom';

export default class Home extends Component<DefaultProps> {
  render() {
    const { history } = this.props;
    return (
      <div>
        首页1
        <Button onClick={() => history.push('/')}>Logout</Button>
        <Link to="/">退出登录</Link>
      </div>
    );
  }
}
