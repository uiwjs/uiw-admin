import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { navigate } from "@uiw-admin/router-control"

export * from './Auth';
export { default as AuthBtn } from './Auth';

interface AuthorizedProps {
  authority?: boolean;
  children: JSX.Element;
  redirectPath?: string;
}
const AuthPage = (
  props: AuthorizedProps = { children: <React.Fragment /> },
): JSX.Element => {
  let navigate = useNavigate();
  /** Navigate 重定向 会报错  */
  React.useEffect(() => {
    if (!props.authority) {
      if (props.redirectPath) {
        navigate(props.redirectPath, { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    }
  }, [props.redirectPath]);

  if (props.authority) {
    return props.children;
  }
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <React.Fragment />
    </React.Suspense>
  );
};
export default AuthPage;
