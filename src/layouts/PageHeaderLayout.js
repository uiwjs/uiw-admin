import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import styles from './PageHead.module.less';

export default ({ children, className, top, ...restProps }) => (
  <div>
    {top}
    <PageHeader {...restProps} linkElement={Link} />
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);
