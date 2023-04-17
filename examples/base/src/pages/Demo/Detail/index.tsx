import React from 'react'
import { ProDrawer, ProForm, useForm } from '@uiw-admin/components'
import { Slider /*Notify*/ } from 'uiw'
import { items, items2 } from './items'
import { useDispatch, useSelector, RootState, Dispatch } from '@kkt/pro'

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
    demo: { drawerVisible = false, tableType, queryInfo = {}, isView },
  } = useSelector((state: RootState) => state)

  const form = useForm()
  const form2 = useForm()

  const asyncAwaitFormList: any = (arr = []) => {
    return (
      arr &&
      arr.length > 0 &&
      Promise.all(arr).then((vals) => {
        return vals
      })
    )
  }

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
    // 触发验证获取值
    const values = await asyncAwaitFormList([
      form?.validateFieldsAndGetValue(),
      form2?.validateFieldsAndGetValue(),
    ])
    console.log('values', values)
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
