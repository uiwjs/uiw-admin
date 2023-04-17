export { default as Exceptions404 } from './Exceptions/404';
export { default as Exceptions403 } from './Exceptions/403';
export { default as Exceptions500 } from './Exceptions/500';

export interface ExceptionsProps {
  /** 按钮跳转链接，默认跳转 /home */
  path?: string;
  /** 按钮文字 */
  btnText?: string;
}
