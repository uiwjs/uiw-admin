# mocker
前后端并行开发，为了方便后端快速开发，不需要等待后端接口，系统提供了mock功能。更多配置请参考[mocker-api](https://github.com/jaywcjlove/mocker-api)

## 编写模拟数据
> 在/mocker/index目录下进行mock数据编写，比如：

```ts
const { delay } = require('mocker-api');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
 'GET /api/user/list': [
    {
      id: 1,
      username: 'kenny',
      sex: 6
    }, {
      id: 2,
      username: 'kenny',
      sex: 6
    }
  ],
   'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: 'kenny',
          sex: 6
        }
      });
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  },
}
module.exports = (noProxy ? {} : delay(proxy, 1000));
```

## 调用

> 配合系统封装的request进行mock数据请求。如需区分是mock数据，还是真实后端数据，调用真实数据时,注释mocker数据配置即可

```ts
  import { request } from "@uiw-admin/utils"

  export const selectById  = (params:{id:string}) => request("/api/login/account",{ method:"POST",body: { ...params } }) 
```

注：mock功能只有开发模式下开启了，生产模式不会开启mock功能。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.