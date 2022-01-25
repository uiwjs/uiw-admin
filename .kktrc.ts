import path from 'path'
import { MockerAPIOptions } from 'kkt'
import lessModules from '@kkt/less-modules'
import rawModules from '@kkt/raw-modules'
import scopePluginOptions from '@kkt/scope-plugin-options'
import pkg from './package.json'
import defaultConfig from '@uiw-admin/config'
import { RematchWebpackPlugin, RoutesWebpackPlugin } from '@uiw-admin/plugins'

export default defaultConfig({
  define: {
    VERSION: JSON.stringify(pkg.version),
    STORAGE: 'local',
    // BASE_NAME: "/uiw"
  },
  plugins: [new RematchWebpackPlugin(), new RoutesWebpackPlugin()],
  // publicPath: process.env.NODE_ENV === "development" ? "/" : "/uiw/",
  loader: [
    rawModules,
    {
      loader: scopePluginOptions,
      options: { allowedFiles: [path.resolve(process.cwd(), 'README.md')] },
    },
    lessModules,
  ],
})
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
  }
}
