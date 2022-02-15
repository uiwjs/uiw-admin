import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useMain } from './../hook';

interface LogoHeaderProps {
  collapsed?: boolean;
  projectName?: string;
  logo?: string;
}

export default (props: LogoHeaderProps = {}) => {
  const { headerFontColor, headerLayout } = useMain();
  const logo = useMemo(
    () =>
      props.logo && <img src={props.logo} alt={props.projectName || 'logo'} />,
    [props.logo],
  );
  const name = useMemo(
    () =>
      props.projectName && (
        <h1 style={headerLayout === 'top' ? { color: headerFontColor } : {}}>
          {props.projectName}
        </h1>
      ),
    [props.projectName, headerFontColor],
  );

  return useMemo(
    () => (
      <div
        className={
          headerLayout === 'default'
            ? 'uiw-admin-global-title'
            : 'uiw-admin-global-title-top'
        }
      >
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
