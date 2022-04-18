import ReactDOM from 'react-dom'
import Control from '@uiw-admin/router-control'
import { SWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'
import '@uiw/reset.css'
import './index.css'

ReactDOM.render(
  <SWRConfig
    value={{
      fetcher: (resource, init) => {
        return request(resource, init)
      },
      provider: () => new Map(),
    }}>
    <Control
      routeType="hash"
      // isAutoAuth={false}
      notLoginMenus={['/home']}
      // navigateTo="/404"
      // addModels={(path) => import(`${path}`)}
    />
  </SWRConfig>,
  document.getElementById('root')
)
