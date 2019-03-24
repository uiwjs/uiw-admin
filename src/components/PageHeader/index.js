import React, { PureComponent } from 'react';
import styles from './index.module.less';

export default class PageHeader extends PureComponent {
  render() {
    const { title, content, extraContent } = this.props;
    return (
      <div className={styles.pageHeader}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.row}>
          {content && <div className={styles.content}>{content}</div>}
          {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
        </div>
      </div>
    );
  }
}
