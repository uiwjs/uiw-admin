import { ProForm } from '@uiw-admin/components'
import { Slider } from 'uiw'

const option = [
  { value: 1, label: '苹果' },
  { value: 2, label: '西瓜' },
  { value: 3, label: '香蕉' },
  { value: 4, label: '东北大冻梨' },
  { value: 5, label: '香蕉' },
  { value: 6, label: '葡萄' },
  { value: 6, label: '哈密瓜' },
]

const Page = () => {
  return (
    <ProForm
      // 表单类型
      formType="card"
      title="基本使用(与uiw/form使用保持一致)"
      // 自定义组件
      customWidgetsList={{
        slider: Slider,
      }}
      cardProps={{
        noHover: true,
      }}
      // 是否展示uiw/form提交按钮
      showSaveButton
      // 是否展示uiw/form重置按钮
      showResetButton
      // 提交后验证
      onSubmit={(initial, current) => {
        console.log(111, initial, current)
      }}
      formDatas={[
        {
          label: 'input',
          key: 'input',
          widget: 'input',
          initialValue: '',
          widgetProps: {},
          help: 'input不能为空',
          rules: [{ required: true, message: 'input不能为空' }],
        },
        {
          label: 'textarea',
          key: 'textarea',
          widget: 'textarea',
          span: '24',
          colstyle: { maxWidth: 800 },
        },
        {
          label: 'select',
          key: 'select',
          widget: 'select',
          option: [
            { value: 1, label: '苹果' },
            { value: 2, label: '西瓜' },
            { value: 3, label: '香蕉' },
            { value: 4, label: '东北大冻梨' },
          ],
        },
        {
          label: 'switch',
          key: 'switch',
          widget: 'switch',
        },
        {
          label: 'radio',
          widget: 'radio',
          key: 'radio',
          option: [
            { label: '男', value: 'man' },
            { label: '女', value: 'girl' },
          ],
        },
        {
          label: '多选框',
          widget: 'checkbox',
          key: 'checkbox',
          option: [
            { label: '四川菜', value: 'sichuan' },
            { label: '湖北菜', value: 'hubei' },
          ],
        },
        {
          label: '年月日时分秒',
          key: 'dateInputsecond',
          widget: 'dateInput',
          widgetProps: {
            format: 'YYYY-MM-DD HH:mm:ss',
          },
        },
        {
          label: '年月日',
          key: 'dateInput',
          widget: 'dateInput',
          widgetProps: {
            format: 'YYYY-MM-DD',
          },
        },
        {
          label: '年月',
          key: 'monthPicker',
          widget: 'monthPicker',
          widgetProps: {
            format: 'YYYY-MM',
          },
        },
        {
          label: '时分秒',
          key: 'timePicker',
          widget: 'timePicker',
        },
        {
          label: 'searchSelect',
          key: 'searchSelect',
          widget: 'searchSelect',
          option: option,
          widgetProps: {
            mode: 'multiple',
            allowClear: true,
            showSearch: true,
            style: { width: '100%' },
          },
        },
        {
          label: '评分',
          key: 'rate',
          widget: 'rate',
          span: '8',
        },
        // 只读模式下支持读取React.ReactNode
        {
          label: '自定义组件',
          key: 'slider',
          widget: 'slider',
          readSpan: 2,
          span: '16',
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
            showFileIcon: {
              showPreviewIcon: true,
              showRemoveIcon: true,
            },
          },
        },
      ]}
    />
  )
}

export default Page
