import {
  useContext,
  createContext,
} from 'react';

export const StoreCtx = createContext({});


export const useStore = () => {
  return useContext(StoreCtx);
};



