import React from 'react';

export interface UserLoginProps {
  dashed?: boolean;
  type?: 'horizontal' | 'vertical';
  align?: 'left' | 'right' | 'center';
}

export default (props: UserLoginProps = {}) => {
  return <div>登录</div>;
};
