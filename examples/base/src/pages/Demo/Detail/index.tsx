import React, { useRef } from 'react';
import { ProDrawer, ProForm } from '@uiw-admin/components';
import { Notify } from 'uiw';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
import { insert, update } from '../../../servers/demo';
import { items } from './items';
import useSWR from 'swr';

interface DetailProps {
  updateData?: any;
}

const Detail = ({ updateData }: DetailProps) => {
  const baseRef = useRef<any>()
  const dispatch = useDispatch<Dispatch>();
  const { demo: { drawerVisible, tableType, queryInfo, isView } } = useSelector((state: RootState) => state);

  const onClose = () => dispatch({ type: 'demo/clean' });

  const { mutate } = useSWR(
    [
      (tableType === 'add' && insert) || (tableType === 'edit' && update),
      { method: 'POST', body: queryInfo },
    ],
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data && data.code === 200) {
          Notify.success({ title: data.message });
          onClose();
        }
      },
    },
  );

  return (
    <ProDrawer
      width={800}
      title={
        tableType === 'add' ? '新增' : tableType === 'edit' ? '编辑' : '查看'
      }
      visible={drawerVisible}
      onClose={onClose}
      buttons={[
        {
          label: "保存",
          type: "danger",
          style: { width: 80 },
          show: !isView,
          onClick: () => baseRef?.current?.click()
        }
      ]}
    >
      <ProForm
        title="基础信息"
        formType={isView ? 'pure' : 'card'}
        submitRef={baseRef}
        readOnly={isView}
        readOnlyProps={{ column: 2 }}
        onSubmit={(initial, current) => {
          const errorObj: any = {};
          if (!current?.lastName) {
            errorObj.lastName = '名字不能为空';
          }
          if (Object.keys(errorObj).length > 0) {
            const err: any = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！' });
            throw err;
          }
          mutate();
        }}
        buttonsContainer={{ justifyContent: "flex-start" }}
        // 更新表单的值
        onChange={(initial: any, current: any) =>
          updateData({ queryInfo: { ...queryInfo, ...current } })
        }
        formDatas={items(queryInfo,isView) as any}
      />
    </ProDrawer>
  );
};

export default Detail;
