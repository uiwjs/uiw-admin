import React from 'react';
interface ContentProps {
  children: React.ReactNode;
}
export default (props: ContentProps) => {
  return <React.Fragment>
    {props.children}
  </React.Fragment>
}



