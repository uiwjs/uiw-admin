import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import useSWR from 'swr';
import { Table, Pagination, Checkbox, Radio } from 'uiw';
import { request } from '@uiw-admin/utils';
import { useStore } from './hooks';
import { Fields, BaseTableProps, FormCol } from './types';
import useSelections from './useSelections';

const BaseTable: React.FC<BaseTableProps> = ({
  style,
  columns,
  rowSelection = {},
  onPageChange: pageChange,
  ...tableProps
}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const [prevData, setPrevData] = useState({
    data: [],
    total: 0,
  });

  const store = useStore();

  let {
    formatData,
    updateStore,
    query,
    key,
    searchValues,
    SWRConfiguration = {},
  } = store as any;

  const { selectKey, type = 'checkbox', defaultSelected = [] } = rowSelection;

  const isCheckbox = type === 'checkbox';

  // 表单默认值
  const defaultValues = useMemo(() => {
    const defaultSearchValues: Fields = {};
    columns.forEach((col) => {
      if (col?.props?.initialValue) {
        const name = col.key || col.props.key;
        defaultSearchValues[name] = col.props.initialValue;
      }
    });
    (store as any).updateSearchValueRef.current = defaultSearchValues || {};
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
      revalidateOnFocus: false,
      ...SWRConfiguration,
    },
  );

  // table数据
  const tableData =
    formatData && data ? formatData(data).data : data?.data || prevData?.data;

  const selection = useSelections<any>(
    // 设置枚举值
    selectKey
      ? tableData
        ? tableData.map((itm: any) => itm[selectKey])
        : []
      : tableData,
    defaultSelected,
    type === 'radio',
  );

  // 查询
  const onSearch = () => {
    setPageIndex(1);
    // 更新searchValues,触发请求接口
    updateStore({
      searchValues: {
        ...(store as any).updateSearchValueRef.current,
        swr_Rest_Time: new Date().getTime(),
      },
    });
  };

  // 分页
  const onPageChange = useCallback(
    (page) => {
      if (pageChange) {
        pageChange(page);
      }
      setPageIndex(page);
    },
    [setPageIndex, pageChange],
  );

  // useEffect(() => {
  //   updateStore({ selection });
  // }, [JSON.stringify(selection)]);

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
      onSearch,
      selection,
      pageIndex,
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
  }, [
    JSON.stringify(data),
    isValidating,
    JSON.stringify(columns),
    pageIndex,
    JSON.stringify(selection),
  ]);

  const selectionCol = [
    {
      title: isCheckbox
        ? () => {
            return (
              <Checkbox
                checked={selection.allSelected as any}
                onClick={() => {
                  selection.toggleAll();
                }}
              />
            );
          }
        : null,
      key: 'checked',
      render: (
        text: any,
        key: any,
        rowData: { [x: string]: any; checked: boolean | undefined },
      ) => {
        if (!selectKey) return null;
        return isCheckbox ? (
          <Checkbox
            checked={selection.isSelected(rowData[selectKey])}
            onClick={() => {
              selection.toggle(rowData[selectKey]);
            }}
          />
        ) : (
          <Radio
            onChange={() => {
              selection.toggle(rowData[selectKey]);
            }}
            checked={selection.isSelected(rowData[selectKey])}
          />
        );
      },
    },
  ] as FormCol;

  return (
    <Table
      // 判断是否添加选择框
      columns={selectKey ? selectionCol.concat(columns) : columns}
      data={tableData}
      footer={
        data && (
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
        )
      }
      {...tableProps}
    />
  );
};

export default BaseTable;
