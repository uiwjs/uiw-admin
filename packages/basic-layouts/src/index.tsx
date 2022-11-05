import { Fragment } from 'react';
import './index.css';
import { MainContext } from './hooks';
import Main from './main';
import { CollapsedProvider } from './hooks/useCollapsed';
import { HeadStyleProvider } from './hooks/useHeadStyle';
import { MenuRouteProvider } from './hooks/useMenuRoute';
import DocumentTitle from '@uiw-admin/document-title';
import { BasicLayoutProps } from './interface';
export * from './hooks/useCollapsed';
export * from './hooks/useHeadStyle';
export * from './hooks/useMenuRoute';
export * from './interface';

function BasicLayout(props: BasicLayoutProps) {
  const {
    routes = [],
    headerLayout = 'default',
    headerBackground = '#fff',
    headerFontColor = '#000',
    projectName = 'UIW Admin',
  } = props || {};
  const { menuHide } = props;

  return (
    <Fragment>
      <MainContext.Provider
        value={{ headerLayout, headerBackground, headerFontColor }}
      >
        <DocumentTitle title={projectName || ''} />
        <CollapsedProvider>
          <HeadStyleProvider
            {...{ headerLayout, headerBackground, headerFontColor }}
          >
            <MenuRouteProvider routes={routes} menuHide={menuHide}>
              <Main {...props} />
            </MenuRouteProvider>
          </HeadStyleProvider>
        </CollapsedProvider>
      </MainContext.Provider>
    </Fragment>
  );
}

export default BasicLayout;

export { default as useLayouts } from './useLayouts';
