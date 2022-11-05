/**头部样式布局*/
import { useContext, createContext, createElement } from 'react';

export interface HeadStyleProps {
  /** 头部 布局 */
  headerLayout?: 'top' | 'default';
  /** 头部背景色 */
  headerBackground?: string;
  /** 头部字体颜色 */
  headerFontColor?: string;
}

const HeadStyleContext = createContext<HeadStyleProps>({
  headerLayout: 'default',
  headerBackground: '#fff',
  headerFontColor: '#000',
});

export const HeadStyleProvider = (
  props: {
    children: React.ReactNode;
  } & HeadStyleProps,
) => {
  const { children, ...rest } = props;

  return createElement(HeadStyleContext.Provider, {
    value: { ...rest },
    children: children,
  });
};
export const useHeadStyle = () => useContext(HeadStyleContext);
