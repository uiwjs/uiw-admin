import React, { } from 'react';
import { connect } from 'react-redux';
import BasicLayout from '@uiw-admin/basic-layouts';
import { DefaultProps } from '@uiw-admin/router-control';
import { RootState } from '../models';
import logo from './logo.svg';

const mapState = ({ login, global, loading }: RootState) => ({
  login: login,
  global: global,
  loading: loading.effects,
});

const mapDispatch = (dispatch: any) => ({
  // submit: (dispatch as Dispatch).login.submit,
});

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
type Props = connectedProps & DefaultProps;


function BasicLayoutScreen(props = {} as Props) {
  // console.log('props:', props);
  return (
    <BasicLayout
      logo={logo}
      history={props.history}
      match={props.match}
      location={props.location}
      routes={props.routes}
    />
  );
}

export default connect(mapState, mapDispatch)(BasicLayoutScreen);
