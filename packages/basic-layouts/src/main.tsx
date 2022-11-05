import React, { useMemo, Fragment } from 'react';
import Layout from '@uiw/react-layout';
import Button from '@uiw/react-button';
import classnames from 'classnames';
import DocumentTitle from '@uiw-admin/document-title';
import LogoHeader from './LogoHeader';
import Menu from './Menu';
import Bread from './Breadcrumb';
import './index.css';
import BodyContent, { WarpBody } from './Content';
import HeaderRightMenu from './HeaderRightMenu';
import FullScreen from './FullScreen';
import { Icon } from 'uiw';
import { useCollapsed } from './hooks/useCollapsed';
import { useMenuRoute } from './hooks/useMenuRoute';
import { useHeadStyle } from './hooks/useHeadStyle';
import { BasicLayoutProps } from './interface';
const { Header, Sider, Content } = Layout;

function BasicLayout(props: BasicLayoutProps) {
  const {
    className,
    routes = [],
    projectName = 'UIW Admin',
    // 右侧菜单参数HeaderRightProps
    profile = {},
    menus = [],
    onReloadAuth,
    layouts,
    // headerLayout = 'default',
    // headerBackground = '#fff',
    // headerFontColor = '#000',
    isDefaultContentStyle = true,
    hideReloadButton,
    hideLogoutButton,
    hideUserInfo,
    onLogoClick,
    ...others
  } = props || {};
  const { collapsed, setCollapsed } = useCollapsed();
  const {
    routeData,
    sideMenus,
    mianMenuHide: newMenuHide,
    mapRoute,
  } = useMenuRoute();
  const { headerLayout, headerBackground, headerFontColor } = useHeadStyle();

  const { sideItemIndex, ChildMenus, sideMenusMap } = sideMenus;
  const Menus = React.useMemo(() => {
    return (
      <Menu
        collapsed={collapsed}
        routes={ChildMenus.routeData}
        allRoutes={routeData}
      />
    );
  }, [JSON.stringify(ChildMenus), collapsed]);

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
          hideReloadButton={hideReloadButton}
          hideLogoutButton={hideLogoutButton}
          hideUserInfo={hideUserInfo}
        />
      </div>
    );
  }, [profile, menus, JSON.stringify(layouts)]);
  const cls = [className, 'uiw-admin-global-header']
    .filter(Boolean)
    .join(' ')
    .trim();

  const header = (
    <Header
      {...others}
      className={cls}
      style={{
        background: headerBackground,
        color: headerFontColor,
        ...props.style,
      }}
    >
      <div style={{ display: 'flex' }}>
        {headerLayout === 'top' && (
          <div style={{ minWidth: 200 }}>
            <LogoHeader
              onLogoClick={onLogoClick}
              collapsed={false}
              projectName={projectName}
              logo={props.logo}
            />
          </div>
        )}
        {!newMenuHide && (
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
            <Bread sideMenusMap={sideMenusMap} routeMap={mapRoute} />
          </div>
        )}
      </div>
      {renderHeaderRightMenu}
    </Header>
  );
  return (
    <Fragment>
      <DocumentTitle title={projectName || ''} />
      <Layout style={{ height: '100%' }}>
        {headerLayout === 'top' && header}
        <Layout>
          {!newMenuHide && (
            <Sider
              collapsed={collapsed}
              className={classnames('uiw-admin-global-sider-menu', {})}
            >
              {headerLayout === 'default' ? (
                <LogoHeader
                  onLogoClick={onLogoClick}
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
            {!isDefaultContentStyle ? (
              <WarpBody sideItemIndex={sideItemIndex}>
                {props.children}
              </WarpBody>
            ) : (
              <Content className="uiw-admin-global-content">
                <WarpBody sideItemIndex={sideItemIndex}>
                  <BodyContent>{props.children}</BodyContent>
                </WarpBody>
              </Content>
            )}
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
}

export default BasicLayout;

export { default as useLayouts } from './useLayouts';
