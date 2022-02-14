import React from 'react'
import ReactDOM from 'react-dom'
import Control from '@uiw-admin/router-control'
import { SWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'
import '@uiw/reset.css'
import './index.css'

ReactDOM.render(
  <SWRConfig
    value={{
      // revalidateOnFocus: false,
      fetcher: (resource, init) => {
        return request(resource, init)
      },
      provider: () => new Map(),
    }}>
    <Control
      routeType="hash"
      // addModels={(path) => import(`${path}`)}
    />
  </SWRConfig>,
  document.getElementById('root')
)
