import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import { getMenuData } from '../common/menu';
import styles from './BasicLayout.less';


/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach((children) => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

class BasicLayout extends Component {
  onCollapse() {
    const { collapsed, changeCollapsed } = this.props;
    changeCollapsed(!collapsed);
  }
  render() {
    const { routerData, location, collapsed } = this.props;
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (path !== '/') {
        RouteComponents.push(<Route exact key={idx + 1} path={path} component={routerData[path].component} />);
      }
    });
    const LOGO = (
      <svg viewBox="0 0 256 256">
        <path d="M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z" />
      </svg>
    );
    const version = VERSION; // eslint-disable-line 
    return (
      <div className={styles.wapper}>
        <SiderMenu
          title="Uiw Admin"
          logo={LOGO}
          sup={version}
          collapsed={this.props.collapsed}
          location={location}
          menuData={getMenuData()}
        />
        <div className={styles.content}>
          <GlobalHeader
            leftMenu={[
              {
                icon: collapsed ? 'menu-fold' : 'menu-unfold',
                onClick: this.onCollapse.bind(this),
              },
              {
                icon: 'github',
                target: '_blank',
                href: 'https://github.com/uiw-react/uiw-admin',
              },
            ]}
          />
          <Switch>
            {redirectData.map(item => (
              <Redirect key={item.from} exact from={item.from} to={item.to} />
            ))}
            {RouteComponents}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}


const mapState = ({ global }) => ({
  collapsed: global.collapsed,
});

const mapDispatch = ({ global }) => ({
  changeCollapsed: global.changeCollapsed,
});

export default connect(mapState, mapDispatch)(BasicLayout);
