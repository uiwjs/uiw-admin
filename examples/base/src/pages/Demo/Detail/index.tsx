import React, { useRef } from 'react'
import { ProDrawer, ProForm } from '@uiw-admin/components'
import { Notify, Slider } from 'uiw'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@uiw-admin/models'
import { insert, update } from '../../../servers/demo'
import { items } from './items'
import useSWR from 'swr'

interface DetailProps {
  updateData?: any
}

const Detail = ({ updateData }: DetailProps) => {
  const baseRef = useRef<any>()
  const dispatch = useDispatch<Dispatch>()
  const {
    demo: { drawerVisible, tableType, queryInfo, isView },
  } = useSelector((state: RootState) => state)

  const onClose = () => dispatch({ type: 'demo/clean' })

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
          Notify.success({ title: data.message })
          onClose()
        }
      },
    }
  )

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
          label: '保存',
          type: 'danger',
          style: { width: 80 },
          show: !isView,
          onClick: () => baseRef?.current?.click(),
        },
      ]}>
      <ProForm
        title="基础信息"
        customWidgetsList={{
          slider: Slider,
        }}
        formType={isView ? 'pure' : 'card'}
        submitRef={baseRef}
        readOnly={isView}
        onSubmit={(
          initial: Record<string, any>,
          current: Record<string, any>
        ) => {
          const errorObj: any = {}
          if (!current?.input) {
            errorObj.input = '名字不能为空'
          }
          if (Object.keys(errorObj).length > 0) {
            const err: any = new Error()
            err.filed = errorObj
            Notify.error({ title: '提交失败！' })
            throw err
          }
          mutate()
        }}
        // 更新表单的值
        onChange={(
          initial: Record<string, any>,
          current: Record<string, any>
        ) => updateData({ queryInfo: { ...queryInfo, ...current } })}
        buttonsContainer={{ justifyContent: 'flex-start' }}
        formDatas={
          items(queryInfo, {
            isView,
            upload: {
              onUploadChange: (fileList: any) =>
                updateData({ queryInfo: { ...queryInfo, upload: fileList } }),
            },
          }) as any
        }
      />
    </ProDrawer>
  )
}

export default Detail
