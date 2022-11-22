import React from 'react'
import { ProDrawer, ProForm, useForm } from '@uiw-admin/components'
import { Slider /*Notify*/ } from 'uiw'
import { RootState, Dispatch } from '@uiw-admin/models'
import { items, items2 } from './items'
import { useDispatch, useSelector } from '@uiw-admin/router-control'

interface DetailProps {
  updateData?: any
  onSearch?: () => void
}

const selectOption = [
  { value: 1, label: '苹果' },
  { value: 2, label: '西瓜' },
  { value: 3, label: '香蕉' },
  { value: 4, label: '东北大冻梨' },
  { value: 5, label: '香蕉' },
  { value: 6, label: '葡萄' },
  { value: 6, label: '哈密瓜' },
]

const Detail = ({ updateData }: DetailProps) => {
  const dispatch = useDispatch<Dispatch>()
  const [option] = React.useState<any>(selectOption)
  const [loading, setLoading] = React.useState(false)

  const {
    demo: { drawerVisible, tableType, queryInfo = {}, isView },
  } = useSelector((state: RootState) => state)

  const form = useForm()
  const form2 = useForm()

  const onClose = () => dispatch({ type: 'demo/clean' })

  // 模拟搜索
  const handleSearch = (type: 'searchSelect') => {
    if (type === 'searchSelect') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  const handleSave = async () => {
    // 触发验证
    await form.submitvalidate()
    await form2.submitvalidate()

    // 获取错误信息
    const errors = form.getError()
    const errors2 = form2.getError()

    if (errors && Object.keys(errors).length > 0) return
    if (errors2 && Object.keys(errors2).length > 0) return
    // 调用接口
    const datas1 = form.getFieldValues() || {}
    const datas2 = form.getFieldValues() || {}
    console.log('obj', { ...datas1, ...datas2 })
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
          onClick: onClose,
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
          style: { marginBottom: 10 },
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
            searchSelect: {
              onSearch: handleSearch.bind(this, 'searchSelect'),
              loading: loading,
              option: option,
            },
          }) as any
        }
      />
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
