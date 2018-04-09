import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'uiw';
import styles from './index.less';
// /user/23/info => ['/user','/user/23,'/user/23/info']
function urlToList(url) {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => {
    return `/${urllist.slice(0, index + 1).join('/')}`;
  });
}


export default class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpened: [],
    };
  }
  onClose() {}
  onSelect() {}
  getSelectedMenuKeys = () => {
    const { location: { pathname } } = this.props;
    return urlToList(pathname);
  }
  getNavMenuItems(menuData) {
    if (!menuData) {
      return [];
    }
    return menuData.map((item) => {
      if (!item.name) {
        return null;
      }
      const itemPath = item.path;
      if (item.children && item.children.length && item.children.some(child => child.name)) {
        return (
          <Menu.SubMenu
            index={itemPath}
            title={item.icon ? (<span> <Icon type={item.icon} /> <span>{item.name}</span> </span>) : item.name}
            key={itemPath}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </Menu.SubMenu>
        );
      }
      const icon = item.icon && <Icon type={item.icon} />;
      return (
        <Menu.Item key={itemPath} index={itemPath}>
          {
            /^https?:\/\//.test(itemPath) ? (
              <a href={itemPath} target={item.target}> {icon}<span>{item.name}</span> </a>
            ) : (
              <Link to={itemPath} target={item.target} replace={itemPath === this.props.location.pathname}>
                {icon}<span>{item.name}</span>
              </Link>
            )
          }
        </Menu.Item>
      );
    });
  }
  render() {
    const { menuData, collapsed, title, logo, sup } = this.props;
    const defaultOpened = collapsed ? [] : this.getSelectedMenuKeys();
    const defaultActive = defaultOpened && defaultOpened.length > 0 ? defaultOpened[defaultOpened.length - 1] : '/';
    const width = collapsed ? 80 : 260;
    return (
      <div className={styles.sider} style={{ width, maxWidth: width, minWidth: width }}>
        <div className={styles.logo}>
          <Link to="/">
            <span>{logo}</span>
            <h1>{title} {sup && <sup>{sup}</sup>}</h1>
          </Link>
        </div>
        <Menu
          mode={collapsed ? 'inline' : 'vertical'}
          inlineCollapsed={collapsed}
          theme="dark"
          defaultActive={defaultActive}
          defaultOpened={defaultOpened}
          onClose={this.onClose.bind(this)}
          onSelect={this.onSelect.bind(this)}
        >
          {this.getNavMenuItems(menuData)}
        </Menu>
      </div>
    );
  }
}

GlobalHeader.propTypes = {
  title: PropTypes.string,
  sup: PropTypes.string,
  logo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

GlobalHeader.defaultProps = {
  title: '',
  logo: null,
};
