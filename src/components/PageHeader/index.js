import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class PageHeader extends PureComponent {
  render() {
    const { title, content, showBreadcrumb } = this.props;
    const { renderBreadcrumb } = this.context;
    return (
      <div className={styles.pageHeader}>
        {showBreadcrumb && renderBreadcrumb}
        <div className={styles.title}>
          {title}
        </div>
        {content && (
          <div className={styles.content}> {content} </div>
        )}
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