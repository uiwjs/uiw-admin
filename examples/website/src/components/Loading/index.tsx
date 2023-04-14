import React from 'react';
import { Wrapper, LoadBox } from './style';

const Loading = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading?: boolean;
}) => {
  return (
    <Wrapper>
      {children}
      {loading && <LoadBox>Loading...</LoadBox>}
    </Wrapper>
  );
};

export default Loading;
