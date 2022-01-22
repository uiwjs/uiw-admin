import { FormItemsOptionsProps } from '../type'
import { formatter } from 'uiw'
import React from 'react';
import Upload from '../widgets/UploadComponent'

/**
 * 只读模式表单项 value转换
 * @param type  表单项类型
 * @param initialValue 默认值
 * @param option 表单项option
 * @returns 
 */


// 目前只处理以下类型的initialValue,其余默认为传入的initialValue
export function getReadValue(type: string | any, initialValue: any | any[], option: FormItemsOptionsProps[], widgetProps: any) {
  let content: string | number | React.ReactNode = ''
  if (type === 'radio' || type === 'searchSelect' || type === 'select') {
    let value = option.filter((itm: FormItemsOptionsProps) => itm.value === initialValue) || [];
    if (value.length > 0) content = value[0].label;
  } else if (type === 'checkbox') {
    for (const itm of option as any) {
      if (initialValue.includes(itm.value)) content += `${itm.label}`;
    }
  } else if (type === 'switch') {
    content = initialValue ? '是' : '否'
  } else if (type === 'timePicker') {
    content = initialValue && formatter('HH:mm:ss', new Date(initialValue))
  } else if (type === 'monthPicker') {
    content = initialValue && formatter('YYYY-MM', new Date(initialValue))
  } else if (type === 'dateInput') {
    content = initialValue && formatter(widgetProps?.format || 'YYYY-MM-DD', new Date(initialValue))
  } else if (type === 'upload') {
    const uploadProps = {
      readOnly: true,
      fileList: initialValue,
      value: initialValue,
      onChange: () => { }
    }
    content = <Upload {...uploadProps} />
  } else {
    // initialValue 支持 string number 或者 自定义
    content = (
      typeof initialValue === 'string' ||
      typeof initialValue === 'number' ||
      React.isValidElement(initialValue)
    ) ? initialValue : ''
  }
  return content
}