# `工具`

## request

基于axios封装的请求方法

```ts

export interface Options extends AxiosRequestConfig {
  /** swr_Rest_Time 用于重新触发事件使用 */
  body?: any & { swr_Rest_Time?: number | string };
  /** 数据格式  **/
  requestType?: "form" | "json" | "urlencoded"
}

type request = (url:string,options?:Options)=>Promise<any>

```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.