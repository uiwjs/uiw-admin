import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface LogoHeaderProps {
  collapsed?: boolean;
  projectName?: string;
  logo?: string;
}

export default (props: LogoHeaderProps = {}) => {
  const logo = useMemo(
    () =>
      props.logo && <img src={props.logo} alt={props.projectName || 'logo'} />,
    [props.logo],
  );
  const name = useMemo(
    () => props.projectName && <h1>{props.projectName}</h1>,
    [props.projectName],
  );

  return useMemo(
    () => (
      <div className="uiw-admin-global-title">
        <Link
          to="/"
          style={props.collapsed ? { justifyContent: 'center' } : {}}
        >
          {logo}
          {!props.collapsed && name}
        </Link>
      </div>
    ),
    [props.collapsed],
  );
};
