import { useState } from 'react'
import { Params, useTableData, stateParams } from './types'


const useTable = (key: string, params: Params = {}): useTableData => {

  const { formatData, query } = params


  const [state, setState] = useState<any>({
     // 总页数
    total: 1,
    // 当前table数据源
    data: [],
    // 选中的行
    selectChecked: [],
    selectCheckedRows: [],
    // 表单值
    searchValues: {},
    // 加载状态
    loading: false,
  });
  // 更新store
  const updateStore = (datas: stateParams) => {
    setState({
      ...state,
      ...datas,
    })
  }

  // 重置
  const reset = () => {

  }
  // 刷新当前页数据
  const refersh = () => {

  }
  // 点击查询
  const onSearch = () => {

  }

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
    ...state,
  }
}


export default useTable