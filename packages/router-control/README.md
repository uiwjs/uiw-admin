# 路由

[![npm version](https://img.shields.io/npm/v/@uiw-admin/router-control.svg?label=@uiw-admin/router-control)](https://www.npmjs.com/package/@uiw-admin/router-control)

导出路由相关方法



## 安装

```bash
npm i @uiw-admin/router-control --save # yarn add  @uiw-admin/router-control
```

## 参数

当前配置参数配合[@uiw-admin/basic-layouts](https://github.com/uiwjs/uiw-admin/tree/yb/packages/basic-layouts)使用

``` ts
export interface RoutesBaseProps {
  key?: string;
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string | React.ReactNode;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 子集 路由 */
  children?: RoutesBaseProps[];
  /** 隐藏主菜单 */
  hiddenMainMenu?: boolean;
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
  /** 自定义 跳转 */
  // navigate?: (navigate: NavigateFunction) => void;
  navigate?: string;
  /** 控制是否侧边只展示子路由 **/
  side?: boolean;
}
```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.