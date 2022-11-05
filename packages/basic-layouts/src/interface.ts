import React from 'react';
import { RoutersProps } from '@uiw-admin/router-control';
import { HeaderRightProps } from './HeaderRightMenu';

export type BasicLayoutProps = {
  className?: string;
  style?: React.CSSProperties;
  logo?: string;
  projectName?: string;
  /**
   * 页脚
   */
  footer?: React.ReactElement;
  routes?: RoutersProps[];
  children?: React.ReactNode;
  /** 头部 布局 */
  headerLayout?: 'top' | 'default';
  /** 头部背景色 */
  headerBackground?: string;
  /** 头部字体颜色 */
  headerFontColor?: string;
  /** 菜单隐藏 */
  menuHide?: boolean;
  /** 是否使用 内容区域默认样式  */
  isDefaultContentStyle?: boolean;
  // 隐藏刷新权限按钮
  hideReloadButton?: boolean;
  // 隐藏退出登录按钮
  hideLogoutButton?: boolean;
  // 隐藏用户信息
  hideUserInfo?: boolean;
  /** 标题部分 点击事件 **/
  onLogoClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
} & HeaderRightProps;
