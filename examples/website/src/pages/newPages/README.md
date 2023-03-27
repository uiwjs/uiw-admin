# 新增页面
这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常可以在脚手架的基础上进行简单的配置。

## 手动创建
新增 ts、less 文件
在 src / pages 下创建新的 tsx，less 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件。

```bash
config
src
  models
  pages
  +   NewPage
      +   index.less
      +   index.tsx
  ...
...
package.json
```
为了更好的演示，我们初始化NewPage.js的内容如下：
```bash
export default () => {
  return <div>New Page</div>;
};
```

## 新增路由
在脚手架中我们通过嵌套路由来实现布局模板。config文件中的routes.json 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。
```bash
[
  {
    "path": "/dom",
    "name": "子项",
    "icon": "copy",
    "children": [...]
  },
  // new
  {
    "path": '/new',
    "name": "新页面",
    "element": '@page/NewPage',
    "icon": "home"
  },
]
```

路由配置完成后，访问页面即可看到效果，如果需要在菜单中显示，需要配置 name，icon，hideInMenu等来辅助生成菜单。

具体值如下：

  - ``key``
  - ``index`` 默认跳转
  - ``path`` 路径 
  - ``name`` 名称 
  - ``icon`` 图标 
  - ``redirect`` 重定向 
  - ``children`` 子集 路由 
  - ``hiddenMainMenu`` 隐藏主菜单 
  - ``hideInMenu`` 是否隐藏菜单
  - ``isAuth`` 用于路由校验权限 
  - ``navigate`` 自定义 跳转 
  - ``side`` 控制是否侧边只展示子路由 

布局及路由都配置好之后，回到之前新建的 ```index.tsx```，可以开始写业务代码了！

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.