
import React, { Component } from 'react';
import Lazyload from './Lazyload';

export default function Bundle(model, component) {
  return (props) => (
    <Lazyload load={component}>
      {(Comp) => (Comp ? <Comp {...props} /> : null)}
    </Lazyload>
  )
}