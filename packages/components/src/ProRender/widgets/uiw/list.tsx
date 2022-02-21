import React from 'react';
import { MapProps } from './types';

export default function map(props: MapProps) {
  const { children } = props;
  // eslint-disable-next-line react/jsx-filename-extension
  return <div className="w-100">{children}</div>;
}
