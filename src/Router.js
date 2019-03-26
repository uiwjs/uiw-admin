import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import BasicLayout from './layouts/BasicLayout';

class RoutersController extends React.PureComponent {
  render() {
    const { resetProps } = this.props;
    return (
      <Switch>
        <Route path="/dashboard" render={props => <BasicLayout {...props} {...resetProps} />} />
      </Switch>
    );
  }
}

const mapState = ({ global }) => ({
  test: global.test,
});

const mapDispatch = ({ global }) => ({
  verify: global.verify,
});

export default connect(mapState, mapDispatch)(RoutersController);

