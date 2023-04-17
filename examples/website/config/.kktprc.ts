import pkg from '../package.json';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import type { WebpackConfiguration, LoaderConfOptions } from 'kkt';

export default {
  initEntery: true,
  initRoutes: true,
  initModel: true,
  define: {
    VERSION: pkg.version,
    AUTH: false,
    STORAGE: 'local',
    SEARCH_MENU: true,
  },
  publicPath: './',
  overrideWebpack: (
    conf: WebpackConfiguration,
    env: 'development' | 'production',
    options: LoaderConfOptions | undefined,
  ) => {
    conf.module!.exprContextCritical = false;
    conf.module!.exprContextRecursive = false;
    conf = mdCodeModulesLoader(conf);
    return conf;
  },
};
