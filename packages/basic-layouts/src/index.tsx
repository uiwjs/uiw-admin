import React, { useMemo, Fragment, useState } from 'react';
import Layout from '@uiw/react-layout';
import Button from '@uiw/react-button';
import classnames from 'classnames';
import DocumentTitle from '@uiw-admin/document-title';
import LogoHeader from './LogoHeader';
import Menu from './Menu';
import Bread from "./Breadcrumb"
import { useLocation, } from "react-router-dom";
import LayoutTabs from "@uiw-admin/layout-tabs"
import './index.css';
import { getMenu, BreadcrumbMap } from "./utils"
const { Header, Footer, Sider, Content } = Layout;

export type BasicLayoutProps = {
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

  const Menus = React.useMemo(() => {
    return <Menu collapsed={collapsed} routes={routeData} />
  }, [JSON.stringify(routeData), collapsed])

  // console.log(routeListData)
  const mapRoute = React.useMemo(() => {
    return new BreadcrumbMap(routeData)
  }, [JSON.stringify(routeData)])
  // console.log(mapRoute)

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
          {Menus}
        </Sider>
        <Layout>
          <Header className="uiw-admin-global-header">
            <div>
              <Button
                basic
                icon={collapsed ? 'menu-unfold' : 'menu-fold'}
                style={{ fontSize: 12, marginRight: 20 }}
                onClick={() => setCollapsed(!collapsed)}
              />
              <Bread routeMap={mapRoute} />
            </div>
            {headerRight}
          </Header>
          <Content>
            <LayoutTabs routes={routes} />
          </Content>
          {footerView}
        </Layout>
      </Layout>
    </Fragment>
  );
}
