export const items = (queryInfo: any, { isView }: { isView: boolean }) => [
  {
    label: '姓氏',
    key: 'firstName',
    widget: 'input',
    initialValue: queryInfo?.firstName,
    widgetProps: { disabled: isView },
    span: '24',
    required:true
  },
  {
    label: '名字',
    key: 'lastName',
    widget: 'input',
    initialValue: queryInfo?.lastName,
    widgetProps: { disabled: isView },
    required:true
  },
  {
    label: '邮箱',
    key: 'email',
    widget: 'input',
    initialValue: queryInfo?.email,
    widgetProps: { disabled: isView },
    required:true
  },
  {
    label: '水果',
    key: 'select',
    widget: 'select',
    option: [
      { value: 1, label: '苹果' },
      { value: 2, label: '西瓜' },
      { value: 3, label: '香蕉' },
      { value: 4, label: '东北大冻梨' },
    ],
    initialValue: queryInfo?.select,
    widgetProps: { disabled: isView },
    required:true
  },
  {
    label: '自定义组件',
    key: 'id1',
    widget: 'slider',
  },
];
