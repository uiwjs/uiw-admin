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
  scroll = {},
  paginationProps = {},
  ...tableProps
}) => {
  // const { pageSize } = paginationProps

  const [pageIndex, setPageIndex] = useState(1);

  const [pgSize, setPgSize] = useState(paginationProps?.pageSize || 10);

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
  const { x } = scroll;
  const isCheckbox = type === 'checkbox';

  // columns列和标题是否居中
  const defaultColumns = () => {
    return columns.map((item) => {
      const { align = 'left', render } = item;
      return {
        ...item,
        // 标题样式
        style: { textAlign: align },
        // 列内容
        render: render
          ? render
          : (text: string) => <div style={{ textAlign: align }}>{text}</div>,
      };
    });
  };

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
        pgSize,
        isFirstMountRef.current === false ? defaultValues : searchValues,
      );
    } else {
      // 默认传参
      return {
        page: 1,
        pageSize: 10,
      };
    }
  }, [
    pageIndex,
    JSON.stringify(defaultValues),
    JSON.stringify(searchValues),
    pgSize,
  ]);

  const pageSize = formatQuery().pageSize || 10;
  // 调接口
  const { data, isValidating, mutate } = useSWR(
    [key, { method: 'POST', body: formatQuery() }],
    request,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
      ...SWRConfiguration,
    },
  );

  useEffect(() => {
    // 第一次加载
    mutate(false);
  }, [mutate]);

  // table数据
  const tableData =
    formatData && data ? formatData(data).data : data?.data || prevData?.data;
  const selection = useSelections<any>(
    // 有枚举值的话  设置枚举值
    selectKey
      ? tableData
        ? tableData.map((itm: any) => itm[selectKey])
        : []
      : [],
    defaultSelected,
    type === 'radio',
  );
  // 查询
  // const onSearch = async () => {
  //   await setPageIndex(1);
  //   form.current.onSubmit()
  //   mutate(false);
  // };
  // 分页
  const onPageChange = useCallback(
    async (page) => {
      if (pageChange) {
        pageChange(page);
      }
      await setPageIndex(page);
      mutate(false);
    },
    [setPageIndex, pageChange],
  );
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
      loading: isValidating,
      // onSearch,
      selection,
      pageIndex,
      setPageIndex,
      mutate,
    };

    if (!isFirstMountRef.current) {
      isFirstMountRef.current = true;
      // 默认表单值
      stores.searchValues = defaultSearchValues;
    }
    updateStore(stores);

    // 上一次请求数据
    if (data) {
      setPrevData(formatData ? formatData(data) : data);
    }
  }, [
    JSON.stringify(data),
    isValidating,
    JSON.stringify(columns),
    pageIndex,
    JSON.stringify(selection),
    setPageIndex,
    mutate,
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
      width: 35,
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
    <div style={{ overflow: x ? 'scroll' : 'hidden' }}>
      <div style={{ width: x || '100%' }}>
        <Table
          // 判断是否添加选择框
          columns={
            selectKey ? selectionCol.concat(defaultColumns()) : defaultColumns()
          }
          data={tableData}
          footer={
            tableData &&
            tableData.length > 0 && (
              <Pagination
                divider
                {...paginationProps}
                current={pageIndex}
                pageSize={pageSize}
                total={
                  formatData && data
                    ? formatData(data).total
                    : data?.total || prevData?.total
                }
                onChange={(page) => {
                  onPageChange(page);
                }}
                onShowSizeChange={(current, pageSize) => {
                  // console.log(pageSize)
                  setPgSize(pageSize);
                  onPageChange(1);
                  paginationProps?.onShowSizeChange?.(current, pageSize);
                }}
              />
            )
          }
          {...tableProps}
        />
      </div>
    </div>
  );
};

export default BaseTable;
