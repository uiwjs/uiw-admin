import React from 'react';
import {
  ButtonProps,
  DescriptionsProps,
  FormItemProps as UiwFormItemProps,
  // FormProps as UiwFormProps,
  CardProps,
  CollapseProps,
  CollapsePanelProps,
} from 'uiw';
export interface ProFormProps {
  formDatas?: FormItemsProps[];
  onSubmit?: (
    initial: Record<string, any>,
    current: Record<string, any>,
  ) => void;
  onChange?: (
    initial: Record<string, any>,
    current: Record<string, any>,
  ) => void;
  // afterSubmit?: (
  //   initial: Record<string, any>,
  //   current: Record<string, any>,
  // ) => void;
  onSubmitError?: (error: any) => void;
  buttonsContainer?: React.CSSProperties;
  title?: string;
  formType?: 'collapse' | 'card' | 'pure';
  showSaveButton?: boolean;
  showResetButton?: boolean;
  saveButtonProps?: Omit<ButtonProps, 'ref'>;
  resetButtonProps?: Omit<ButtonProps, 'ref'>;
  /** 是否是只读模式模式 */
  readOnly?: boolean;
  /** 只读模式 参考Descriptions参数 */
  readOnlyProps?: DescriptionsProps;
  /** 自定义组件 */
  customWidgetsList?: Fields;
  form?: UseFormProps | any;
  cardProps?: CardProps;
  collapseProps?: CollapseProps;
  collapsePanelProps?: CollapsePanelProps;
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
  option?: OptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
  /** 可以通过指定 24 列中每列的宽度来创建基本网格系统 默认8 */
  span?: string;
  /** 只读模式下包含列的数量 参考Descriptions.Item	*/
  readSpan?: number;
  /** 是否必填 */
  required?: boolean;
  // 验证规则
  rules?: RulesProps[];
}

export interface OptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RulesProps {
  message?: string;
  pattern?: RegExp;
  validator?: (value: any | any[]) => boolean;
  required?: boolean;
}

export type Fields = {
  [key: string]: any;
};

export interface UseFormProps {
  submitvalidate: () => void;
  onSubmit: () => void;
  resetForm?: () => void;
  getFieldValues?: () => void;
  getError: () => void;
  setFields: () => void;
  validateFieldsAndGetValue: () => Promise<any>;
  setFormState: (p: UseFormStateProps) => void;
}

export interface UseFormStateProps {
  onSubmit: () => void;
  getFieldValues: () => void;
  resetForm: () => void;
  getError: () => void;
  setFields: () => void;
}
