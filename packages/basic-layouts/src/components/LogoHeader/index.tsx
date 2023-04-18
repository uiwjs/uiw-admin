import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useMain } from '../../hook';

interface LogoHeaderProps {
  collapsed?: boolean;
  projectName?: string;
  logo?: string;
  onLogoClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
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
        <div style={headerLayout === 'top' ? { color: headerFontColor } : {}}>
          {props.projectName}
        </div>
      ),
    [props.projectName, headerFontColor],
  );
  const linkProps = useMemo(() => {
    const { onLogoClick } = props;
    return onLogoClick && typeof onLogoClick === 'function'
      ? {
          onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            onLogoClick(event);
            event.stopPropagation();
            event.preventDefault();
          },
        }
      : {};
  }, [props.onLogoClick]);

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
          {...linkProps}
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
