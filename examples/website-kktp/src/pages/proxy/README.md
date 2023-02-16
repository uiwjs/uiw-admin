# 开发代理
开发时，要与后端进行接口对接，可以通过mocker-api代理与后端进行连接，开发代理配置在mocker/index.js中编写

## 基本使用
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

注：更多代理配置请参考[mocker-api](https://github.com/jaywcjlove/mocker-api)
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.