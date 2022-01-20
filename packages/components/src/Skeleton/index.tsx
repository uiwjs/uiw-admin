import React from 'react';
import { Loader } from 'uiw';

interface SkeletonProps {
  children: React.ReactNode;
  loading?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ children, loading = false }) => {
  return (
    <Loader
      loading={loading}
      style={{ display: 'block' }}
      // fullscreen={true}
      bgColor="rgba(255, 255, 255, 0.4)"
    >
      <>{children}</>
    </Loader>
  );
};

export default Skeleton;
