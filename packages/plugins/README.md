插件
===

```bash
npm i @uiw-admin/plugins
```

## [RematchWebpackPlugin](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/packages/plugins/src/rematch/index.ts)

> 1. 自动加载 models
> 2. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/.kktrc.ts#L8-L22)

## [RoutesWebpackPlugin](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/packages/plugins/src/routes/index.ts)

> 1. 路由转化,获取项目根目录下`congfig`文件夹下的`routes.json`或`routes.ts`或`routes.js`文件
> 2. 优先级  json > ts > js 
> 3. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/.kktrc.ts#L8-L22)