import React, { useState, useMemo } from 'react';
import { Button, Input, Form, ButtonProps, Row, Col, TableColumns } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import BaseForm from './BaseForm';
import { StoreCtx } from './hooks';
import { useTableData } from './useTable';

// interface BtnItem extends ButtonProps{
//   label: React.ReactNode;
// };
interface ProtableProps {
  table: useTableData;
  btns?: Array<ButtonProps>;
  columns: FormCol[];
}

export interface FormCol extends TableColumns {
  props?: {
    widget:
      | 'input'
      | 'radio'
      | 'checkbox'
      | 'switch'
      | 'select'
      | 'textarea'
      | 'dateInput'
      | 'timePicker'
      | 'searchSelect'
      | 'monthPicker';
    [key: string]: any;
  };
}

const ProTabel: React.FC<ProtableProps> = ({ table, columns, btns = [] }) => {
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
    ],
  );

  return (
    <StoreCtx.Provider value={store}>
      <Skeleton loading={loading}>
        {/* 表单查询区域 */}
        <BaseForm columns={columns} />
        {/* 操作区域 */}
        {btns.length > 0 && (
          <div style={{  background: '#fff', padding: 10 }}>
            {btns.map((btn: any, idx) => (
              <Button key={idx.toString()} style={{ marginRight: 5 }} {...btn}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}

        {/* 列表组件 */}
        <Table columns={columns} />
      </Skeleton>
    </StoreCtx.Provider>
  );
};

export default ProTabel;
