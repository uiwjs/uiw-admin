import React from 'react';
import { Input } from 'uiw';
import { FrInputProps } from './types';

// eslint-disable-next-line no-unused-vars
const FrInput: React.FC<FrInputProps> = ({
  schema,
  style,
  value = '',
  onChange,
  ...rest
}) => {
  let disabled = typeof rest.disabled === 'string' ? false : rest.disabled;

  // Prevent uncontrolled occurrence
  const getValue = (value: undefined | string) => {
    return typeof value === undefined ? '' : value;
  };

  const finalProps: object = {
    style: { width: '100%', ...style },
    ...rest,
    disabled,
  };
  return (
    <Input
      value={getValue(value)}
      onChange={(e) => {
        const value = e.target.value || '';
        onChange(value);
      }}
      {...finalProps}
    />
  );
};

export default FrInput;
