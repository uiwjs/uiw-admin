import React, { PureComponent } from 'react';
import { Icon, Badge } from 'uiw';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw-admin">
            <Icon type="github" />
          </a>
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
