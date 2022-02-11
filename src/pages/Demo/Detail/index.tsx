import React from 'react'
import { ProDrawer, ProForm, useForm } from '@uiw-admin/components'
import { Notify, Slider } from 'uiw'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@uiw-admin/models'
import { insert, update } from '../../../servers/demo'
import { items, items2 } from './items'
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
    demo: { drawerVisible, tableType, queryInfo = {}, isView },
  } = useSelector((state: RootState) => state)

  const form = useForm()
  const form2 = useForm()
  const onClose = () => dispatch({ type: 'demo/clean' })

  // eslint-disable-next-line no-unused-vars
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
  const handleSave = async () => {
    // 触发验证
    await form?.submitvalidate()
    await form2?.submitvalidate()

    // 获取错误信息
    const errors = form.formRef.current?.errors || {}
    const errors2 = form2.formRef.current?.errors || {}

    if (errors && Object.keys(errors).length > 0) return
    if (errors2 && Object.keys(errors2).length > 0) return

    // mutate()
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
          onClick: handleSave,
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
        cardProps={{
          noHover: true,
        }}
        formType={isView ? 'pure' : 'card'}
        readOnly={isView}
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
      <div style={{ marginTop: 10 }} />
      <ProForm
        form={form2}
        title="个人信息"
        customWidgetsList={{
          slider: Slider,
        }}
        cardProps={{
          noHover: true,
        }}
        formType={isView ? 'pure' : 'card'}
        readOnly={isView}
        // 更新表单的值
        onChange={(
          initial: Record<string, any>,
          current: Record<string, any>
        ) => {
          updateData({ queryInfo: { ...queryInfo, ...current } })
        }}
        buttonsContainer={{ justifyContent: 'flex-start' }}
        formDatas={items2(queryInfo) as any}
      />
    </ProDrawer>
  )
}

export default Detail
