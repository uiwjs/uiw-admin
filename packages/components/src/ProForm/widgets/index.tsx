import { Fields, FormItemsProps } from '../type';
import {
  Input,
  InputNumber,
  Switch,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  SearchSelect,
  Rate,
} from 'uiw';
import Radio from '../../ProTable/widgets/Radio';
import Select from '../../ProTable/widgets/Select';
import CheckBox from './CheckBox';
import SelectMultiple from './SelectMultiple';
import Upload from './Upload';
import SearchTree from './SearchTree';
import { isRequired } from '../utils';

/**
 *
 * @param readOnly 是否是只读模式 boolean
 * @param formDatas 表单项 FormItemsProps[]
 * @returns fields  Record<string, FormFieldsProps<{}>>
 */
export function getFormFields(
  readOnly?: boolean,
  formDatas: FormItemsProps[] = [],
  customWidgetsList: Fields = {},
) {
  const widgetsList: Fields = {
    input: Input,
    inputNumber: InputNumber,
    radio: Radio,
    checkbox: CheckBox,
    switch: Switch,
    select: Select,
    searchSelect: SearchSelect,
    selectMultiple: SelectMultiple,
    textarea: Textarea,
    dateInput: DateInput,
    timePicker: TimePicker,
    monthPicker: MonthPicker,
    upload: Upload,
    rate: Rate,
    searchTree: SearchTree,
    ...customWidgetsList,
  };
  const fields: Fields = {};
  formDatas.forEach((col) => {
    if (!readOnly) delete col.readSpan;
    if (col) {
      const {
        hide = false,
        widgetProps,
        key,
        widget,
        label,
        initialValue,
        required,
        ...otherProps
      } = col;
      if (!hide) {
        const name = key;
        const Widget = widgetsList[widget];
        const is = isRequired(otherProps?.rules || []);
        fields[name] = {
          label: is ? <span className="w-proform-label">{label}</span> : label,
          children: <Widget {...widgetProps} />,
          ...otherProps,
          initialValue,
        };
      }
    }
  });
  return fields;
}
