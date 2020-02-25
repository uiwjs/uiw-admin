import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './BasicLayout.module.less';

export default class BasicLayout extends PureComponent {
  render() {
    const { routerData } = this.props;
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (path === '/') {
        RouteComponents.push(<Route exact key={idx + 1} path="/" render={() => <Redirect to="/home" />} />);
      } else {
        const ChildComponent = (props) => {
          const ChildComp = routerData[path].component;
          // 可以给子组件传一些参数如： isNavShow=true
          return (
            <ChildComp {...props} isNavShow />
          );
        };
        RouteComponents.push(<Route exact key={idx + 1} path={path} render={ChildComponent} />);
      }
    });
    return (
      <div className={styles.container}>
        Basic Layout
        <Switch>
          {RouteComponents}
        </Switch>
      </div>
    );
  }
}
