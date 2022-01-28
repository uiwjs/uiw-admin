import path from 'path'
import { MockerAPIOptions } from 'kkt'
import defaultConfig from '@uiw-admin/config'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// import { RematchWebpackPlugin, RoutesWebpackPlugin } from '@uiw-admin/plugins'
export default defaultConfig({
  define: {
    STORAGE: 'local',
  },
  // plugins: [new BundleAnalyzerPlugin()]
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
