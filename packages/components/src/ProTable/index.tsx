import React, { useState, useMemo } from 'react';
import { Button, Input, Form, ButtonProps, Row, Col, TableColumns } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import { StoreCtx } from './hooks';
import { useTableData } from './useTable';

// interface BtnItem extends ButtonProps{
//   label: React.ReactNode;
// };
interface ProtableProps {
  table: useTableData;
  btns?: Array<ButtonProps>;
  columns: TableColumns[];
}

const ProTabel: React.FC<ProtableProps> = ({ table, columns, btns = [] }) => {
  const { key, data, reset, refersh, updateStore, formatData, query } = table;

  const store = useMemo(
    () => ({
      data: [],
      reset,
      refersh,
      key,
      updateStore,
      formatData,
      query,
    }),
    [JSON.stringify(data), reset, refersh, key, updateStore, formatData, query],
  );

  return (
    <StoreCtx.Provider value={store}>
      <Skeleton>
        <Form
          style={{ background: '#fff', paddingBottom: 5 }}
          resetOnSubmit={false}
          onSubmit={({ initial, current }) => {}}
          onSubmitError={(error) => {
            if (error.filed) {
              return { ...error.filed };
            }
            return null;
          }}
          fields={{
            username: {
              labelClassName: 'fieldLabel',
              labelStyle: { width: 160 },
              labelFor: 'username',
              label: '用户名',
              children: (
                <Input
                  preIcon="user"
                  id="username"
                  placeholder="用户名: admin"
                />
              ),
            },
            password: {
              labelClassName: 'fieldLabel',
              labelStyle: { width: 60 },
              label: '用户名',
              labelFor: 'password',
              children: (
                <Input
                  preIcon="lock"
                  id="password"
                  type="password"
                  placeholder="密码: admin"
                />
              ),
            },
          }}
        >
          {({ fields, state, canSubmit, resetForm }) => {
            return (
              <div>
                <Row gutter={10}>
                  <Col fixed>{fields.username}</Col>
                  <Col fixed>{fields.password}</Col>
                  <Col style={{ marginTop: 31 }}>
                    <Button
                      disabled={!canSubmit()}
                      type="primary"
                      htmlType="submit"
                    >
                      提交
                    </Button>
                    <Button type="danger" onClick={resetForm}>
                      重置表单
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          }}
        </Form>
        {/* 操作区域 */}
        {
          btns.length > 0 &&   <div style={{ marginTop: 14, background: '#fff', padding: 10 }}>
          {btns.map((btn: any, idx) => (
            <Button key={idx.toString()} style={{ marginRight: 5 }} {...btn}>
              {btn.label}
            </Button>
          ))}
        </div>
        }
      
        {/* 列表组件 */}
        <Table columns={columns} />
      </Skeleton>
    </StoreCtx.Provider>
  );
};

export default ProTabel;
