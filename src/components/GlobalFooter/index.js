import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class GlobalFooter extends PureComponent {
  renderLinks(links) {
    if (Array.isArray(links)) {
      return links.map((it) => {
        const { href, text, id, key, icon, ...others } = it;
        return (
          <a href={it.href} className={styles.link} key={`${id || key || Math.random()}`} {...others} >{icon} {text}</a>
        );
      });
    } else if (React.isValidElement(links)) {
      return links;
    }
    throw new Error('Invalid props links');
  }

  renderCopyright(copyright) {
    if (Object.prototype.toString.call(copyright) === '[object String]') {
      return (<span>Copyright &copy; {copyright}</span>);
    } else if (React.isValidElement(copyright)) {
      return copyright;
    }
    throw new Error('Invalid props copyright');
  }
  render() {
    const { children, links, copyright, className, ...others } = this.props;
    const cls = classNames(styles.globalFooter, className);
    return (
      <div className={cls} {...others}>
        {children}
        {links && <div className={styles.links}>{this.renderLinks(links)}</div>}
        {copyright && <div className={styles.copyright}>{this.renderCopyright(copyright)}</div>}
      </div>
    );
  }
}

GlobalFooter.propTypes = {
  links: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  copyright: PropTypes.node,
  className: PropTypes.string,
};
