import React from 'react';
import {
  ButtonProps,
  DescriptionsProps,
  FormItemProps as UiwFormItemProps,
  FormProps as UiwFormProps,
} from 'uiw';

export type Fields = {
  [key: string]: any;
};
export interface FormItemsOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormItemsProps
  extends Omit<UiwFormItemProps<any>, 'initialValue' | 'validator'> {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  key: string;
  /** 表单元素类型 */
  widget: string;
  /** 表单元素值，可以是默认值 */
  initialValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  option?: FormItemsOptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
  /** 可以通过指定 24 列中每列的宽度来创建基本网格系统 默认8 */
  span?: string;
  /** 只读模式下包含列的数量 参考Descriptions.Item	*/
  readSpan?: number;
  /** 是否必填 */
  required?: boolean;
}

export interface ProFormProps
  extends Omit<
    UiwFormProps<any>,
    'fields' | 'children' | 'onSubmit' | 'onChange'
  > {
  formDatas?: FormItemsProps[];
  onSubmit?: (
    initial: Record<string, any>,
    current: Record<string, any>,
  ) => void;
  onChange?: (
    initial: Record<string, any>,
    current: Record<string, any>,
  ) => void;
  submitRef?: any;
  buttonsContainer?: React.CSSProperties;
  title?: string;
  formType?: 'collapse' | 'card' | 'pure';
  showSaveButton?: boolean;
  showResetButton?: boolean;
  saveButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps | any;
  /** 是否是只读模式模式 */
  readOnly?: boolean;
  /** 只读模式 参考Descriptions参数 */
  readOnlyProps?: DescriptionsProps;
  /** 自定义组件 */
  customWidgetsList?: Fields;
}
