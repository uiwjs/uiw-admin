import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { store } from './models';
import { routers } from './routes/router';
import './index.css';
import { useRoutes } from 'react-router-dom';
import history, { HistoryRouter } from './routes/history';

// 这个转换掉

const Rout = () => {
  return useRoutes(routers)
}

ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={history} >
      <Rout />
    </HistoryRouter>
  </Provider>,
  document.getElementById('root'),
);
