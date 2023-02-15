export interface RoutersProps {
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
  /** 组件 */
  component?: string;
  /** 子集 路由 */
  routes?: RoutersProps[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限  */
  isAuth?: boolean;
}

export type ModelType = {
  /** 路径 */
  path: string;
  /** 文件名称 */
  filename: string;
  /** model 名称 */
  modelName?: string;
  /** 是否是 createModel 进行包裹 */
  isCreateModel: boolean;
  /** 所在路径位置 */
  location: string;
  /** model 名称 */
  name: string;
  srcPath: string;
};

/**
 * @description 生成的映射json文件格式
 * {
 *  "path":[
 *    {name:"",path:"....path"}
 *  ]
 * }
 * */

export type RouteModels = Record<
  string,
  {
    name: string;
    path: string;
  }[]
>;
