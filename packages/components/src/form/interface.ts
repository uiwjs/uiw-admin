import React from 'react';
import {
  FormProps,
  FormFieldsProps,
  ColProps,
  ButtonProps,
  FormChildrenProps,
} from 'uiw';

export type Rule =
  | ((value: any) => string | undefined)
  | Record<string, unknown>;

export interface FormFieldsNewProps<T = any>
  extends Omit<FormFieldsProps<T>, 'validator'> {
  rules?: Rule[];
  colProps?: ColProps;
}

export interface ComFormProps<T = any> extends FormProps<T> {
  fields?: Record<string, FormFieldsNewProps<T>>;
}

export interface FormFieldsNewProps<T = any>
  extends Omit<FormFieldsProps<T>, 'validator'> {
  rules?: Rule[];
}

export interface ComFormProps<T = any> extends FormProps<T> {
  fields?: Record<string, FormFieldsNewProps<T>>;
  colProps?: ColProps;
  buttonGroup?: (
    | Omit<ButtonProps, 'ref'>
    | ((childProps: FormChildrenProps) => Omit<ButtonProps, 'ref'>)
  )[];
  buttonGroupClassName?: string;
  buttonGroupStyle?: React.CSSProperties;

  /** 老的API **/
  showSaveButton: boolean;
  showResetButton: boolean;
  saveButtonProps: Omit<ButtonProps, 'ref'>;
  resetButtonProps: Omit<ButtonProps, 'ref'>;
}
