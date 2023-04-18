import React from 'react';
import { KktproRoutesProps } from '@kkt/pro';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { onNavigate } from '../Menu';

interface ContentProps {
  children: React.ReactNode;
}
export default (props: ContentProps) => {
  return (
    <div style={{ padding: 14, overflowY: 'auto', height: '100%' }}>
      {props.children}
    </div>
  );
};
export interface WarpBodyProps {
  children: React.ReactNode;
  sideItemIndex: undefined | KktproRoutesProps;
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
