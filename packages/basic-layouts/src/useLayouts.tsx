import { useState } from 'react';

const useLayouts = () => {
  const [state, setState] = useState<{ headerRightvisible?: boolean }>({
    headerRightvisible: false,
  });
  // 更新store
  const updateStore = (datas: { headerRightvisible?: boolean }) => {
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

export interface UseLayoutsProps {
  headerRightvisible: boolean;
  closeMenu: () => void;
  updateStore: (datas: { headerRightvisible?: boolean }) => void;
}

export default useLayouts;
