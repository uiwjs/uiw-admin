import React from 'react';
import {
  RoutersProps,
  useLocation,
  useNavigate,
  Navigate,
} from '@uiw-admin/router-control';
import { onNavigate } from '../Menu';

interface ContentProps {
  children: React.ReactNode;
}
export default (props: ContentProps) => {
  return (
    <div style={{ height: '100%', overflow: 'auto' }}>{props.children}</div>
  );
};
export interface WarpBodyProps {
  children: React.ReactNode;
  sideItemIndex: undefined | RoutersProps;
}
export const WarpBody = (props: WarpBodyProps) => {
  const { sideItemIndex } = props;
  const location = useLocation();
  const navigate = useNavigate();
  if (
    sideItemIndex &&
    sideItemIndex.index &&
    sideItemIndex.path &&
    sideItemIndex.path !== '*' &&
    sideItemIndex.path !== '/'
  ) {
    if (sideItemIndex.navigate) {
      const result = onNavigate(sideItemIndex as any, navigate, { location });
      if (!result) {
        return <React.Fragment />;
      }
    }
    return (
      <React.Fragment>
        <Navigate to={sideItemIndex.path} replace />
      </React.Fragment>
    );
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};
