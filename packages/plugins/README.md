插件
===

```bash
npm i @uiw-admin/plugins
```

## RematchWebpackPlugin

> 1. [RematchWebpackPlugin](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/packages/plugins/src/rematch/index.ts) 
> 2. 自动加载 models
> 3. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/.kktrc.ts#L8-L22)

## RoutesWebpackPlugin 

> 1. [RoutesWebpackPlugin](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/packages/plugins/src/routes/index.ts) 
> 2. 路由转化,获取项目根目录下`congfig`文件夹下的`routes.json`或`routes.ts`或`routes.js`文件
> 3. 优先级  json > ts > js 
> 4. [使用方式](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/.kktrc.ts#L8-L22)