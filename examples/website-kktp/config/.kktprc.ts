import pkg from '../package.json';

export default {
  initEntery: true,
  initRoutes: {
    outletLayout: '@/components/BaseLayout',
  },
  initModel: true,
  define: {
    VERSION: pkg.version,
    AUTH: false,
    STORAGE: 'local',
    SEARCH_MENU: true,
  },
};
