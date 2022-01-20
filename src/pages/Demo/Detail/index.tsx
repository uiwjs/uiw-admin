import React from 'react';
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

const Detail = (props: DetailProps) => {
  const { updateData } = props;
  const dispatch = useDispatch<Dispatch>();
  const {
    demo: { drawerVisible, tableType, queryInfo, isView },
  } = useSelector((state: RootState) => state);

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

  const dataSource: any = items(queryInfo, { isView });

  return (
    <ProDrawer
      width={800}
      title={
        tableType === 'add' ? '新增' : tableType === 'edit' ? '编辑' : '查看'
      }
      visible={drawerVisible}
      onClose={onClose}
    >
      <ProForm
        title="基础信息"
        onSubmit={(initial, current) => {
          const errorObj:any = {};
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
        btnsContainer={{ justifyContent: "flex-start" }}
        btns={[
          {
            btnType: 'submit',
            label: '提交表单',
            type: 'primary',
          },
        ]}
        // 更新表单的值
        onChange={(initial: any, current: any) =>
          updateData({ queryInfo: { ...queryInfo, ...current } })
        }
        formDatas={dataSource}
      />
    </ProDrawer>
  );
};

export default Detail;
