## 发布周期

- bug修复
- 功能更新

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
  - 🌟 增加`dva`插件
  - 🌟 增加`widgets`插件
