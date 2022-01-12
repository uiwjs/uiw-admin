import React from "react"

export const getAuthPath = (path?: string): boolean => {
  let authList: string[] = []
  const authStr = sessionStorage.getItem("auth")
  if (authStr) {
    authList = JSON.parse(authStr)
  }
  const fig = authList.find(item => item === path)
  return !!fig
}

/** 校验按钮权限 */
export interface AuthBtnProps {
  /** 路径 */
  path?: string;
  /** 禁用 状态 展示   适用于 存在 disabled 属性的组件  */
  disabled?: boolean;
  children: React.ReactNode;
}
export const AuthBtn = (props: AuthBtnProps) => {
  const { path, disabled, children } = props
  const fig = getAuthPath(path)
  if (fig) {
    return children;
  } else if (disabled && React.isValidElement(children)) {
    return React.cloneElement(children, { disabled })
  }
  return <React.Fragment />
}