import React from 'react';
import { useNavigate } from "react-router-dom"
// import { navigate } from "@uiw-admin/router-control"

export * from "./Auth"

interface AuthorizedProps {
  authority?: boolean;
  children?: React.ReactNode;
  redirectPath?: string;
}
export default (props: AuthorizedProps = {}) => {
  let navigate = useNavigate();
  if (props.authority) {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, { ...child.props });
    });
  }

  /** Navigate 重定向 会报错  */
  React.useEffect(() => {
    if (props.redirectPath) {
      navigate("/home", { replace: true })
    }
  }, [props.redirectPath])
  return <React.Fragment />
};
