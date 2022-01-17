import { useRef, useState } from 'react'

type Result = {
  total: number,
  data:  Record<string, string | number | JSX.Element>[];
}

type Params = {
  formatData?: (res: any) => Result,
  query?: (pageIndex: number, searchValues: object) => ({
    [key: string]: any
  })
}

export interface useTableData extends Params {
  data:  Record<string, string | number | JSX.Element>[]
  total: number
  key: string
  reset: () => void
  refersh: () => void
  onSearch: () => void
  updateStore: (p: stateParams) => void
  searchValues: object,
  loading: boolean
}

export type stateParams = {
  data?:  Record<string, string | number | JSX.Element>[],
  total?: number,
  selectChecked?: [],
  selectCheckedRows?: [],
}

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