import React from 'react'
import { Menu, Avatar, Popover } from 'uiw';
import { useNavigate } from 'react-router-dom';
import './index.css';


export interface HeaderMenuItemsProps {
  title: React.ReactNode;
  icon: JSX.Element | string | false | null;
  onClick?: () => void;
  divider?: boolean;
  render?: React.ReactNode;
}
export interface HeaderRightProps {
  /**
  * 菜单
  */
  menus?: Array<HeaderMenuItemsProps>
  /**
   * avatar 头像
   * userName 用户名
   * menuLeft 菜单左侧
   */
  profile?: {
    avatar?: string;
    userName?: string;
    menuLeft?: React.ReactElement;
  },
  // 重新加载权限
  onReloadAuth: () => void
}

export default function HeaderRightMenu(props: HeaderRightProps) {

  const navigate = useNavigate()

  const { menus = [], profile = {}, onReloadAuth } = props

  const menuData: Array<HeaderMenuItemsProps & any> = [
    {
      title: <span style={{ fontSize: 15 }}>账号 {profile?.userName || 'admin'}</span>,
      icon: "user",
    },
    {
      divider: true,
    },
    ...menus,
    {
      title: '刷新权限',
      icon: "reload",
      onClick: () => onReloadAuth(),
    },
    {
      divider: true,
    },
    {
      title: '退出登录',
      icon: "logout",
      onClick: () => navigate("/login", { replace: true })
    },
  ];

  const menuView = (
    <div style={{ width: 150 }}>
      <Menu>
        {menuData.map(({ title, icon, onClick, divider, render, ...otherProps }, index: number) => {
          if (divider) {
            return <Menu.Divider key={index} />;
          }
          if (render) {
            return <React.Fragment key={index}>{render}</React.Fragment>;
          }
          return <Menu.Item key={index} text={title} icon={icon} {...otherProps} onClick={onClick && onClick} />
        })}
      </Menu>
    </div>
  );

  return (
    <div className="uiw-global-header-menu">
      <span className="uiw-global-header-menu">
        <Popover trigger="click" placement="bottomRight" content={menuView}>
          {profile?.avatar ? <img src={profile.avatar} /> : <Avatar icon="user" size="default" />}
        </Popover>
      </span>
    </div>
  )
}