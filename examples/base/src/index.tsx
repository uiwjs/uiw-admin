// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import Control from '@uiw-admin/router-control'
import { SWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'
import '@uiw/reset.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
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
      notLoginMenus={['/dom', '/dom/courses']}
      // navigateTo="/404"
      // addModels={(path) => import(`${path}`)}
    />
  </SWRConfig>
)
