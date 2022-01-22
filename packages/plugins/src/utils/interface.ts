export interface RoutersProps {
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 组件 */
  component?: string;
  /** 子集 路由 */
  routes?: RoutersProps[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
}