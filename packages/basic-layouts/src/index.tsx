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
import { Icon } from 'uiw';

import { MainContext } from './hook';

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
  /** 头部 布局 */
  headerLayout?: 'top' | 'default';
  /** 头部背景色 */
  headerBackground?: string;
  /** 头部字体颜色 */
  headerFontColor?: string;
  /** 菜单隐藏 */
  menuHide?: boolean;
} & HeaderRightProps;
function BasicLayout(props: BasicLayoutProps) {
  const {
    routes = [],
    footer,
    projectName = 'UIW Admin',
    // 右侧菜单参数HeaderRightProps
    profile = {},
    menus = [],
    onReloadAuth,
    layouts,
    headerLayout = 'default',
    headerBackground = '#fff',
    headerFontColor = '#000',
    menuHide,
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

  const header = (
    <Header
      className={'uiw-admin-global-header'}
      style={{ background: headerBackground, color: headerFontColor }}
    >
      <div style={{ display: 'flex' }}>
        {headerLayout === 'top' && (
          <div style={{ minWidth: 200 }}>
            <LogoHeader
              collapsed={false}
              projectName={projectName}
              logo={props.logo}
            />
          </div>
        )}
        {!menuHide && (
          <div>
            <Button
              basic
              icon={
                <Icon
                  type={collapsed ? 'menu-unfold' : 'menu-fold'}
                  color={headerFontColor}
                />
              }
              // icon={collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{ fontSize: 12, marginRight: 20 }}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Bread routeMap={mapRoute} />
          </div>
        )}
      </div>
      {renderHeaderRightMenu}
    </Header>
  );

  return (
    <Fragment>
      <MainContext.Provider
        value={{ headerLayout, headerBackground, headerFontColor }}
      >
        <DocumentTitle title={projectName || ''} />
        <Layout style={{ height: '100%' }}>
          {headerLayout === 'top' && header}
          <Layout>
            {!menuHide && (
              <Sider
                collapsed={collapsed}
                className={classnames('uiw-admin-global-sider-menu', {})}
              >
                {headerLayout === 'default' ? (
                  <LogoHeader
                    collapsed={collapsed}
                    projectName={projectName}
                    logo={props.logo}
                  />
                ) : (
                  <div style={{ marginTop: 10 }} />
                )}
                {Menus}
              </Sider>
            )}
            <Layout>
              {headerLayout === 'default' && header}
              <Content className="uiw-admin-global-content">
                <BodyContent>{props.children}</BodyContent>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </MainContext.Provider>
    </Fragment>
  );
}

export default BasicLayout;

export { default as useLayouts } from './useLayouts';
