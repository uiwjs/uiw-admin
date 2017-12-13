import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Card, Loading } from 'uiw';

import styles from './index.less';

const ChartCard = ({
  loading = false, contentHeight, title, avatar, action, total, footer, children, ...rest
}) => {
  const content = (
    <div className={styles.chartCard}>
      <div className={classNames(styles.chartTop, { [styles.chartTopMargin]: (!children && !footer) })}>
        <div className={styles.avatar}>
          {
            avatar
          }
        </div>
        <div className={styles.metaWrap}>
          <div className={styles.meta}>
            <span className={styles.title}>{title}</span>
            <span className={styles.action}>{action}</span>
          </div>
          {
            (total !== undefined) && (<div className={styles.total} dangerouslySetInnerHTML={{ __html: total }} />)
          }
        </div>
      </div>
      {
        children && (
          <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
            <div className={contentHeight && styles.contentFixed}>
              {children}
            </div>
          </div>
        )
      }
      {
        footer && (
          <div className={classNames(styles.footer, { [styles.footerMargin]: !children })}>
            {footer}
          </div>
        )
      }
    </div>
  );

  return (
    <Card
      bodyStyle={{ padding: '20px 24px 8px 24px' }}
      className={styles.card}
      {...rest}
    >
      {<Loading loading={loading}>{content}</Loading>}
    </Card>
  )
}

export default ChartCard;

ChartCard.propTypes = {
  // title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // action: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // avatar: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  total: PropTypes.oneOfType([PropTypes.element, PropTypes.number, PropTypes.string]),
  contentHeight: PropTypes.number
};
ChartCard.defaultProps = {
  // tooltip: false,
};