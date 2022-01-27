import { useState } from 'react';
import { Params, useTableData, stateParams } from './types';

const useTable = (key: string, params: Params = {}): useTableData => {
  const { formatData, query, SWRConfiguration } = params;

  const [state, setState] = useState<any>({
    // 当前页码
    pageIndex: 1,
    // 总页数
    total: 1,
    // 当前table数据源
    data: [],
    // 表单值
    searchValues: {},
    // 加载状态
    loading: false,
    // 选择框属性
    selection: {
      selected: [],
      noneSelected: false,
      allSelected: false,
      partiallySelected: false,
      setSelected: () => null,
      isSelected: () => null,
      select: () => null,
      unSelect: () => null,
      toggle: () => null,
      selectAll: () => null,
      unSelectAll: () => null,
      toggleAll: () => null,
    },
  });
  // 更新store
  const updateStore = (datas: stateParams) => {
    setState({
      ...state,
      ...datas,
    });
  };

  // 重置
  const reset = () => {};
  // 刷新当前页数据
  const refersh = () => {};
  // 点击查询
  const onSearch = () => {};

  return {
    key,
    // 重置
    reset,
    // 刷新当前页数据
    refersh,
    // 点击查询
    onSearch,
    formatData,
    query,
    updateStore,
    SWRConfiguration,
    ...state,
  };
};

export default useTable;
