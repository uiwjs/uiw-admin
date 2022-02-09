import path from 'path'
import { MockerAPIOptions } from 'kkt'
import defaultConfig from '@uiw-admin/config'
import express from 'express'

export default defaultConfig({
  define: {
    AUTH: false,
    STORAGE: 'local',
  },
  // 第一种
  proxySetup: (app: express.Application): MockerAPIOptions => {
    return {
      path: path.resolve('./mocker/index.js'),
    }
  },
})
// 第二种
// export const proxySetup = (): MockerAPIOptions => {
//   /**
//    * mocker-api that creates mocks for REST APIs.
//    * It will be helpful when you try to test your application without the actual REST API server.
//    * https://github.com/jaywcjlove/mocker-api
//    */
//   return {
//     path: path.resolve('./mocker/index.js'),
//     /**
//      * https://github.com/jaywcjlove/mocker-api/tree/96c2eb94694571e0e3003e6ad9ce1c809499f577#options
//      */
//     option: {},
//   }
// }
