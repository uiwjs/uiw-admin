import { useState, MutableRefObject } from 'react';
import { Params, useTableData, stateParams } from './types';
import { FormRefType } from 'uiw';

const useTable = (key: string, params: Params = {}): useTableData => {
  const { formatData, query, SWRConfiguration, requestOptions } = params;

  // 表单组件实例
  const [form, setForm] = useState<MutableRefObject<FormRefType>>();

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
    setPageIndex: () => null,
    mutate: () => null,
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

  // 更新form
  const updateForm = (form: any) => {
    setForm(form);
  };
  // 重置
  const onReset = async () => {
    await form?.current.getError();
    onSearch();
  };
  // 刷新当前页数据
  const onRefersh = async () => {
    state.mutate(false);
  };
  // 点击查询
  const onSearch = async () => {
    // 需要表单存在
    if (form) {
      await form.current.onSubmit();
      // @ts-ignore
      const isNoError = form.current.getError();
      if (Object.keys(isNoError).length === 0) {
        await state.setPageIndex(1);
        state.mutate(false);
      }
    } else {
      await state.setPageIndex(1);
      state.mutate(false);
    }
  };

  return {
    key,
    // 重置
    onReset,
    // 刷新当前页数据
    onRefersh,
    // 点击查询
    onSearch,
    formatData,
    query,
    updateStore,
    SWRConfiguration,
    form,
    requestOptions,
    updateForm,
    ...state,
  };
};

export default useTable;
