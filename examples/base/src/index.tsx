import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { store, addModel } from './models';
import { routers } from './routes/router';
import './index.css';
import Control from '@uiw-admin/router-control';

ReactDOM.render(
  <Provider store={store}>
    <Control
      routes={routers}
      addModel={(models) => {
        models.map(async (m) => {
          const md = await import(`./models/${m}.ts`);
          const modelData = md.default || md;
          addModel({ name: m, ...modelData });
        });
      }}
    />
  </Provider>,
  document.getElementById('root'),
);
