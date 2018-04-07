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
  render() {
    const { routerData, location } = this.props;
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (path !== '/') {
        RouteComponents.push(<Route exact key={idx + 1} path={path} component={routerData[path].component} />);
      }
    });
    // console.log('collapsed:', this.props.collapsed);
    return (
      <div className={styles.wapper}>
        <SiderMenu
          collapsed={this.props.collapsed}
          location={location}
          menuData={getMenuData()}
        />
        <div className={styles.content}>
          <GlobalHeader />
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

export default connect(mapState)(BasicLayout);
