import React from 'react'
import { ProDrawer, ProForm, useForm } from '@uiw-admin/components'
import { Notify, Slider } from 'uiw'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@uiw-admin/models'
import { insert, update } from '../../../servers/demo'
import { items } from './items'
import useSWR from 'swr'

interface DetailProps {
  updateData?: any
  onSearch?: () => void
}

const Detail = ({ updateData, onSearch }: DetailProps) => {
  const dispatch = useDispatch<Dispatch>()
  const [option, setOption] = React.useState<any>([])
  const [loading, setLoading] = React.useState(false)
  const {
    demo: { drawerVisible, tableType, queryInfo, isView },
  } = useSelector((state: RootState) => state)

  const form = useForm()
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
          onSearch?.()
        }
      },
    }
  )

  // 模拟搜索
  const handleSearch = (type: 'selectMultiple') => {
    if (type === 'selectMultiple') {
      setLoading(true)
      setTimeout(() => {
        setOption([
          { value: 1, label: '苹果' },
          { value: 2, label: '西瓜' },
          { value: 3, label: '香蕉' },
          { value: 4, label: '东北大冻梨' },
          { value: 5, label: '香蕉' },
          { value: 6, label: '葡萄' },
          { value: 6, label: '哈密瓜' },
        ])
        setLoading(false)
      }, 2000)
    }
  }

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
          onClick: () => form.submitvalidate(),
        },
        {
          label: '取消',
          type: 'primary',
          style: { width: 80 },
          path: '/demo/cancel',
        },
      ]}>
      <ProForm
        form={form}
        title="基础信息"
        customWidgetsList={{
          slider: Slider,
        }}
        formType={isView ? 'pure' : 'card'}
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
            selectMultiple: {
              onSearch: handleSearch.bind(this, 'selectMultiple'),
              loading: loading,
              option: option,
            },
          }) as any
        }
      />
    </ProDrawer>
  )
}

export default Detail