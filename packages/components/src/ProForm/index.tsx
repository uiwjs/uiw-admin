import React, { useMemo } from 'react'
import {
  Input,
  Checkbox,
  Switch,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  SearchSelect,
  Collapse,
  Card
} from 'uiw';
import Radio from '../ProTable/widgets/Radio'
import Select from '../ProTable/widgets/Select'
import FormDom from './formdom'
import './style/form-item.less';

export type Fields = {
  [key: string]: any;
};

export interface BtnProps {
  label?: string;
  btnType: 'submit' | 'reset' | 'other';
  onPress?: () => void;
  show?: boolean;
  size?: 'large' | 'default' | 'small';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
  loading?: boolean;
  width?: number
}

export interface FormItemsOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormItemsProps {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  key: string;
  /** 表单元素类型 */
  widget: 'input' | 'input'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'select'
  | 'textarea'
  | 'dateInput'
  | 'timePicker'
  | 'searchSelect'
  | 'monthPicker';
  /** 表单元素值，可以是默认值 */
  initialValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  option?: FormItemsOptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
}

export interface ProFormProps {
  formDatas?: FormItemsProps[];
  span?: number;
  onSubmit?: (initial: Record<string, any>, current: Record<string, any>) => void;
  onChange?: (initial: Record<string, any>, current: Record<string, any>) => void;
  onSubmitError?: (error: any) => void;
  btns?: BtnProps[]
  title?: any;
  formType?: 'collapse' | 'card';
}

const widgetsList: any = {
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
};

function ProForm(props: ProFormProps) {

  const { formDatas = [], title = "", formType = 'card' } = props

  // 获取表单配置
  const getFormFields = useMemo(() => {
    const fields: Fields = {};
    formDatas.forEach((col) => {
      if (col) {
        const { widgetProps, key, widget, label, initialValue, ...otherProps } =
          col;
        const name = key;
        const Widget = widgetsList[widget];
        fields[name] = {
          label: label,
          children: <Widget {...widgetProps} />,
          ...otherProps,
          initialValue,
        };
      }
    });
    return fields;
  }, [formDatas]);

  // 判断form表单类型
  const renderForm = useMemo(() => {
    const formDomProps = { ...props, getFormFields }
    if (formType === 'collapse') {
      return (
        <Collapse activeKey={['1']}>
          <Collapse.Panel header={title} key={'1'}>
            <FormDom {...formDomProps} />
          </Collapse.Panel>
        </Collapse>
      )
    }
    if (formType === 'card') {
      return (
        <Card title={title}><FormDom {...formDomProps} /></Card>
      )
    }
    return (
      <React.Fragment>
        {title && <h3>{title}</h3>}
        <FormDom {...formDomProps} />
      </React.Fragment>
    )
  }, [formType, formDatas, title])

  return (
    <div style={{ flex: 1 }}>
      {renderForm}
    </div>
  )
}

export default ProForm