import React from 'react';
import { ProDrawer, ProForm } from '@uiw-admin/components'
import { Notify, FileInput } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
import { insert, update } from '../../../servers/demo'
import { items } from './items'
import useSWR from 'swr'

interface DetailProps {
  updateData?: any
}

const Detail = (props: DetailProps) => {
  const { updateData } = props
  const dispatch = useDispatch<Dispatch>();
  const { demo: { drawerVisible, tableType, queryInfo, isView } } = useSelector((state: RootState) => state);

  const onClose = () => dispatch({ type: "demo/clean" })

  const { mutate } = useSWR([
    (tableType === 'add' && insert) || (tableType === 'edit' && update), { method: "POST", body: queryInfo }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        Notify.success({ title: data.message });
        onClose()
      }
    },
  })

  const dataSource: any = items(queryInfo, { isView })

  return (
    <ProDrawer
      width={800}
      title={tableType === 'add' ? '新增' : tableType === 'edit' ? '编辑' : '查看'}
      visible={drawerVisible}
      onClose={onClose}
      buttons={[
        {
          label: "保存",
          onClick: () => mutate(),
          show: !isView,
          style:{ width: 80 },
          type:"primary"
        },
        {
          label: "取消",
          type: "dark",
          onClick: onClose,
          style:{ width: 80 },
        }
      ]}
    >
      <ProForm
        title="基础信息"
        renderWidgetsList={{ fileInput: FileInput }}
        // 更新表单的值
        onChange={(initial: any, current: any) => updateData({ queryInfo: { ...queryInfo, ...current } })}
        formDatas={dataSource}
      />
    </ProDrawer>
  )
}

export default Detail