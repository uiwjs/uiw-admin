import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, Badge } from 'uiw';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {
  render() {
    const { leftMenu } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {leftMenu && leftMenu.map((item, idx) => {
            if (item.href) {
              const { href, icon, ...propsA } = item;
              return (
                <a key={idx} rel="noopener noreferrer" href={href} {...propsA}>
                  {icon && <Icon type={icon} />}
                </a>
              );
            }
            const { icon, ...propsSpan } = item;
            return (
              <span key={idx} {...propsSpan}>
                <Icon type={icon} />
              </span>
            );
          })}
        </div>
        <div className={styles.headerRight}>
          <div className={styles.item}>
            <Icon type="lock" />
          </div>
          <div className={styles.item}>
            <Badge dot count={4}>
              <Icon type="bell" />
            </Badge>
          </div>
        </div>
      </div>
    );
  }
}

GlobalHeader.propTypes = {
  leftMenu: PropTypes.array,
};
GlobalHeader.defaultProps = {
  leftMenu: [],
};
