import React, { PureComponent } from 'react';
import UserLogin from '@uiw-admin/user-login';
import { DefaultProps } from '@uiw-admin/router-control';

class UserLayout extends PureComponent<DefaultProps> {
  render() {
    return <UserLogin />;
  }
}

export default UserLayout;
