import Control from '@uiw-admin/router-control'
import { SWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'
import { useOutlet, Outlet } from 'react-router-dom'

const App = (props: any) => {
  return (
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
        isKktp
      />
      {/* <Outlet /> */}
    </SWRConfig>
  )
}

export default App
