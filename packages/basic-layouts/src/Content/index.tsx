import React from 'react';
interface ContentProps {
  children: React.ReactNode;
}
export default (props: ContentProps) => {
  return <div style={{ height: "100%", overflow: "auto" }}>
    {props.children}
  </div>
}



