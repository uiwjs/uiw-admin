import React, { PureComponent } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import SiderMenu from '../components/SiderMenu';
import { getMenuData, getMenuCurrentData } from '../common/menu';
import styles from './index.module.less';

const LOGO = (
  <svg viewBox="0 0 256 256">
    <path d="M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z" />
  </svg>
);

export default class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    const topmenu = localStorage.getItem('_menu');
    this.state = {
      topmenu: topmenu === 'true',
    };
  }
  componentDidMount() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }
  onSettingTopMenu = () => {
    localStorage.setItem('_menu', !this.state.topmenu);
    this.setState({ topmenu: !this.state.topmenu });
  }
  render() {
    const { routerData } = this.props;
    const { topmenu } = this.state;
    const menuData = getMenuData();
    const RouteComponents = [];
    Object.keys(routerData || []).forEach((path, idx) => {
      if (!/^(\/home|\/)$/.test(path)) {
        // if (path !== '/' && path !== '/home') {
        RouteComponents.push(
          <Route
            exact
            key={idx + 1}
            path={path}
            render={(props) => {
              const Com = routerData[path].component;
              return <Com {...props} pageData={getMenuCurrentData(props.location.pathname)} />;
            }}
          />
        );
      } else {
        RouteComponents.push(
          <Route
            exact
            key={idx + 1}
            path={path}
            render={(props) => {
              console.log('routerData:', routerData);
              const Com = routerData['/home'].component;
              return <Com {...props} pageData={getMenuCurrentData(props.location.pathname)} />;
            }}
          />
        );
      }
    });
    return (
      <div className={styles.wapper}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <Link to="/">
              <span>{LOGO}</span>
              <h1>Uiw Admin <sup>1.0.0</sup></h1>
            </Link>
          </div>
          <SiderMenu topmenu={topmenu} menuData={menuData} {...this.props} />
        </div>
        <div className={styles.content}>
          <GlobalHeader
            leftMenu={[
              {
                icon: 'github',
                target: '_blank',
                href: 'https://github.com/uiw-react/uiw-admin',
              },
            ]}
          />
          <div>
            <Switch>
              {RouteComponents}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
