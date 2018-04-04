import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import Route from './Route.js';

ReactDOM.render(<Route />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
