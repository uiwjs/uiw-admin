import { useRef, useState } from 'react'

type Result = {
  total: number,
  data:  Record<string, string | number | JSX.Element>[];
}



type Params = {
  formatData?: (res: any) => Result,
  query?: (pageIndex: number, pageSize: number) => ({
    [key: string]: any
  })
}


export interface useTableData extends Params {
  data:  Record<string, string | number | JSX.Element>[],
  total: number,
  key: string,
  reset: () => void,
  refersh: () => void,
  updateStore: (p: stateParams) => void
  
}

type stateParams = {
  data?:  Record<string, string | number | JSX.Element>[],
  total?: number,
  selectChecked?: [],
  selectCheckedRows?: [],
}

const useTable = (key: string, params: Params = {}): useTableData => {

  // const tableRef = useRef(null)
  const { formatData, query } = params


  const [state, setState] = useState<any>({
     // 总页数
    total: 1,
    // 当前table数据源
    data: [],
    // 选中的行
    selectChecked: [],
    selectCheckedRows: [],
  });
  
  const updateStore = (datas: stateParams) => {
    setState({
      ...state,
      ...datas,
    })
  }

  return {
    key,
    // 重置
    reset: () => {

    },
    // 刷新当前页数据
    refersh: () => {

    },
    formatData,
    query,
    updateStore,
    ...state,
  }
}


export default useTable