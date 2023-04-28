export interface MenusConfigObject {
  title?: string;
  path?: string;
  divider?: boolean;
  target?: string;
}

export const menusDocsConfig: MenusConfigObject[] = [
  {
    divider: true,
    title: '入门',
  },
  {
    title: '开始使用',
    path: '/docs/quick-start',
  },
  {
    title: '更新日志',
    target: '__blank',
    path: 'https://github.com/uiwjs/uiw-admin/blob/master/CHANGELOG.md',
  },
  // {
  //   title: 'Uiw Admin 示例',
  //   path: '/example',
  // },
  {
    divider: true,
    title: '页面开发',
  },
  {
    title: '新增页面',
    path: '/docs/newPages',
  },
  {
    title: 'Mock 模拟数据',
    path: '/docs/mocker',
  },
  {
    title: '网络请求',
    path: '/docs/request',
  },
  {
    title: '全局状态管理',
    path: '/docs/models',
  },
  {
    title: '权限管理',
    path: '/docs/auth',
  },
  {
    title: '代理',
    path: '/docs/proxy',
  },
  {
    title: 'eslint 配置',
    path: '/docs/eslint-config',
  },
  {
    divider: true,
    title: '相关链接',
  },
  {
    title: 'KKTP',
    target: '__blank',
    path: 'https://kktjs.github.io/kkt-pro/#/doc/kktp',
  },
  {
    title: 'UIW 组件库',
    target: '__blank',
    path: 'https://uiwjs.github.io/',
  },
  {
    title: '源码 Github 仓库',
    target: '__blank',
    path: 'https://github.com/uiwjs/uiw-admin',
  },
];

export const menusComponentsConfig: MenusConfigObject[] = [
  {
    divider: true,
    title: '架构',
  },
  {
    title: 'Authorized 权限组件',
    path: '/components/authorized',
  },
  {
    title: 'BasicLayouts 高级布局',
    path: '/components/basic-layouts',
  },
  // {
  //   "title": "Config",
  //   "path": "/components/config"
  // },
  {
    title: 'DocumentTitle 页面标题',
    path: '/components/document-title',
  },
  {
    title: 'Exceptions 异常组件',
    path: '/components/exceptions',
  },
  {
    title: 'LayoutTabs 选项卡',
    path: '/components/layout-tabs',
  },
  // {
  //   "title": "Router Control",
  //   "path": "/components/router-control"
  // },
  {
    title: 'LoginPage 登录',
    path: '/components/user-login',
  },
  {
    title: 'Utils 工具',
    path: '/components/utils',
  },
  {
    divider: true,
    title: '业务组件',
  },
  {
    title: 'Components',
    path: '/components/components',
  },
  {
    title: 'ProTable 高级表格',
    path: '/components/protable',
  },
  {
    title: 'ProDrawer 抽屉',
    path: '/components/prodrawer',
  },
  {
    title: 'ProForm 高级表单',
    path: '/components/proform',
  },
  {
    title: 'Skeleton 骨架组件',
    path: '/components/skeleton',
  },
];
