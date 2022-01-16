import {
  useContext,
  createContext,
} from 'react';

export const StoreCtx = createContext({
  data: []
});


export const useStore = () => {
  return useContext(StoreCtx);
};



