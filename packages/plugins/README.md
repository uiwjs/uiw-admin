插件
===

```bash
npm i @uiw-admin/plugins -D
```

## RematchWebpackPlugin

> 1. 自动加载 models

```ts
//kktrc.ts
import defaultConfig from "@uiw-admin/config"
import { RematchWebpackPlugin } from "@uiw-admin/plugins"
export default defaultConfig({
  plugins: [RematchWebpackPlugin()],
  // 或者 plugins: [@uiw-admin/plugins/lib/rematch],
```

### 约定式的 model 组织方式

符合以下规则的文件会被认为是 model 文件，

  1. src/models 下的文件
  2. src/pages 下，子目录中 models 目录下的文件
  3. src/pages 下，子目录中 models.ts 文件

```txt

src
  models/a.ts
  pages
    foo/models/b.ts
    test/models.ts

```

## RoutesWebpackPlugin

> 1. 路由转化,获取项目根目录下`congfig`文件夹下的`routes.json`或`routes.ts`或`routes.js`文件
> 2. 优先级  json > ts > js 

```ts
//kktrc.ts
import defaultConfig from "@uiw-admin/config"
import { RoutesWebpackPlugin } from "@uiw-admin/plugins"
export default defaultConfig({
  plugins: [RoutesWebpackPlugin()],
  // 或者 plugins: [@uiw-admin/plugins/lib/routes],
```


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.