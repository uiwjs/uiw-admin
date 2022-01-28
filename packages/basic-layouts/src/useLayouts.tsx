import { useState } from 'react';

export interface Params {
  headerRightvisible: boolean;
}
export interface UseLayoutsProps {
  headerRightvisible: boolean;
  closeMenu: () => void;
  updateStore: (datas: Params) => void;
}

const useLayouts = () => {
  const [state, setState] = useState<Params>({
    headerRightvisible: false,
  });
  // 更新store
  const updateStore = (datas: Params) => {
    setState({
      ...state,
      ...datas,
    });
  };

  // 关闭右上角menu菜单
  const closeMenu = () => updateStore({ headerRightvisible: false });

  return {
    closeMenu,
    updateStore,
    ...state,
  };
};

export default useLayouts;
