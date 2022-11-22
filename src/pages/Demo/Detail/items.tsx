export const items = (queryInfo: any, attr: any) => [
  {
    label: 'searchTree',
    key: 'searchTree',
    widget: 'searchTree',
    span: '24',
    readSpan: 3,
    widgetProps: {
      allowClear: true,
      // onSearch:(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue),
      // onChange:(selectedAll, selectd, isChecked)=>console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)
    },
    initialValue: [
      { key: '1-0-1', label: '黄浦区' },
      { key: '1-1-0', label: '半淞园路街道' },
      { key: '1-2-0', label: '南京东路街道' },
      { key: '1-3-0', label: '外滩街道' },
      { key: '1-0-3', label: '徐汇区' },
    ],
    option: [
      {
        label: '上海市',
        key: '1-0-0',
        children: [
          { label: '黄浦区', key: '1-0-1' },
          { label: '卢湾区', key: '1-0-2' },
          {
            label: '徐汇区',
            key: '1-0-3',
            children: [
              { label: '半淞园路街道', key: '1-1-0' },
              { label: '南京东路街道', key: '1-2-0' },
              { label: '外滩街道', key: '1-3-0' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '司机手机号',
    key: 'input',
    widget: 'input',
    initialValue: queryInfo?.input,
    widgetProps: {},
    rules: [
      { required: true, message: '请输入' },
      { pattern: new RegExp(/[1][3][0-9]{9}$/), message: '请输入正确手机号' },
    ],
  },
  {
    label: '多行文本输入框',
    key: 'textarea',
    widget: 'textarea',
    initialValue: queryInfo?.textarea,
    rules: [
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
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '开关',
    key: 'switch',
    widget: 'switch',
    initialValue: queryInfo?.switch,
    rules: [{ required: true, message: '请选择' }],
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
    rules: [{ required: true, message: '请选择' }],
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
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月日时分秒',
    key: 'dateInputsecond',
    widget: 'dateInput',
    widgetProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    initialValue: queryInfo?.dateInputsecond,
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月日',
    key: 'dateInput',
    widget: 'dateInput',
    widgetProps: {
      format: 'YYYY-MM-DD',
    },
    initialValue: queryInfo.dateInput,
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '年月',
    key: 'monthPicker',
    widget: 'monthPicker',
    initialValue: queryInfo?.monthPicker,
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '时分秒',
    key: 'timePicker',
    widget: 'timePicker',
    initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker),
    rules: [{ required: true, message: '请选择' }],
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
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: 'searchSelect',
    key: 'searchSelect',
    widget: 'searchSelect',
    option: attr.searchSelect.option,
    widgetProps: {
      mode: 'multiple',
      onSearch: attr.searchSelect.onSearch,
      onChange: (value: any) => console.log('changevalue', value),
      onSelect: (value: any) => console.log('selectvalue', value),
      loading: attr.searchSelect.loading,
      allowClear: true,
      showSearch: true,
      style: { width: '100%' },
    },
    initialValue: [1, 2, 3],
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: 'searchSelect2',
    key: 'searchSelect2',
    widget: 'searchSelect',
    option: attr.searchSelect.option,
    widgetProps: {
      labelInValue: true,
      allowClear: true,
      showSearch: true,
    },
    // initialValue: [1, 2, 3],
    rules: [{ required: true, message: '请选择' }],
  },
  {
    label: '评分',
    key: 'rate',
    widget: 'rate',
    readSpan: 2,
    initialValue: queryInfo?.rate,
    rules: [{ required: true, message: '请选择' }],
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
        showRemoveIcon: !attr.isView,
      },
    },
    initialValue: queryInfo?.upload,
    rules: [{ required: true, message: '请上传' }],
  },
]

export const items2 = (queryInfo: any) => [
  {
    label: '手机号',
    key: 'input2',
    widget: 'input',
    initialValue: queryInfo?.input2,
    widgetProps: {},
    rules: [
      { pattern: new RegExp(/[1][3][0-9]{9}$/), message: '请输入正确手机号' },
    ],
  },
]
