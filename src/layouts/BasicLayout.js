import { HashRouter, Route, Switch, BrowserRouter as Router, Redirect, withRouter, Link } from 'react-router-dom';
import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import NotFound from '../routes/Exception/404';
import { Menu, Icon, Breadcrumb, Badge } from 'uiw';

import styles from './BasicLayout.less';

export default class CustomRouter extends Component {
  constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    this.menus = props.navData.reduce((arr, current) => arr.concat(current.children), []);
    this.state = {};
  }
  getChildContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.getBreadcrumbNameMap(),
      renderBreadcrumb: this.renderBreadcrumb(),
    };
  }
  getBreadcrumbNameMap() {
    const { navData, getRouteData } = this.props;
    const routeData = getRouteData('BasicLayout');
    const firstMenuData = navData.reduce((arr, current) => arr.concat(current.children), []);
    const menuData = this.getMenuData(firstMenuData, '');
    const breadcrumbNameMap = {};
    routeData.concat(menuData).forEach((item) => {
      breadcrumbNameMap[item.path] = item.name;
    });
    return breadcrumbNameMap;
  }
  getMenuData(data, parentPath) {
    let arr = [];
    data.forEach((item) => {
      if (item.children) {
        arr.push({ path: `${parentPath}/${item.path}`, name: item.name });
        arr = arr.concat(this.getMenuData(item.children, `${parentPath}/${item.path}`));
      }
    });
    return arr;
  }
  getNavMenuItems(menusData, parentPath = '') {
    if (!menusData) {
      return [];
    }
    return menusData.map((item, index) => {
      if (!item.name) {
        return null;
      }
      let itemPath;
      if (item.path.indexOf('http') === 0) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      }
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
            /^https?:\/\//.test(itemPath) ? (<a href={itemPath} target={item.target}> {icon}<span>{item.name}</span> </a>) : (
              <Link to={itemPath} target={item.target} replace={itemPath === this.props.location.pathname}>
                {icon}<span>{item.name}</span>
              </Link>
            )
          }
        </Menu.Item>
      );

    })
  }
  onClose() { }
  onSelect() { }
  renderBreadcrumb() {
    const { location: { pathname }, getRouteData } = this.props;
    const breadcrumbNameMap = this.getBreadcrumbNameMap();
    const router = getRouteData('BasicLayout');
    const pathSnippets = pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((item, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const component = router.filter(item => item.path === url);
      return (
        <Breadcrumb.Item key={url}>
          {url === pathname || component.length === 0 ? <span>{breadcrumbNameMap[url]}</span> : (
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          )}
        </Breadcrumb.Item>
      )
    })
    return (
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          {extraBreadcrumbItems.length < 1 ? <span>首页</span> : <Link to='/'>首页</Link>}
        </Breadcrumb.Item>
        {extraBreadcrumbItems}
      </Breadcrumb>
    )
  }
  render() {
    const { getRouteData } = this.props;
    return (
      <div className={styles.wapper}>
        <div className={styles.sider} ref={(elm) => {
          if (elm) {
            if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              elm.style.height = `${window.document.body.clientHeight}px`;
              clearTimeout(this.timer);
            })
          }
        }}>
          <div className={styles.logo}>
            <Link to="/">
              <svg viewBox="0 0 256 256">
                <path d="M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z"></path>
              </svg>
              <h1>UIW React</h1>
            </Link>
          </div>
          <Menu onClose={this.onClose.bind(this)} onSelect={this.onSelect.bind(this)}>
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <a target="_blank" href="https://github.com/uiw-react/uiw-admin">
                <Icon type="github" />
              </a>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.item}>
                <Icon type="lock" />
              </div>
              <div className={styles.item}>
                <Badge dot count={4}>
                  <Icon type='bell' />
                </Badge>
              </div>
            </div>
          </div>
          <Switch>
            {getRouteData('BasicLayout').map((item, index) => {
              return (
                <Route exact={item.exact} key={item.path} path={item.path} component={item.component} />
              )
            })}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

CustomRouter.childContextTypes = {
  location: PropTypes.object,
  breadcrumbNameMap: PropTypes.object,
  renderBreadcrumb: PropTypes.node,
};