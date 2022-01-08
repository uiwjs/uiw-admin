import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { store } from './models';
import { routers } from './routes/router';
import './index.css';
import Control from '@uiw-admin/router-control';

ReactDOM.render(
  <Provider store={store}>
    <Control routes={routers} />
  </Provider>,
  document.getElementById('root'),
);
