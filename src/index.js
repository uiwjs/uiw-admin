import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import './index.less';
import * as models from './models/global';

import Route from './Route.js';

const store = init({
  models,
});

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>, document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
