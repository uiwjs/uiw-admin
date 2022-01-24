import React from 'react'
import { formatter } from 'uiw'
export const items = (queryInfo: any, attr: any) => [
  {
    label: '输入框',
    key: 'input',
    widget: 'input',
    initialValue: queryInfo?.input,
    widgetProps: {},
    required: true
  },
  {
    label: '多行文本输入框',
    key: 'textarea',
    widget: 'textarea',
    initialValue: queryInfo?.textarea
  },
  {
    label: '选择器',
    key: 'select',
    widget: 'select',
    option: [
      { value: 1, label: '苹果' },
      { value: 2, label: '西瓜' },
      { value: 3, label: '香蕉' },
      { value: 4, label: '东北大冻梨' }
    ],
    initialValue: queryInfo?.select
  },
  {
    label: '开关',
    key: 'switch',
    widget: 'switch',
    initialValue: queryInfo?.switch
  },
  {
    label: '单选框',
    widget: 'radio',
    key: 'radio',
    option: [
      { label: '男', value: 'man' },
      { label: '女', value: 'girl' }
    ],
    initialValue: queryInfo?.radio
  },
  {
    label: '多选框',
    widget: 'checkbox',
    key: 'checkbox',
    option: [
      { label: '四川菜', value: 'sichuan' },
      { label: '湖北菜', value: 'hubei' }
    ],
    initialValue: queryInfo?.checkbox
  },
  {
    label: '年月日时分秒',
    key: 'dateInputsecond',
    widget: 'dateInput',
    widgetProps: {
      format: 'YYYY-MM-DD HH:mm:ss'
    },
    initialValue: queryInfo.dateInputsecond && formatter('YYYY-MM-DD HH:mm:ss', new Date(queryInfo.dateInputsecond))
  },
  {
    label: '年月日',
    key: 'dateInput',
    widget: 'dateInput',
    initialValue: queryInfo.dateInput && formatter('YYYY-MM-DD', new Date(queryInfo.dateInput))
  },
  {
    label: '年月',
    key: 'monthPicker',
    widget: 'monthPicker',
    initialValue: queryInfo.monthPicker && formatter('YYYY-MM', new Date(queryInfo.monthPicker))
  },
  {
    label: '时分秒',
    key: 'timePicker',
    widget: 'timePicker',
    initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker)
  },
  // 只读模式下支持读取React.ReactNode
  {
    label: '自定义组件',
    key: 'slider',
    widget: 'slider',
    readSpan: 2,
    initialValue: attr.isView ? <div>{queryInfo?.slider}</div> : queryInfo?.slider
  },
  {
    label: '上传组件',
    key: 'upload',
    widget: 'upload',
    span: '24',
    readSpan: 3,
    widgetProps: {
      accept: ['jpg', 'gif', 'png', 'pdf', 'xlsx'],
      onUploadChange: attr.upload.onUploadChange,
      fileList: queryInfo?.upload,
      maxNumber: 3
    },
    initialValue: queryInfo?.upload
  }
]
