import React, { useEffect, Fragment } from 'react';

export interface DocumentTitleProps {
  title?: string;
  children?: React.ReactNode;
}

function DocumentTitle(props: DocumentTitleProps): JSX.Element {
  useEffect(() => {
    document.title = props.title || '';
  }, [props.title]);
  return (
    <Fragment>
      {React.Children.toArray(props.children).map((child) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, { ...(child.props || {}) });
      })}
    </Fragment>
  );
}

export default DocumentTitle;
