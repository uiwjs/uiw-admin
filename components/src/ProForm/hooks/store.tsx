import { useContext, createContext } from 'react';
import { ColProps } from 'uiw';
export const StoreCtx = createContext({});

export const useStore = () => {
  return useContext(StoreCtx);
};

export const ColPropsContext = createContext<ColProps>({});

export const useColPropsContext = () => useContext(ColPropsContext);
