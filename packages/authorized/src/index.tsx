import React, { useMemo } from 'react';
import { Navigate } from "react-router-dom"

export * from "./Auth"

interface AuthorizedProps {
  authority?: boolean;
  children?: React.ReactNode;
  redirectPath?: string;
}
export default (props: AuthorizedProps = {}) => {
  if (props.authority) {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, { ...child.props });
    });
  }
  return useMemo(() => {
    if (props.redirectPath) {
      return <Navigate to={props.redirectPath} replace />;
    }
  }, [props.redirectPath]);
};
