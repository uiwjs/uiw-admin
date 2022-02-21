## 开发代理
开发时，要与后端进行接口对接，可以通过代理与后端进行连接，开发代理配置在mocker/index.js中编写

```js
const proxy = {
  _proxy: {
    proxy: {
      // "/api/member/selectList": "http://192.168.188.90:8081",
      "/api/(.*)": "http://192.168.188.222:33401/",
    },
    // changeHost: true,
  }
}
module.exports = proxy;

```

注：⏰更多代理配置请参考[mocker-api](https://github.com/jaywcjlove/mocker-api)