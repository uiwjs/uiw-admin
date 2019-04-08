import React, { PureComponent } from 'react';
import styles from './index.module.less';

export default class PageHeader extends PureComponent {
  render() {
    const { title, content, extraContent, action } = this.props;
    return (
      <div className={styles.pageHeader}>
        <div className={styles.row}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {action && <div className={styles.action}>{action}</div>}
        </div>
        <div className={styles.row}>
          {content && <div className={styles.content}>{content}</div>}
          {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
        </div>
      </div>
    );
  }
}
