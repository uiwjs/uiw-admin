import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Table, Pagination, TableColumns } from 'uiw';
import { request } from '@uiw-admin/utils';
import { useStore } from './hooks'

interface BaseTableProps {
  style?: React.CSSProperties,
  columns: TableColumns[];
}

const BaseTable: React.FC<BaseTableProps> = ({ style, columns}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const pageSize = 10;

  const store = useStore()

  let {
    formatData,
    updateStore,
    query,
    key
  } = store

  const formatQuery = () => {
    if (query) {
      return query(pageIndex, pageSize)
    } else {
      // 默认传参
      return {
        page: pageIndex,  pageSize
      }
    }
  }

  const { data, error, isValidating } = useSWR(
    [key, { method: 'POST', body: formatQuery() }],
    request,
  );

  useEffect(() => {
    updateStore({
      data: data?.data,
      total: data?.total
    })
  }, [JSON.stringify(data)])



  return (
    <Table
      columns={columns}
      data={formatData && data ? formatData(data).data : data?.data}
      style={style}
      footer={
        <Pagination
          current={pageIndex}
          pageSize={pageSize}
          total={formatData && data ? formatData(data).total : data?.total}
          divider
          onChange={(page) => {
            setPageIndex(page);      
          }}
        />
      }
    />
  );
}

export default BaseTable