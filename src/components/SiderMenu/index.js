import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
    const { menuData, collapsed } = this.props;
    const defaultOpened = collapsed ? [] : this.getSelectedMenuKeys();
    const defaultActive = defaultOpened && defaultOpened.length > 0 ? defaultOpened[defaultOpened.length - 1] : '/';
    const version = VERSION; // eslint-disable-line 
    const width = collapsed ? 80 : 260;
    return (
      <div className={styles.sider} style={{ width, maxWidth: width, minWidth: width }}>
        <div className={styles.logo}>
          <Link to="/">
            <svg viewBox="0 0 256 256">
              <path d="M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z" />
            </svg>
            <h1>Uiw Admin <sup>{version}</sup></h1>
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
