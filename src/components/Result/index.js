import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon, Button } from 'uiw';
import styles from './index.less';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIcon(icon) {
    if (typeof icon === 'string') {
      return React.createElement(Icon, { type: icon });
    } else if (React.isValidElement(icon)) {
      return icon;
    }
    throw new Error('Invalid props icon');
  }

  renderAction(actions) {
    if (Array.isArray(actions)) {
      const buttons = actions.map((it) => {
        const { id, key, text, icon, ...others } = it;
        return (
          <Button {...others} key={`${id || key || Math.random()}`} >
            {it.text}
            {it.icon && <Icon type={it.icon} />}
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
    const { className, children, icon, title, description, extra, actions } = this.props;
    const cls = classNames(styles.resultWrapper, className);
    return (
      <div className={cls}>
        {icon && <p className={styles.iconBar}>{this.renderIcon(icon)}</p>}
        {title && <p className={styles.title}>{title}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {extra && <p className={styles.extra}>{extra}</p>}
        {children && <div className={styles.children}>{children}</div>}
        {actions && <div className={styles.actions}>{this.renderAction(actions)}</div>}
      </div>
    );
  }
}
