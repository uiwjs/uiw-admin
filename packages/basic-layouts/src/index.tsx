import React, {useMemo, Fragment, useState} from 'react';
import Layout from '@uiw/react-layout';
import Button from '@uiw/react-button';
import classnames from 'classnames';
import { StaticContext } from 'react-router';
import { History } from 'history';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import dynamic from 'react-dynamic-loadable';
import Controller, { DefaultProps, getRouterList } from '@uiw-admin/router-control';
import DocumentTitle from '@uiw-admin/document-title';
import LogoHeader from './LogoHeader';
import Menu from './Menu';
import './index.css';

const { Header, Footer, Sider, Content } = Layout;

// wrapper of dynamic
const dynamicWrapper = (component: () => Promise<any>, modelFun: Promise<any>[] | null, loadingComponent?: JSX.Element) =>
  dynamic({
    models: (modelFun || null) as any,
    component,
    LoadingComponent: () => loadingComponent || <span>loading....</span>,
  });

export type BasicLayoutProps = DefaultProps & {
  /**
   * 加载 models
   */
  loadModels?: (models: string[]) => Promise<any>[];
  loadingComponent?: JSX.Element;
  logo?: string;
  projectName?: string;
  /**
   * 页脚
   */
  footer?: React.ReactElement;
  headerRight?: React.ReactElement;
};

export default function BasicLayout(props = {} as BasicLayoutProps) {
  const { routes = [], loadModels = () => null, loadingComponent, footer, headerRight, projectName = 'UIW Admin' } = props;
  const [collapsed, setCollapsed] = useState(false);
  const data = getRouterList(routes);
  const footerView = useMemo(() => <Footer>{footer}</Footer>, [footer]);
  return (
    <Fragment>
      <DocumentTitle title={projectName || ''} />
      <Layout hasSider style={{ height: '100%' }}>
        <Sider collapsed={collapsed} className={classnames('uiw-admin-global-sider-menu', {
          
        })}>
          <LogoHeader
            collapsed={collapsed}
            projectName={projectName}
            logo={props.logo}
          />
          <Menu collapsed={collapsed} routes={routes} />
        </Sider>
        <Layout>
          <Header className="uiw-admin-global-header">
            <Button
              basic
              icon={collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{ fontSize: 12 }}
              onClick={() => setCollapsed(!collapsed)}
            />
            {headerRight}
          </Header>
          <Content>
            <Switch>
              {data.map((item, index) => {
                if (!item.path) {
                  return null;
                }
                if (props.location.pathname === item.path && item.redirect) {
                  return (
                    <Redirect to={item.redirect} key={index}/>
                  );
                }
                if (!item.component) {
                  return null;
                }
                const modelFun = loadModels(item.models || []);
                const Com = dynamicWrapper(item.component, modelFun, loadingComponent) as any;
                return (
                  <Route
                    key={index}
                    exact
                    path={item.path}
                    render={(childProps) => <Com {...childProps} {...props} routes={item.routes || []} routesList={data} />}
                  />
                );
              })}
            </Switch>
          </Content>
          {footerView}
        </Layout>
      </Layout>
    </Fragment>
  );
};
