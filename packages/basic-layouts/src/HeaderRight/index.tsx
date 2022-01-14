import React from 'react'
import { Dropdown, Menu, Avatar } from 'uiw';
import { useNavigate } from 'react-router-dom';
import { HeaderMenuItemsProps } from '../'
import './index.css';

export interface HeaderRightProps {
  menus?: Array<HeaderMenuItemsProps>
  profile?: {
    avatar?: string;
    userName?: string;
  }
}

export default function HeaderRight(props: HeaderRightProps) {

  const navigate = useNavigate()

  const { menus = [], profile = {} } = props

  const menuData: Array<HeaderMenuItemsProps & any> = [
    {
      title: profile?.userName || 'admin',
      icon: "user",
    },
    {
      divider: true,
    },
    {
      title: '刷新权限',
      icon: "reload",
      onClick: () => { },
    },
    {
      title: '修改密码',
      icon: "setting",
      onClick: () => { }
    },
    ...menus,
    {
      divider: true,
    },
    {
      title: '退出登录',
      icon: "logout",
      onClick: () => navigate("/", { replace: true })
    },
  ];

  const menuView = (
    <div>
      <Menu bordered style={{ maxWidth: 250 }}>
        {menuData.map(({ title, link, icon, onClick, divider, render, ...otherProps }, index: number) => {
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
      <Dropdown menu={menuView} trigger="hover" placement="bottomRight">
        <span className="aned-global-header-right-menu">
          {profile?.avatar ? (
            <img src={profile.avatar} />
          ) : (
            <Avatar icon="user" size="default" />
          )}
        </span>
      </Dropdown>
    </div>
  )
}