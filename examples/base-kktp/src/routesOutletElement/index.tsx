import { cloneElement, useMemo } from 'react'
import { RouteObject } from 'react-router'
import { SWRConfig } from 'swr'
import type { Router as RemixRouter } from '@remix-run/router'
import { request } from '@uiw-admin/utils'
import '@uiw/reset.css'
import './index.css'

interface RoutesOutletElementProps {
  children: React.ReactNode
  routes: RouteObject[]
  createRouter: (routes: RouteObject[], options?: any) => RemixRouter
}
const RoutesOutletElement = (props: RoutesOutletElementProps) => {
  const { createRouter } = props

  const newRoutes = useMemo(() => {
    return props.routes
  }, [props.routes])

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => {
          return request(resource, init)
        },
        provider: () => new Map(),
      }}>
      {cloneElement(props.children as JSX.Element, {
        router: createRouter(newRoutes),
      })}
    </SWRConfig>
  )
}
export default RoutesOutletElement
