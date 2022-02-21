import { OptionsProps, RulesProps } from '../type';
import { formatter, Rate } from 'uiw';
import React from 'react';
import Upload from '../widgets/Upload';

/**
 * 只读模式表单项 value转换
 * @param type  表单项类型
 * @param initialValue 默认值
 * @param option 表单项option
 * @returns
 */

// 目前只处理以下类型的initialValue,其余默认为传入的initialValue
export function getReadValue(
  type: string | any,
  initialValue: any | any[],
  option: OptionsProps[],
  widgetProps: any,
) {
  let content: string | number | React.ReactNode = '';
  if (
    type === 'radio' ||
    (type === 'searchSelect' && widgetProps?.mode !== 'multiple') ||
    type === 'select'
  ) {
    let value =
      option.filter((itm: OptionsProps) => itm.value === initialValue) || [];
    if (value.length > 0) content = value[0].label;
  } else if (type === 'checkbox') {
    for (const itm of option as any) {
      if (initialValue.includes(itm.value)) content += `${itm.label}`;
    }
  } else if (type === 'switch') {
    content = initialValue ? '是' : '否';
  } else if (type === 'timePicker') {
    content = initialValue && formatter('HH:mm:ss', new Date(initialValue));
  } else if (type === 'monthPicker') {
    content = initialValue && formatter('YYYY-MM', new Date(initialValue));
  } else if (type === 'dateInput') {
    content =
      initialValue &&
      formatter(widgetProps?.format || 'YYYY-MM-DD', new Date(initialValue));
  } else if (type === 'upload') {
    const uploadProps = {
      value: initialValue,
      uploadType: widgetProps?.uploadType,
      readonly: true,
      showFileIcon: {
        showPreviewIcon: true,
        showRemoveIcon: false,
      },
      ...widgetProps,
    };
    content = <Upload {...uploadProps} />;
  } else if (type === 'selectMultiple') {
    const contentList =
      (initialValue &&
        initialValue.length > 0 &&
        initialValue.map((item: OptionsProps) => item.label)) ||
      [];
    content = contentList.join(';');
  } else if (type === 'searchSelect' && widgetProps?.mode === 'multiple') {
    for (const itm of option as any) {
      if (initialValue.includes(itm.value)) content += `${itm.label}`;
    }
  } else if (type === 'rate') {
    content = <Rate value={initialValue} readOnly />;
  } else {
    // initialValue 支持 string number 或者 自定义
    content =
      typeof initialValue === 'string' ||
      typeof initialValue === 'number' ||
      React.isValidElement(initialValue)
        ? initialValue
        : '';
  }
  return content;
}

interface FromValidateProps {
  key: string;
  rules?: RulesProps[];
  value?: any[] | any;
}

//判断是否是arrary
export function isArray(obj: any | any[]) {
  return Object.prototype.toString.call(obj) == '[object Array]';
}

//判断是否object
export function isObject(obj: any | any[]) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}

//判断是否是string 或 number
export function isNumberOrString(obj: any) {
  return typeof obj === 'string' || typeof obj === 'number';
}
// 判断对象是否为空
export function isObjectEmpty(obj: any) {
  for (let _key in obj) {
    return false;
  }
  return true;
}

/**
 * form表单提交验证
 * @param rules FromValidateProps[]
 * @returns { [key: string]: string }
 */
export const fromValidate = (rules: FromValidateProps[] = []) => {
  let errorObj: { [key: string]: string } = {};
  rules.forEach(({ rules, key, value }) => {
    if (rules && rules.length > 0) {
      rules.forEach(
        ({ validator = null, message = '', required, pattern = null }) => {
          // 必填 && object && 为空
          if (required && isObject(value) && (isObjectEmpty(value) || !value)) {
            errorObj[key] = message;
            // 必填 && arrary && 为空
          } else if (
            required &&
            isArray(value) &&
            (value.length === 0 || !value)
          ) {
            errorObj[key] = message;
            // 必填 && string或number && 为空
          } else if (required && isNumberOrString(value) && !value) {
            errorObj[key] = message;
            // 自定义验证规则
          } else if (validator && !validator(value)) {
            errorObj[key] = message;
            // 正则判断
          } else if (
            isNumberOrString(value) &&
            pattern &&
            !pattern.test(value)
          ) {
            errorObj[key] = message;
          }
        },
      );
    }
  });
  return errorObj;
};
