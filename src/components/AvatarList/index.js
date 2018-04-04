import React, { cloneElement, PureComponent } from 'react';
import classNames from 'classnames';
import { Avatar, Tooltip } from 'uiw';
import PropTypes from 'prop-types';
import styles from './index.less';

const upperCase = (text) => {
  if (!text) return text;
  const upperCaseLetter = text.substr(0, 1).toUpperCase();
  const strOther = text.substr(1);
  return upperCaseLetter + strOther;
};

const renderAvatar = (src, size) => {
  return src ? <Avatar src={src} size={size} /> : <Avatar icon="user" size={size} />;
};

const Item = ({ src, size, tips, onClick }) => {
  const cls = classNames(styles.avatarListItem, {
    [styles[`avatarItem${upperCase(size)}`]]: size,
  });
  return (
    <li className={cls} onClick={onClick}>
      {
        tips ? (
          <Tooltip content={tips}>
            {renderAvatar(src, size)}
          </Tooltip>
        ) : renderAvatar(src, size)
      }
    </li>
  );
};

export default class AvatarList extends PureComponent {
  render() {
    const { children, size, ...others } = this.props;
    const childrenWithProps = React.Children.map(children, child => cloneElement(child, { size }));
    return (
      <div className={styles.avatarList} {...others}>
        <ul>
          {childrenWithProps}
        </ul>
      </div>
    );
  }
}

AvatarList.Item = Item;

AvatarList.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

AvatarList.defaultProps = {
  size: 'default',
};

/**
 * cloneElement https://segmentfault.com/a/1190000010062928
 * 克隆子组件，新子组件的props为 父组件props和自身props合并后的props，原子组件的key以及ref将被保留
 */
