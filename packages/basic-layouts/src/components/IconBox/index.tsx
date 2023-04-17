import React from 'react';
import { Icon, IconsName } from 'uiw';
import './index.css';

export interface IconBoxProps {
  type?: IconsName;
  style?: React.CSSProperties;
  iconSTyle?: React.CSSProperties;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const IconBox = (props: IconBoxProps) => {
  const { type, style, iconSTyle, color, className, onClick } = props;
  const cls = [className, 'uiw-admin-icons'].filter(Boolean).join(' ').trim();

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <div className={cls} style={style} onClick={() => onClick?.()}>
        {type && <Icon type={type} color={color} style={iconSTyle} />}
      </div>
    </div>
  );
};

export default IconBox;
