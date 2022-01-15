import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { store, createModels } from '@uiw-admin/models';
import { routers } from './routes/router';
import Control, { history } from '@uiw-admin/router-control';
import { SWRConfig } from 'swr'
import request from "./utils/request"
import '@uiw/reset.css';
import './index.css';

// 为了开发验证通过
sessionStorage.setItem("token", "12333333")

function localStorageProvider() {
  // 初始化时，我们将数据从 `localStorage` 恢复到一个 map 中。
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))
  // 在卸载 app 之前，我们将所有数据写回 `localStorage` 中。
  history.listen(() => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })
  // 我们仍然使用 map 进行读写以提高性能。
  return map
}

ReactDOM.render(
  <SWRConfig
    value={{
      // revalidateOnFocus: false,
      fetcher: (resource, init) => {
        return request(resource, init)
      },
      provider: localStorageProvider
    }}
  >
    <Provider store={store}>
      <Control
        routes={routers}
        addModel={(models: string[]) => {
          models.map(async (m) => {
            const md = await import(`./models/${m}.ts`);
            const modelData = md.default || md;
            createModels(modelData, m)
          });
        }}
      />
    </Provider>
  </SWRConfig>,
  document.getElementById('root'),
);