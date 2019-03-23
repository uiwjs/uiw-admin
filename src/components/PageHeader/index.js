import React, { PureComponent } from 'react';
import styles from './index.module.less';

export default class PageHeader extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.pageHeader}>
        <div className={styles.title}>
          {title}
        </div>
      </div>
    );
  }
}
