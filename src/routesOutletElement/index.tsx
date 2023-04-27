import { cloneElement } from 'react'
import { KktproRoutesProps } from '@kkt/pro'
import '@uiw/reset.css'
import './index.css'

interface RoutesOutletElementProps {
  children: React.ReactNode
  routes: KktproRoutesProps[]
}
const RoutesOutletElement = (props: RoutesOutletElementProps) => {
  const { routes } = props

  return cloneElement(props.children as JSX.Element, {
    router: routes,
  })
}
export default RoutesOutletElement
