import { HashRouter, Route, Switch, BrowserRouter as Router, Redirect, withRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { getNavData } from './nav/';
import { getPlainNode } from './utils/utils';

function getLayout(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = navData.filter(item => item.layout === path)[0];
  return {
    component: route.component,
    layout: route.layout,
    name: route.name,
    path: route.path,
  };
}

function getRouteData(navData, path) {
  if (!navData.some(item => item.layout === path) || !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = navData.filter(item => item.layout === path)[0];
  // const nodeList = getPlainNode(route.children);
  const nodeList = [];
  return nodeList;
}

export default class CustomRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const navData = getNavData();
    const BasicLayout = getLayout(navData, 'BasicLayout').component;
    const passProps = {
      navData,
      getRouteData: (path) => {
        return getRouteData(getNavData(), path);
      },
    };
    return (
      <HashRouter>
        <div>
          <Route path="/" render={props => <BasicLayout {...props} {...passProps} />} />
        </div>
      </HashRouter>
    )
  }
}


