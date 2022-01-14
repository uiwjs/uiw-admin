import path from 'path';
import webpack, { Configuration } from 'webpack';
import { MockerAPIOptions, LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (
  conf: Configuration,
  env: string,
  options: LoaderConfOptions,
) => {
  conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md')],
  });
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      _AF: JSON.stringify("哈哈哈"),
      /** 权限校验 */
      AUTH: JSON.stringify(true),
    }),
  );
  conf.resolve!.alias = {
    // 当前开发模式需要
    // https://github.com/marmelab/react-admin/issues/3078#issuecomment-579128213
    // react: path.resolve('./node_modules/react'),
    // "react-dom": path.resolve('./node_modules/react-dom'),
    // "react-router": path.resolve("./node_modules/react-router"),
    // "react-router-dom": path.resolve("./node_modules/react-router-dom"),
    // '@': path.resolve(__dirname, 'src'),
  };
  return conf;
};

export const proxySetup = (): MockerAPIOptions => {
  /**
   * mocker-api that creates mocks for REST APIs.
   * It will be helpful when you try to test your application without the actual REST API server.
   * https://github.com/jaywcjlove/mocker-api
   */
  return {
    path: path.resolve('./mocker/index.js'),
    /**
     * https://github.com/jaywcjlove/mocker-api/tree/96c2eb94694571e0e3003e6ad9ce1c809499f577#options
     */
    option: {},
  };
};
