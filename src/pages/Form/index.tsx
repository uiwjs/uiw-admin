import { useState } from 'react'
import { Button, Slider } from 'uiw'
import { ProForm, useForm } from '@uiw-admin/components'
import { items, items2 } from './items'
import { KktproKeys } from '@kkt/pro'
import './index.less'

const asyncAwaitFormList: any = (arr = []) => {
  return (
    arr &&
    arr.length > 0 &&
    Promise.all(arr).then((vals) => {
      return vals
    })
  )
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

const Page = () => {
  const [isView] = useState<boolean>(false)
  const [queryInfo, setQueryInfo] = useState<KktproKeys>({})
  const [option] = useState<KktproKeys[]>(selectOption)
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm()
  const form2 = useForm()

  const onChange = (current: KktproKeys) => {
    const newData: KktproKeys = {
      ...queryInfo,
      ...current,
    }
    setQueryInfo(newData)
  }

  // 模拟搜索
  const handleSearch = (type: 'searchSelect') => {
    if (type === 'searchSelect') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  // 保存
  const handleSave = async () => {
    // 触发验证获取值
    const values = await asyncAwaitFormList([
      form?.validateFieldsAndGetValue(),
      form2?.validateFieldsAndGetValue(),
    ])
    console.log('values', values)
  }

  // 重置
  const handleReset = async () => {
    form?.resetForm?.()
    form2?.resetForm?.()
  }

  return (
    <div style={{ position: 'relative' }}>
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
        onChange={(initial, current) => onChange(current)}
        buttonsContainer={{ justifyContent: 'flex-start' }}
        formDatas={
          items(queryInfo, {
            isView,
            searchSelect: {
              onSearch: () => handleSearch('searchSelect'),
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
        onChange={(initial, current) => onChange(current)}
        buttonsContainer={{ justifyContent: 'flex-start' }}
        formDatas={items2(queryInfo) as any}
      />
      <div className="fiexd-btns">
        <Button
          className="btn"
          type="primary"
          size="large"
          onClick={handleSave}>
          提交
        </Button>
        <Button className="btn" size="large" onClick={handleReset}>
          重置
        </Button>
      </div>
    </div>
  )
}

export default Page
