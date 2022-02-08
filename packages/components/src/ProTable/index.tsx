import React, { useMemo } from 'react';
import { Button } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import BaseForm from './BaseForm';
import { StoreCtx } from './hooks';
import { ProtableProps } from './types';

const ProTabel: React.FC<ProtableProps> = (props) => {
  // 监听表单变化的值
  const updateSearchValueRef = React.useRef({});
  const {
    table,
    columns,
    operateButtons = [],
    searchBtns,
    onBeforeSearch,
    ...tableProps
  } = props;
  const {
    key,
    reset,
    refersh,
    updateStore,
    formatData,
    query,
    searchValues,
    loading,
    onSearch,
    SWRConfiguration,
    selection,
    pageIndex,
  } = table;

  const store = useMemo(
    () => ({
      data: [],
      reset,
      refersh,
      key,
      updateStore,
      formatData,
      query,
      searchValues,
      onSearch,
      SWRConfiguration,
      selection,
      pageIndex,
    }),
    [JSON.stringify(table)],
  );

  return (
    <StoreCtx.Provider value={{ ...store, updateSearchValueRef }}>
      <Skeleton loading={loading}>
        {/* 表单查询区域 */}
        <BaseForm
          columns={columns}
          searchBtns={searchBtns}
          onBeforeSearch={onBeforeSearch}
        />
        {/* 操作区域 */}
        {operateButtons.length > 0 && (
          <div style={{ background: '#fff', padding: 10 }}>
            {operateButtons.map((btn: any, idx: number) =>
              btn?.render ? (
                <React.Fragment key={idx.toString()}>
                  {btn.render}
                </React.Fragment>
              ) : (
                <Button key={idx.toString()} {...btn}>
                  {btn.label}
                </Button>
              ),
            )}
          </div>
        )}
        {/* 列表组件 */}
        <Table columns={columns} {...tableProps} />
      </Skeleton>
    </StoreCtx.Provider>
  );
};

export default ProTabel;
