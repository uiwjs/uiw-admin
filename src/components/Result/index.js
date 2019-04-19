import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon, Button } from 'uiw';
import PropTypes from 'prop-types';
import styles from './index.module.less';

export default class Result extends Component {
  renderIcon(icon) {
    console.log('actAlign', icon);
    if (typeof icon === 'string') {
      return (<Icon type={icon} />);
    } else if (React.isValidElement(icon)) {
      return icon;
    }
    throw new Error('Invalid props icon');
  }

  /**
   * 渲染操作按钮
   * @param {*} actions 按钮对象数组或节点
   */
  renderAction(actions) {
    if (Array.isArray(actions)) {
      const buttons = actions.map((it) => {
        const { id, key, text, icon, ...others } = it;
        return (
          <Button {...others} key={`${id || key || Math.random()}`} >
            {text}
            {icon && <Icon type={it.icon} />}
          </Button>
        );
      });
      return buttons;
    } else if (React.isValidElement(actions)) {
      return actions;
    }
    throw new Error('Invalid props actions');
  }

  render() {
    const { className, children, icon, title, description, extra, actions, actAlign } = this.props;
    const cls = classNames(styles.resultWrapper, className);
    // 按钮显示对齐方式
    const actionCls = classNames(styles.actions, {
      [styles.left]: actAlign === 'left',
      [styles.right]: actAlign === 'right',
      [styles.center]: actAlign === 'center',
    });
    console.log('circle-close-o', icon);
    // 如果是错误的icon显示颜色为红色
    const iconCls = classNames(styles.iconBar, {
      [styles.error]: icon === 'circle-close-o',
    });
    return (
      <div className={cls}>
        {icon && <div className={iconCls}>{this.renderIcon(icon)}</div>}
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {extra && <div className={styles.extra}>{extra}</div>}
        {children && <div className={styles.children}>{children}</div>}
        {actions && <div className={actionCls}>{this.renderAction(actions)}</div>}
      </div>
    );
  }
}

Result.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.string,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  actAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

Result.defaultProps = {
  actAlign: 'center',
};
