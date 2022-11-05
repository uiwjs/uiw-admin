/**侧边展开隐藏*/
import { useState, useContext, createContext, createElement } from 'react';

const CollapsedContext = createContext<{
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}>({ collapsed: false, setCollapsed: () => {} });

export const CollapsedProvider = (props: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return createElement(CollapsedContext.Provider, {
    value: { collapsed, setCollapsed },
    children: props.children,
  });
};
export const useCollapsed = () => useContext(CollapsedContext);
