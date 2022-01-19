import React from 'react'
import { Fields } from "../";
import {
  Input,
  Checkbox,
  Switch,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  SearchSelect,
} from 'uiw';
import Radio from '../../ProTable/widgets/Radio'
import Select from '../../ProTable/widgets/Select'

const commonWidgetsList = {
  input: Input,
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
  select: Select,
  searchSelect: SearchSelect,
  textarea: Textarea,
  dateInput: DateInput,
  timePicker: TimePicker,
  monthPicker: MonthPicker,
}

/**
 * 
 * @param formDatas 表单项 FormItemsProps[]
 * @param renderWidgetsList 表单组件注册列表 Fields
 * @returns fields  Record<string, FormFieldsProps<{}>>
 */
export function getFormFields(formDatas: any = [], renderWidgetsList: Fields = {}) {
  const widgetsList: Fields = { ...commonWidgetsList, ...renderWidgetsList };
  const fields: Fields = {};
  formDatas.forEach((col: any) => {
    if (col) {
      const { hide = false, widgetProps, key, widget, label, initialValue, ...otherProps } = col;
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