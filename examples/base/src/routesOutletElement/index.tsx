import { cloneElement } from 'react'
import { SWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'
import { KktproRoutesProps } from '@kkt/pro'
import '@uiw/reset.css'
import './index.css'

interface RoutesOutletElementProps {
  children: React.ReactNode
  routes: KktproRoutesProps[]
}
const RoutesOutletElement = (props: RoutesOutletElementProps) => {
  const { routes } = props

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => {
          return request(resource, init)
        },
        provider: () => new Map(),
      }}>
      {cloneElement(props.children as JSX.Element, {
        router: routes,
      })}
    </SWRConfig>
  )
}
export default RoutesOutletElement
