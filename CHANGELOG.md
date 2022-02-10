# 更新日志

[![](https://img.shields.io/github/release/uiwjs/uiw-admin.svg)](https://github.com/uiwjs/uiw-admin/releases)

严格遵循 [`Semantic Versioning 2.0.0`](http://semver.org/lang/zh-CN/) 语义化版本规范。


## 5.3.0

- @uiw-admin/components
  - 🐞`ProForm`:增加`cardProps` `collapseProps` `collapsePanelProps` api 可配置card collapse参数

## 5.2.9

- @uiw-admin/components
  - 🐞`ProDrawer`:修复文档报错
  - 🐞`ProTable`: 增加 `scroll` api
  - 🐞`ProTable`: FormCol 增加 `align`设置列的对齐方式 api
- @uiw-admin/utils
  - 🐞 修复`request`请求参数问题
  
## 5.2.8

- @uiw-admin/components
  - 🐞`ProDrawer`:buttons新增`path`和`disabled`api,按钮增加权限功能
  - 🐞`ProTable`: 修复查询分页报错

## 5.2.7

- @uiw-admin/components
  - 🐞`ProForm`:`form`api修改为非必填
- @uiw-admin/config
  - 🐞 修复继承类型
- 升级[kkt](https://github.com/kktjs/kkt/releases/tag/v7.1.0)版本, 

## 5.2.6

- @uiw-admin/components
  - 🐞 修复 `ProTable` 表格 `onSearch` 事件不监听表单变化  

## 5.2.5

- package.json
  - 🌟 `uiw`：升级 `v4.10.3`
- @uiw-admin/components
  - 🌟 `ProForm`：增加`Upload`组件
  - 🐞 修改 `ProTable` 表格 `onSearch` 事件  

## 5.2.3

- @uiw-admin/basic-layouts
  - 🌟 `basic-layouts`：增加`layouts` props,增加`useLayouts` hook
  - 🌟 `basic-layouts`：优化右上角menu关闭功能,通过useLayouts
  - 🌟 `basic-layouts`：优化组件路径
- @uiw-admin/components
  - 🌟 `ProForm`：增加`useForm`hook,增加`form`api
  - 🌟 `ProForm`：删除`submitRef` api

## 5.2.1

- @uiw-admin/basic-layouts
  - 🌟 `basic-layouts`：增加右上角菜单关闭功能

## 5.2.0

- @uiw-admin/components
  - 🌟 `ProTable`：增加分页取消反选功能
  - 🌟 `ProTable`：`useTable` 返回 `pageIndex`当前分页


## 5.1.2

- @uiw-admin/config
  - 🌟 新增一个默认 `define` 的 `STORAGE` 属性,本地存储使用localStorage或sessionStorage ,默认 "session",可选值  local | session
  - 🌟 `plugins`和`loader`进行兼容处理,可以直接`require`引入,[案例](https://uiwjs.github.io/uiw-admin/#/config)
- @uiw-admin/plugins 
  - 🐞 fix:修复多删除引入的 `createModel` 方法
  - 🐞 fix:修复 `RematchWebpackPlugin` 生成的 `models` 类型问题
- @uiw-admin/user-login 
  - 🌟 feat:新增`saveField`参数
- @uiw-admin/components
  - 🌟 `PromForm`：增加SelectMultiple下拉多选组件
  - 🌟 `ProTable`：增加列表选择框功能
  
## 5.1.2-alpha.1

- @uiw-admin/plugins 
  - 🐞 fix:修复多删除引入的 `createModel` 方法

## 5.1.2-alpha.0

- @uiw-admin/plugins 
  - 🐞 fix:修复 `RematchWebpackPlugin` 生成的 `models` 类型问题

## 5.1.1

- @uiw-admin/components
  - 🌟 `PromForm`：更新在线预览文档
  - 🌟 `PromForm`：增加只读模式下表单项隐藏
  - 🌟 `ProDrawer`：更新在线预览文档
- @uiw-admin/user-login
  - 新增 `buttons` 按钮组参数 

## 5.1.0

- @uiw-admin/components
  - 🌟 `PromForm`：增加customWidgetsList prop配置自定义组件
- @uiw-admin/plugins
  - 🌟 删除`widgets`插件

## 5.0.11

- @uiw-admin/components
  - 🌟 `Upload`： 更新Upload文档
  - 🌟 `PromForm`：upload listType更改为uploadType
  - 🌟 `Table`：operateButtons & searchBtns 支持自定义render
  
## 5.0.10

- @uiw-admin/plugins
  - 🌟 `RoutesWebpackPlugin` 支持`js`和`ts`文件
  - 🐞 修复 windows路径问题;
- @uiw-admin/components
  - 🌟 `Upload`： UploadImage组件更名为Upload
  - 🌟 `Upload`： 增加pdf和xlsx文件类型上传
  - 🌟 `PromForm`： upload增加listType props `list`和`picture-card`
- @uiw-admin/router-control
  - `react-redux` 全局状态抽离到 `@uiw-admin/router-control`组件内部

## 5.0.9

- @uiw-admin/user-login
  - 🌟 新增`onBefore`和`requestConfig`参数
- @uiw-admin/components
  - 🌟 `UploadImage`：  新增UploadImage上传图片组件(待测试)
  - 🌟 `ProForm`：  编辑与只读模式下增加图片上传功能和图片展示功能

## 5.0.8

- @uiw-admin/components
  - 🌟 `ProForm`：  修复只读模式下dateInput 不支持YYYY-MM-DD HH:mm:ss时间格式 
  - 🌟 `ProForm`：  只读模式下initialValue支持React.ReactNode类型

## 5.0.7

- @uiw-admin/components
  - 🌟 `ProForm`：  增加只读模式 readOnly&readOnlyPropsreadSpan api 
  - 🌟 `ProForm`：  增加submitRef api,可进行表单提交
  - 🌟 `ProForm`：  增加showSaveButton&showResetButton api,替代原btns api

## 5.0.6

- @uiw-admin/components
  - 🌟 `ProTable`： btns 重命名为 operateButtons
  - 🌟 `ProTable`： 增加onBeforeSearch回调
  - 🌟 `ProTable`： 增加searchButtons属性配置搜索区域按钮
- @uiw-admin/plugins
  - 🌟 `RoutesWebpackPlugin` 新增路由加载插件
  
## 5.0.5

- @uiw-admin/plugins
  - 🐞 修复 自动加载 models 文件判断问题;
- @uiw-admin/user-login
  - 🌟 新增登录页面

## 5.0.4

- @uiw-admin/components
  - 🐞 修复 `ProForm`增加btnsContainer&required&span props;

## 5.0.3

- @uiw-admin/components
  - 🌟 完善`ProTable` `Skection`文档及用例
  - 🌟 完善`ProForm` `ProDrawer`文档及用例
- examples/base
  - 🌟 增加`queries`文件，用于存放复用swr数据
- @uiw-admin/basic-layouts
  - 🌟 增加`HeaderRightMenu`右侧菜单栏
- @uiw-admin/plugins
  - 🌟 增加`rematch`插件
  - 🌟 增加`widgets`插件
