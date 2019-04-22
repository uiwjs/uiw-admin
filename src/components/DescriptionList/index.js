import React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'uiw';
import styles from './index.module.less';

/**
 * 根据column获取自适应的宽度参数
 * @param {*} column 一行需要展示的列数
 */
const getFlexProps = (column) => {
  let flexProps = { xs: 24, sm: 6, md: 4, lg: 3 };
  switch (column) {
    case 1: flexProps = { xs: 24, sm: 24, md: 24, lg: 24 }; break;
    case 2: flexProps = { xs: 24, sm: 12, md: 12, lg: 12 }; break;
    case 3: flexProps = { xs: 24, sm: 18, md: 12, lg: 8 }; break;
    case 4: flexProps = { xs: 24, sm: 24, md: 6, lg: 6 }; break;
    default:
  }
  return flexProps;
};

/**
 * 描述项
 */
const Description = ({ term, column, layout, className, children, ...others }) => {
  const cls = classNames(styles.description, className, styles[layout]);
  const flexProps = getFlexProps(column);
  // 存在term 和 children 时才渲染组件
  return (
    <Col {...flexProps} className={cls} {...others}>
      {term && <div className={styles.term}>{term}</div>}
      {children && <div className={styles.detail}>{children}</div>}
    </Col>
  );
};

/**
 * 描述列表
 * @param {*} layout 默认布局
 */
const DescriptionList = ({ className, title, column = 3, layout = 'horizontal', gutter = 10,
  children, ...others }) => {
  const cls = classNames(styles.descriptionList, className);
  const _column = column > 4 ? 4 : column;
  return (
    <div className={cls} {...others}>
      {title ? <div className={styles.title}>{title}</div> : null}
      <Row gutter={gutter}>
        {React.Children.map(children, child => React.cloneElement(child, { column: _column, layout }))}
      </Row>
    </div>
  );
};

DescriptionList.Description = Description;

export default DescriptionList;
