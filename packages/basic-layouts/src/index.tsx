import React, { useMemo, Fragment, useState } from 'react';
import Layout from '@uiw/react-layout';
import Button from '@uiw/react-button';
import classnames from 'classnames';
import DocumentTitle from '@uiw-admin/document-title';
import LogoHeader from './LogoHeader';
import Menu from './Menu';
// import { getRouterList } from "@uiw-admin/router-control"
import './index.css';

import { getMenu } from "./utils"
const { Header, Footer, Sider, Content } = Layout;

export type BasicLayoutProps = {
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
  routes?: any[];
  children?: React.ReactNode
};

export default function BasicLayout(props = {} as BasicLayoutProps) {
  const {
    routes = [],
    footer,
    headerRight,
    projectName = 'UIW Admin',
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  /** 转换 用于 侧边路由展示 */
  const routeData = getMenu(routes);
  const footerView = useMemo(() => <Footer>{footer}</Footer>, [footer]);
  return (
    <Fragment>
      <DocumentTitle title={projectName || ''} />
      <Layout hasSider style={{ height: '100%' }}>
        <Sider
          collapsed={collapsed}
          className={classnames('uiw-admin-global-sider-menu', {})}
        >
          <LogoHeader
            collapsed={collapsed}
            projectName={projectName}
            logo={props.logo}
          />
          <Menu collapsed={collapsed} routes={routeData} />
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
            {props.children}
          </Content>
          {footerView}
        </Layout>
      </Layout>
    </Fragment>
  );
}
