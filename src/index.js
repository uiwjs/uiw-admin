import React from 'react';
import ReactDOM from 'react-dom';
import { Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './routes/history';
import { getRouterData } from './routes/router';
import RoutersController from './routes/RoutersController';
import { store } from './models';
import '@uiw/reset.css/reset.less';
import './global.less';

const RoutersContainer = withRouter(({ history: historyData, location }) => {
  const routerData = getRouterData();
  const resetProps = {
    location,
    history: historyData,
    routerData,
  };
  return (
    <RoutersController resetProps={resetProps} />
  );
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RoutersContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
