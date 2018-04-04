import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class FooterToolbar extends PureComponent {
  render() {
    const { children, extra, actions, className, extraClassName, actionClassName, ...others } = this.props;
    const cls = classNames(styles.footToolbar, className);
    const clsExtra = classNames(styles.extra, extraClassName);
    const clsActions = classNames(styles.actions, actionClassName);
    return (
      <div className={cls} {...others}>
        {extra && <div className={clsExtra}>{extra}</div>}
        {actions && <div className={clsActions}>{actions}</div>}
        {children && <div className={styles.children}>{children}</div>}
      </div>
    );
  }
}

FooterToolbar.propTypes = {
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  actions: PropTypes.node,
  clsActions: PropTypes.node,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  actionClassName: PropTypes.string,
};
