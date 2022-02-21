import React from 'react';
import { Schema } from '../interface';

export interface CoreProps {
  id?: string;
  _item?: any;
  children?: any[];
  dataIndex?: any[];
  displayType?: string;
  readType?: string;
  hideTitle?: boolean;
  hideValidation?: boolean;
  debugCss?: boolean | string;
  [key: string]: any;
}

export interface ExtendedWidgetProps {
  schema: Schema;
  dataPath: string;
  formData: object;
  value: any;
  onChange: (value: any) => void;
  children: any[];
  onItemChange: (dataPath: string, value: any) => void;
  getValue: (path: string) => void;
  title?: React.ReactNode | string | undefined;
  message?: string;
  dataIndex?: any[];
  dependValues?: any[];
  readOnly?: boolean;
  disabled?: boolean;
}

export interface ErrorMessageProps {
  message: string;
  schema: Schema;
  softHidden: boolean;
  hardHidden: boolean;
}

export interface RenderObjectProps extends CoreProps {}

export interface CoreRenderProps extends CoreProps {
  item: any;
  dataPath: any;
  hideValidation?: boolean;
  schema: any;
  _value: any;
  dependValues?: any[];
  displayType: any;
  column: any;
  labelWidth?: number;
  readOnly: boolean;
  errorFields: any[];
  effectiveLabelWidth: number;
  /** 阅读类型 */
  readType?: string;
  flatten: object;
}

export interface RenderListProps {
  parentId: string;
  schema?: Schema;
  dataIndex?: any[];
  children?: any[];
  errorFields?: any[];
  displayType?: string;
  hideTitle?: boolean;
}

export interface CardListProps {
  displayList: any[];
  listData: any[];
  changeList: any[];
  schema: Schema;
  deleteItem: (index: number) => void;
  copyItem: (index: number) => void;
  addItem: (index: number) => void;
  moveItemUp: (index: number) => void;
  moveItemDown: (index: number) => void;
  displayType: string;
  getFieldsProps: (idx: number, extraProps?: object) => void;
}
