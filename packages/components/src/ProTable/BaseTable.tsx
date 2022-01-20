import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import useSWR from 'swr';
import { Table, Pagination, TableColumns } from 'uiw';
import { request } from '@uiw-admin/utils';
import { useStore } from './hooks';
import { Fields } from './types';

interface BaseTableProps {
  style?: React.CSSProperties;
  columns: TableColumns[];
}

const BaseTable: React.FC<BaseTableProps> = ({ style, columns, ...tableProps  }) => {
  const [pageIndex, setPageIndex] = useState(1);

  const [prevData, setPrevData] = useState({
    data: [],
    total: 0,
  });

  const store = useStore();

  let { formatData, updateStore, query, key, searchValues, SWRConfiguration = {} } = store as any;

  // 表单默认值
  const defaultValues = useMemo(() => {
    const defaultSearchValues: Fields = {};
    columns.forEach((col) => {
      if (col?.props?.initialValue) {
        const name = col.key || col.props.key;
        defaultSearchValues[name] = col.props.initialValue;
      }
    });

    return defaultSearchValues;
  }, [JSON.stringify(columns)]);
  // 是否首次调取数据
  const isFirstMountRef = useRef(false);
  // 格式化接口查询参数
  const formatQuery = useCallback(() => {
    if (query) {
      return query(
        pageIndex,
        isFirstMountRef.current === false ? defaultValues : searchValues,
      );
    } else {
      // 默认传参
      return {
        page: 1,
        pageSize: 10,
      };
    }
  }, [pageIndex, JSON.stringify(defaultValues), JSON.stringify(searchValues)]);

  const pageSize = formatQuery().pageSize || 10;

  const { data, isValidating } = useSWR(
    [key, { method: 'POST', body: formatQuery() }],
    request,
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,
      ...SWRConfiguration
    },
  );

  // 查询
  const onSearch = useCallback(async () => {
    setPageIndex(1)
  }, [setPageIndex]);

  // 分页
  const onPageChange = useCallback((page) => {
    setPageIndex(page);
  }, [setPageIndex]);

  useEffect(() => {
    // 获取表单默认值
    const defaultSearchValues: Fields = {};
    columns.forEach((col) => {
      if (col?.props?.initialValue) {
        const name = col.key || col.props.key;
        defaultSearchValues[name] = col.props.initialValue;
      }
    });
    const stores: any = {
      data: data?.data,
      total: data?.total,
      loading: !data || isValidating,
      onSearch
    };

    if (!isFirstMountRef.current) {
      isFirstMountRef.current = true;
      // 默认表单值

      stores.searchValues = defaultSearchValues;
    }

    updateStore(stores);

    // 上一次请求数据
    if (data) {
      setPrevData(data);
    }
  }, [JSON.stringify(data), isValidating,  JSON.stringify(columns)]);

  return (
    <Table
      columns={columns}
      data={
        formatData && data
          ? formatData(data).data
          : data?.data || prevData?.data
      }
      footer={
        <Pagination
          current={pageIndex}
          pageSize={pageSize}
          total={
            formatData && data
              ? formatData(data).total
              : data?.total || prevData?.total
          }
          divider
          onChange={(page) => {
            onPageChange(page);
          }}
        />
      }
      {...tableProps}
    />
  );
};

export default BaseTable;
