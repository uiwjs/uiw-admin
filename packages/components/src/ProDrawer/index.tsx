import React, { memo } from 'react';
import { Drawer, Button, DrawerProps, ButtonProps } from 'uiw';
import { AuthBtn, AuthBtnProps } from '@uiw-admin/authorized';

/**
 * ProDrawer 组件继承于https://uiwjs.github.io/#/components/drawer
 * @param {boolean} visible 显示隐藏
 * @param {string} title 标题
 * @param {()=>void} onClose 关闭事件
 * @param {number} width Drawer宽
 * @param {Array<{label?:string,onPress?:()=>void,show?:boolean,loading?:boolean}>} buttons 按钮集合(label:"文本",onPress:点击事件,show:是否展示)
 * @param {React.ReactNode} children
 * @returns
 */

interface ButtonsProps extends ButtonProps {
  label?: string;
  show?: boolean;
  path?: string;
  disabled?: boolean;
}

interface ProDrawerProps extends DrawerProps {
  visible: boolean;
  title?: string;
  onClose?: any;
  width?: number;
  buttons?: Array<ButtonsProps>;
  children?: React.ReactNode;
}

// button权限
function BtnAuth({ path, children, ...others }: AuthBtnProps) {
  if (path)
    return (
      <AuthBtn path={path} {...others}>
        {children}
      </AuthBtn>
    );
  return <>{children}</>;
}

function ProDrawer(props: ProDrawerProps) {
  const {
    visible,
    title = '',
    onClose = null,
    width = 800,
    buttons = [],
    children,
    ...others
  } = props;
  return (
    <Drawer
      title={title}
      isOpen={visible}
      onClose={onClose && onClose}
      size={width}
      bodyStyle={{ padding: '0 10px 45px 10px' }}
      footer={buttons.map(
        (
          { label = '', show = true, path, disabled = false, ...others }: any,
          idx,
        ) =>
          show && (
            <BtnAuth key={idx} path={path} disabled={disabled}>
              <Button {...others}>{label}</Button>
            </BtnAuth>
          ),
      )}
      {...others}
    >
      {children}
    </Drawer>
  );
}

export default memo(ProDrawer);
