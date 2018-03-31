import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class PageHeader extends PureComponent {
  render() {
    const { title, content, extraContent,showBreadcrumb } = this.props;
    const { renderBreadcrumb } = this.context;
    return (
      <div className={styles.pageHeader}>
        {showBreadcrumb && renderBreadcrumb}
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.row}>
          {content && <div className={styles.content}>{content}</div>}
          {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
        </div>
      </div>
    )
  }
}

PageHeader.contextTypes = {
  renderBreadcrumb: PropTypes.node,
  location: PropTypes.object,
  breadcrumbNameMap: PropTypes.object,
};

PageHeader.propTypes = {
  showBreadcrumb: PropTypes.bool,
}
PageHeader.defaultProps = {
  showBreadcrumb: true
}