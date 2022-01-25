import React, { useMemo } from 'react';
import { Button, Row } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import BaseForm from './BaseForm';
import { StoreCtx } from './hooks';
import { ProtableProps } from './types';

const ProTabel: React.FC<ProtableProps> = (props) => {
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
    data,
    reset,
    refersh,
    updateStore,
    formatData,
    query,
    searchValues,
    loading,
    onSearch,
    SWRConfiguration,
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
    }),
    [
      JSON.stringify(data),
      reset,
      refersh,
      key,
      updateStore,
      formatData,
      query,
      JSON.stringify(searchValues),
      onSearch,
      SWRConfiguration,
    ],
  );

  return (
    <StoreCtx.Provider value={store}>
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
