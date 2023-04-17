import React, { useMemo, Fragment, useState } from 'react';
import { KktproRoutesProps } from '@kkt/pro';
import { Icon, Layout, Button } from 'uiw';
import classnames from 'classnames';
import DocumentTitle from '@uiw-admin/document-title';
import {
  LogoHeader,
  WarpBody,
  Menu,
  Breadcrumb,
  BodyContent,
  HeaderRightMenu,
  FullScreen,
  IconBox,
} from './components';
import type { HeaderRightProps } from './components';
import { MainContext, useSideMenus } from './hook';
import { BreadcrumbMap } from './utils';
import './index.css';

const { Header, Sider, Content } = Layout;

export type BasicLayoutProps = {
  className?: string;
  style?: React.CSSProperties;
  logo?: string;
  projectName?: string;
  /**
   * 页脚
   */
  footer?: React.ReactElement;
  routes?: KktproRoutesProps[];
  children?: React.ReactNode;
  /** 头部 布局 */
  headerLayout?: 'top' | 'default';
  /** 头部背景色 */
  headerBackground?: string;
  /** 头部字体颜色 */
  headerFontColor?: string;
  /** 菜单隐藏 */
  menuHide?: boolean;
  /** 是否使用 内容区域默认样式  */
  isDefaultContentStyle?: boolean;
  // 隐藏刷新权限按钮
  hideReloadButton?: boolean;
  // 隐藏退出登录按钮
  hideLogoutButton?: boolean;
  // 隐藏用户信息
  hideUserInfo?: boolean;
  /** 标题部分 点击事件 **/
  onLogoClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
} & HeaderRightProps;

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
    headerLayout = 'default',
    headerBackground = '#fff',
    headerFontColor = '#000',
    isDefaultContentStyle = true,
    hideReloadButton,
    hideLogoutButton,
    hideUserInfo,
    onLogoClick,
    ...others
  } = props || {};
  let { menuHide } = props;

  const [collapsed, setCollapsed] = useState(false);

  /** 转换 用于 侧边路由展示 */
  const { sideItemIndex, ChildMenus, sideMenusMap, hiddenMainMenu } =
    useSideMenus({
      routeData: routes,
    });
  /**路由带参数隐藏菜单 */
  menuHide = hiddenMainMenu;
  const Menus = React.useMemo(() => {
    return (
      <Menu
        collapsed={collapsed}
        routes={ChildMenus.routeData}
        allRoutes={routes}
      />
    );
  }, [JSON.stringify(ChildMenus), collapsed]);

  const mapRoute = React.useMemo(() => {
    return new BreadcrumbMap(routes);
  }, [JSON.stringify(routes)]);

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
          <div>
            <LogoHeader
              onLogoClick={onLogoClick}
              collapsed={false}
              projectName={projectName}
              logo={props.logo}
            />
          </div>
        )}
        {!menuHide && (
          <div className="uiw-admin-nav">
            <IconBox
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              iconSTyle={{ fontSize: 18 }}
              color={headerFontColor}
              onClick={(e) => setCollapsed(!collapsed)}
              style={{ marginRight: 10 }}
            />
            <Breadcrumb sideMenusMap={sideMenusMap} routeMap={mapRoute} />
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
                width={220}
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
      </MainContext.Provider>
    </Fragment>
  );
}

export default BasicLayout;

export * from './useLayouts';
export { default as useLayouts } from './useLayouts';
