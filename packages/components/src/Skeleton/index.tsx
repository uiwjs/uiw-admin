import React from 'react';
import { Loader } from 'uiw';

interface SkeletonProps {
  children: React.ReactNode;
  loading?: boolean;
  style?: React.CSSProperties
}

const Skeleton: React.FC<SkeletonProps> = ({ children, style, loading = false, ...others }) => {
  return (
    <Loader
      loading={loading}
      style={{ display: 'block',  ...style}}
      // fullscreen={true}
      bgColor="rgba(255, 255, 255, 0.4)"
      {...others}
    >
      <>{children}</>
    </Loader>
  );
};

export default Skeleton;
