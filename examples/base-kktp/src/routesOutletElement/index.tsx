import { RouteObject } from 'react-router'
import type { Router as RemixRouter } from '@remix-run/router'
import { cloneElement, useMemo } from 'react'
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

  return cloneElement(props.children as JSX.Element, {
    router: createRouter(newRoutes),
  })
}
export default RoutesOutletElement
