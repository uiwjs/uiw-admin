import React, { memo } from 'react';
import { Drawer, Button, DrawerProps, Row, Col } from 'uiw';

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

interface ButtonItemsProps {
  label?: string;
  onPress?: () => void;
  show?: boolean;
  size?: 'large' | 'default' | 'small';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
  loading?: boolean;
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
        buttons.map(
          ({ label = '', onPress, show = true, loading, type = "primary", width = 80, size = "default" }, idx) =>
            show && (
              <Button
                style={{ width: width }}
                key={idx}
                type={type}
                size={size}
                onClick={onPress && onPress}
                loading={loading}
              >
                {label}
              </Button>
            )
        )
      }
    >
      {children}
    </Drawer>
  );
}

export default memo(ProDrawer);
