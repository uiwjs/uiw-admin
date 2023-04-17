import React, { useMemo } from 'react';
import { Menu, Avatar, Popover, Icon } from 'uiw';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { UseLayoutsProps } from '../useLayouts';
import './index.css';

export interface HeaderMenuItemsProps {
  title: React.ReactNode;
  icon: JSX.Element | string | false | null;
  onClick?: () => void;
  divider?: boolean;
  render?: React.ReactNode;
}
export interface HeaderRightProps {
  // 退出登录
  onLogout?: (navigate: NavigateFunction) => void;

  /**
   * 菜单
   */
  menus?: Array<HeaderMenuItemsProps>;
  /**
   * avatar 头像
   * userName 用户名
   * menuLeft 菜单左侧
   */
  profile?: {
    avatar?: string;
    userName?: string;
    menuLeft?: React.ReactElement;
  };
  // 重新加载权限
  onReloadAuth: () => void;
  layouts?: UseLayoutsProps;
  // 隐藏刷新权限按钮
  hideReloadButton?: boolean;
  // 隐藏退出登录按钮
  hideLogoutButton?: boolean;
  // 隐藏用户信息
  hideUserInfo?: boolean;
}

export default function HeaderRightMenu({
  menus = [],
  profile = {},
  onReloadAuth,
  layouts,
  hideReloadButton,
  hideLogoutButton,
  hideUserInfo,
  onLogout,
}: HeaderRightProps) {
  const { headerRightvisible, updateStore } = layouts || {};

  const navigate = useNavigate();

  const menuData: Array<HeaderMenuItemsProps & any> = [
    ...(!hideUserInfo
      ? [
          {
            title: (
              <span style={{ fontSize: 15 }}>
                账号 {profile?.userName || 'admin'}
              </span>
            ),
            icon: <Icon type="user" />,
          },
          {
            divider: true,
          },
        ]
      : []),
    ...menus,
    {
      title: '刷新权限',
      icon: <Icon type="reload" />,
      onClick: () => onReloadAuth(),
      style: { display: hideReloadButton ? 'none' : '' },
    },
    {
      title: '退出登录',
      icon: <Icon type="logout" />,
      style: { display: hideLogoutButton ? 'none' : '' },
      onClick: () => {
        if (onLogout) {
          onLogout(navigate);
          return;
        }
        navigate('/login', { replace: true });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
      },
    },
  ];

  const menuView = (
    <div style={{ width: 150 }}>
      <Menu>
        {menuData.map(
          (
            { title, icon, onClick, divider, render, ...otherProps },
            index: number,
          ) => {
            if (divider) {
              return <Menu.Divider key={index} />;
            }
            if (render) {
              return <React.Fragment key={index}>{render}</React.Fragment>;
            }
            return (
              <Menu.Item
                key={index}
                text={title}
                icon={icon}
                {...otherProps}
                onClick={onClick && onClick}
              />
            );
          },
        )}
      </Menu>
    </div>
  );

  const avatarWarp = useMemo(() => {
    const avatar = profile?.avatar;
    const userName = profile?.userName;
    const initialsName = userName ? userName.trim().split('')[0] : ''; // 名称缩写首字母
    let node;
    if (avatar) {
      node = <img src={avatar} alt={initialsName} />;
    } else if (userName) {
      node = <div className="avatar">{initialsName}</div>;
    } else {
      node = <Avatar icon="user" size="default" />;
    }
    return node;
  }, [profile?.avatar, profile?.userName]);

  return (
    <div className="uiw-global-header-menu">
      <span className="uiw-global-header-menu">
        <Popover
          isOpen={!!headerRightvisible}
          onVisibleChange={(visible) =>
            updateStore?.({ headerRightvisible: visible })
          }
          trigger="click"
          placement="bottomRight"
          content={menuView}
        >
          {avatarWarp}
        </Popover>
      </span>
    </div>
  );
}
