import { FormItemsOptionsProps } from '../type'
/**
 * 只读模式表单项 value转换
 * @param type  表单项类型
 * @param initialValue 默认值
 * @param option 表单项option
 * @returns 
 */
export const getReadValue = (type: string | any, initialValue: any | any[], option: FormItemsOptionsProps[]) => {
  let content: string | boolean = ''
  if (type === 'radio' || type === 'searchSelect' || type === 'select') {
    let value = option.filter((itm: FormItemsOptionsProps) => itm.value === initialValue);
    content = value.length > 0 && value[0].label;
  } else if (type === 'checkbox') {
    for (const itm of option as any) {
      if (initialValue.includes(itm.value)) {
        content += `${itm.label} `;
      }
    }
  }else if (type === 'switch') {
    console.log('initialValue', initialValue)
    content = initialValue ? '是' : '否'
  }else if (type === 'timePicker') {
    content = ''
  }else if (type === 'monthPicker') {
    content = ''
  }else {
    content = initialValue || ''
  }
  return content
}