import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, createModels } from '@uiw-admin/models';
import { routers } from '@/routes/router';
import Control from '@uiw-admin/router-control';
import { SWRConfig } from 'swr'
import { request } from "@uiw-admin/utils"
import '@uiw/reset.css';
import './index.css';

ReactDOM.render(
  <SWRConfig
    value={{
      // revalidateOnFocus: false,
      fetcher: (resource, init) => {
        return request(resource, init)
      },
      provider: () => new Map()
    }}
  >
    <Provider store={store}>
      <Control
        routeType="hash"
        routes={routers}
      // addModel={(models: string[]) => {
      //   models.map(async (m) => {
      //     const md = await import(`./models/${m}.ts`);
      //     const modelData = md.default || md;
      //     createModels(modelData, m)
      //   });
      // }}
      />
    </Provider>
  </SWRConfig>,
  document.getElementById('root'),
);
