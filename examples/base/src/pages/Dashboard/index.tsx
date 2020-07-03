import React, { Component } from 'react';
import { Button } from 'uiw';
import { DefaultProps } from '@uiw-admin/router-control';

export default class Home extends Component<DefaultProps> {
  render() {
    const { history } = this.props;
    return (
      <div>
        Dashboard
        <hr />
        <Button onClick={() => history.push('/login')}>Logout</Button>
      </div>
    );
  }
}
