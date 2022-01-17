import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSWR from 'swr';
import { Table, Pagination, TableColumns, Button } from 'uiw';
import { request } from '@uiw-admin/utils';
import { useStore } from './hooks';
import { Fields } from './BaseForm';

interface BaseTableProps {
  style?: React.CSSProperties;
  columns: TableColumns[];
}

const BaseTable: React.FC<BaseTableProps> = ({ style, columns }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const store = useStore();

  let { formatData, updateStore, query, key, searchValues } = store as any;

  // 是否首次调取数据
  const isFirstMountRef = useRef(false);
  // 格式化接口查询参数
  const formatQuery = (defaultSearchValues?: Fields, page?:number) => {
    if (query) {
      return query(page || pageIndex, defaultSearchValues || searchValues);
    } else {
      // 默认传参
      return {
        page: page || pageIndex,
        pageSize: 10,
      };
    }
  };

  const pageSize = formatQuery().pageSize || 10;


  const { data, error, mutate, isValidating } = useSWR(
    [key, { method: 'POST', body: formatQuery() }],
    request,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
    },
  );
  // 分页查询
  const onSearch = useCallback(async (current) => {
    setLoading(true)
    setPageIndex(1)
    await request(key, { method: 'POST', body: formatQuery(current, 1) }).then(res => {
      setLoading(false)
      mutate(res, false);
      console.log(123);
     
    });
  }, [request, mutate, JSON.stringify(searchValues)]);

  const onPageChange = useCallback(async (page) => {
    setLoading(true)
    setPageIndex(page)
    request(key, { method: 'POST', body: formatQuery(undefined, page) }).then(res => {
      setLoading(false)
      mutate(res, false);
     
    });
  }, [request, mutate, JSON.stringify(searchValues), pageIndex]);


  useEffect(() => {
    // 获取表单默认值
    const defaultSearchValues: Fields = {};
    columns.forEach((col) => {
      if (col?.props?.initialValue) {
        const name = col.key || col.props.key;
        defaultSearchValues[name] = col.props.initialValue;
      }
    });
    updateStore({
      data: data?.data,
      total: data?.total,
      loading: loading,
      onSearch
    });

    if (!isFirstMountRef.current) {
      isFirstMountRef.current = true;
      updateStore({
        searchValues: defaultSearchValues,
      });
      setLoading(true)
      // 第一次加载
      request(key, {
        method: 'POST',
        body: formatQuery(defaultSearchValues),
      }).then((res) => {
        setLoading(false)
        mutate(res, false);
      });
    }
  }, [JSON.stringify(data), onSearch, loading, JSON.stringify(columns)]);

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
            
            onPageChange(page)
          }}
        />
      }
    />
  );
};

export default BaseTable;
