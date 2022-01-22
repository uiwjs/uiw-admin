import React from 'react';
import { Fields } from '../type';
import {
  Input,
  Switch,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  SearchSelect,
} from 'uiw';
import Radio from '../../ProTable/widgets/Radio';
import Select from '../../ProTable/widgets/Select';
import CheckBox from './CheckBox';
import UploadImage from './UploadImage';
/**  @@ 指向 /src/.uiw 目录 自定义表单组件列表 */
// @ts-ignore
import { customWidgetsList } from '@/widgets';

export const commonWidgetsList: Fields = {
  input: Input,
  radio: Radio,
  checkbox: CheckBox,
  switch: Switch,
  select: Select,
  searchSelect: SearchSelect,
  textarea: Textarea,
  dateInput: DateInput,
  timePicker: TimePicker,
  monthPicker: MonthPicker,
  uploadImage:UploadImage,
  ...customWidgetsList,
};

/**
 *
 * @param formDatas 表单项 FormItemsProps[]
 * @returns fields  Record<string, FormFieldsProps<{}>>
 */
export function getFormFields(formDatas: any = []) {
  const widgetsList: Fields = commonWidgetsList;
  const fields: Fields = {};
  formDatas.forEach((col: any) => {
    if (col) {
      const {
        hide = false,
        widgetProps,
        key,
        widget,
        label,
        initialValue,
        ...otherProps
      } = col;
      if (!hide) {
        const name = key;
        const Widget = widgetsList[widget];
        fields[name] = {
          label: label,
          children: <Widget {...widgetProps} />,
          ...otherProps,
          initialValue,
        };
      }
    }
  });
  return fields;
}
