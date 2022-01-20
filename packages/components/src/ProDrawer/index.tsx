import React, { memo } from 'react';
import { Drawer, Button, DrawerProps, ButtonProps } from 'uiw';

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

interface ButtonItemsProps extends ButtonProps {
  label?: string;
  show?: boolean;
  width?: number
}

interface ProDrawerProps extends DrawerProps {
  visible: boolean;
  title?: string;
  onClose?: any;
  width?: number;
  buttons?: Array<ButtonItemsProps>;
  children?: React.ReactNode
}
function ProDrawer(props: ProDrawerProps) {
  const { visible, title = '', onClose = null, width = 800, buttons = [], children, ...others } = props
  return (
    <Drawer
      title={title}
      isOpen={visible}
      onClose={onClose && onClose}
      size={width}
      bodyStyle={{ padding: '0 10px 45px 10px' }}
      {...others}
      footer={
        buttons.map(({ label = '', show = true, ...others }: any, idx) => (
          show && <Button key={idx} {...others}>{label}</Button>
        ))
      }
    >
      {children}
    </Drawer>
  );
}

export default memo(ProDrawer);
