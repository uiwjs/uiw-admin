import React, { useMemo, Fragment, useState } from 'react';
import Layout from '@uiw/react-layout';
import Button from '@uiw/react-button';
import classnames from 'classnames';
import DocumentTitle from '@uiw-admin/document-title';
import { RoutersProps } from '@uiw-admin/router-control';
import LogoHeader from './LogoHeader';
import Menu from './Menu';
import Bread from './Breadcrumb';
import './index.css';
import { getMenu, BreadcrumbMap } from './utils';
import BodyContent from './Content';
import HeaderRightMenu, { HeaderRightProps } from './HeaderRightMenu';
import FullScreen from './FullScreen';
import { UseLayoutsProps } from './useLayouts';

const { Header, Footer, Sider, Content } = Layout;

export type BasicLayoutProps = {
  logo?: string;
  projectName?: string;
  /**
   * 页脚
   */
  footer?: React.ReactElement;
  routes?: RoutersProps[];
  children?: React.ReactNode;
  layouts?: UseLayoutsProps;
} & HeaderRightProps;
function BasicLayout(props: BasicLayoutProps) {
  const {
    routes = [],
    footer,
    projectName = 'UIW Admin',
    profile = {},
    menus = [],
    onReloadAuth,
    layouts,
  } = props || {};

  const [collapsed, setCollapsed] = useState(false);

  /** 转换 用于 侧边路由展示 */
  const routeData = getMenu(routes);

  const footerView = useMemo(() => <Footer>{footer}</Footer>, [footer]);

  const Menus = React.useMemo(() => {
    return <Menu collapsed={collapsed} routes={routeData} />;
  }, [JSON.stringify(routeData), collapsed]);

  const mapRoute = React.useMemo(() => {
    return new BreadcrumbMap(routeData);
  }, [JSON.stringify(routeData)]);

  const renderHeaderRightMenu = useMemo(() => {
    return (
      <div
        style={{
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {profile?.menuLeft}
        <FullScreen />
        <HeaderRightMenu
          onReloadAuth={onReloadAuth}
          profile={profile}
          menus={menus}
          layouts={layouts}
        />
      </div>
    );
  }, [profile, menus, JSON.stringify(layouts)]);

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
            {renderHeaderRightMenu}
          </Header>
          <Content className="uiw-admin-global-content">
            <BodyContent>{props.children}</BodyContent>
          </Content>
          {/* {footerView} */}
        </Layout>
      </Layout>
    </Fragment>
  );
}

export default BasicLayout;

export { default as useLayouts } from './useLayouts';
