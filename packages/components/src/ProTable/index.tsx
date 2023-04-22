import React, { useMemo } from 'react';
import { Button, Card } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import BaseForm from './BaseForm';
import { StoreCtx } from './hooks';
import { ProtableProps } from './types';
import './index.css';

export * from './types';

const ProTabel: React.FC<ProtableProps> = (props) => {
  const {
    table,
    columns,
    operateButtons = [],
    searchBtns,
    onBeforeSearch,
    paginationProps,
    formCol,
    tableHeadHidden,
    tableBackgroundColor,
    ...tableProps
  } = props;
  const {
    key,
    onReset,
    onRefersh,
    updateStore,
    formatData,
    query,
    searchValues,
    loading,
    onSearch,
    SWRConfiguration,
    selection,
    pageIndex,
    form,
    updateForm,
    setPageIndex,
    mutate,
    requestOptions,
  } = table;
  const store = useMemo(
    () => ({
      data: [],
      onReset,
      onRefersh,
      key,
      updateStore,
      formatData,
      query,
      searchValues,
      onSearch,
      SWRConfiguration,
      selection,
      pageIndex,
      form,
      updateForm,
      setPageIndex,
      mutate,
      requestOptions,
    }),
    [JSON.stringify(table)],
  );
  return (
    <StoreCtx.Provider value={{ ...store }}>
      <Skeleton loading={loading}>
        {/* 表单查询区域 */}
        {searchBtns && searchBtns.length > 0 && (
          <Card
            noHover
            style={{ marginBottom: 14 }}
            bodyStyle={{ padding: '8px 14px' }}
          >
            <BaseForm
              columns={columns}
              searchBtns={searchBtns}
              onBeforeSearch={onBeforeSearch}
              formCol={formCol}
            />
          </Card>
        )}

        {/* 操作区域 */}
        <Card noHover>
          {operateButtons && operateButtons.length > 0 && (
            <div style={{ background: '#fff', paddingBottom: 14 }}>
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
          <div
            className={[
              'uiw-admin-protable',
              tableHeadHidden ? 'is-need-table-header' : '',
              tableBackgroundColor ? 'table-parent-uiw-admin' : '',
            ]
              .filter((it) => it)
              .join(' ')}
            style={{ backgroundColor: tableBackgroundColor }}
          >
            <Table
              columns={columns}
              {...tableProps}
              paginationProps={paginationProps}
            />
          </div>
        </Card>
      </Skeleton>
    </StoreCtx.Provider>
  );
};

export default ProTabel;
