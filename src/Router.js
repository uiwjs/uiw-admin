import React from 'react';
import { HashRouter, Switch, withRouter, Route } from 'react-router-dom';
import { getRouterData } from './common/router';

const RoutersContainer = withRouter(({ history, location }) => {
  const routerData = getRouterData();
  const BasicLayout = routerData['/dashboard'].component;
  const resetProps = {
    location,
    history,
    routerData,
  };

  return (
    <Switch>
      <Route path="/dashboard" render={props => <BasicLayout {...props} {...resetProps} />} />
    </Switch>
  );
});

export default () => (
  <HashRouter>
    <RoutersContainer />
  </HashRouter>
);
