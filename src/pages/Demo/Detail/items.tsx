import React from 'react'
import { formatter } from 'uiw'
export const items = (queryInfo: any, attr: any) => [
  {
    label: '司机手机号',
    key: 'input',
    widget: 'input',
    initialValue: queryInfo?.input,
    widgetProps: {},
    rulers: [
      { required: true, message: '请输入' },
      { pattern: new RegExp(/[1][3][0-9]{9}$/), message: '请输入正确手机号' },
    ],
  },
  {
    label: '多行文本输入框',
    key: 'textarea',
    widget: 'textarea',
    initialValue: queryInfo?.textarea,
    rulers: [
      {
        validator: (value: any | any[] = '') => {
          if (!value) return false
          return true
        },
        message: '请输入值',
      },
    ],
  },
  {
    label: '选择器',
    key: 'select',
    widget: 'select',
    option: [
      { value: 1, label: '苹果' },
      { value: 2, label: '西瓜' },
      { value: 3, label: '香蕉' },
      { value: 4, label: '东北大冻梨' },
    ],
    initialValue: queryInfo?.select,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '开关',
    key: 'switch',
    widget: 'switch',
    initialValue: queryInfo?.switch,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '单选框',
    widget: 'radio',
    key: 'radio',
    option: [
      { label: '男', value: 'man' },
      { label: '女', value: 'girl' },
    ],
    initialValue: queryInfo?.radio,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '多选框',
    widget: 'checkbox',
    key: 'checkbox',
    option: [
      { label: '四川菜', value: 'sichuan' },
      { label: '湖北菜', value: 'hubei' },
    ],
    initialValue: queryInfo?.checkbox,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月日时分秒',
    key: 'dateInputsecond',
    widget: 'dateInput',
    widgetProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    initialValue:
      queryInfo.dateInputsecond &&
      formatter('YYYY-MM-DD HH:mm:ss', new Date(queryInfo.dateInputsecond)),
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月日',
    key: 'dateInput',
    widget: 'dateInput',
    initialValue:
      queryInfo.dateInput &&
      formatter('YYYY-MM-DD', new Date(queryInfo.dateInput)),
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月',
    key: 'monthPicker',
    widget: 'monthPicker',
    initialValue:
      queryInfo.monthPicker &&
      formatter('YYYY-MM', new Date(queryInfo.monthPicker)),
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '时分秒',
    key: 'timePicker',
    widget: 'timePicker',
    initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker),
    rulers: [{ required: true, message: '请选择' }],
  },
  // 只读模式下支持读取React.ReactNode
  {
    label: '自定义组件',
    key: 'slider',
    widget: 'slider',
    readSpan: 2,
    initialValue: attr.isView ? (
      <div>{queryInfo?.slider}</div>
    ) : (
      queryInfo?.slider
    ),
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: 'selectMultiple',
    key: 'selectMultiple',
    widget: 'selectMultiple',
    option: attr.selectMultiple.option,
    widgetProps: {
      onSearch: attr.selectMultiple.onSearch,
      onClear: (value: any) => console.log('clearvalue', value),
      onChange: (value: any) => console.log('changevalue', value),
      onSelect: (value: any) => console.log('selectvalue', value),
      loading: attr.selectMultiple.loading,
      allowClear: true,
      showSearch: true,
    },
    initialValue: queryInfo?.selectMultiple,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '评分',
    key: 'rate',
    widget: 'rate',
    readSpan: 2,
    initialValue: queryInfo?.rate,
    rulers: [{ required: true, message: '请选择' }],
  },
  {
    label: '上传组件',
    key: 'upload',
    widget: 'upload',
    span: '24',
    readSpan: 3,
    widgetProps: {
      uploadType: 'card',
      multiple: true,
      maxNumber: 2,
    },
    initialValue: queryInfo?.upload,
    rulers: [{ required: true, message: '请上传' }],
  },
]

export const items2 = (queryInfo: any) => [
  {
    label: '手机号',
    key: 'input2',
    widget: 'input',
    initialValue: queryInfo?.input2,
    widgetProps: {},
    rulers: [
      { pattern: new RegExp(/[1][3][0-9]{9}$/), message: '请输入正确手机号' },
    ],
  },
]
