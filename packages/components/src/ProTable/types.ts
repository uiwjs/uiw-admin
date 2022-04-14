import {
  ButtonProps,
  TableColumns,
  TableProps,
  FormSubmitProps,
  PaginationProps,
  FormRefType,
} from 'uiw';
import { SWRConfiguration, MutatorOptions } from 'swr';
import { UseSelections } from './useSelections';
import { Options } from '@uiw-admin/utils/src/request';
import { MutableRefObject } from 'react';

type SelectionType = 'checkbox' | 'radio';

type RowSelection = {
  type?: SelectionType;
  selectKey: string;
  defaultSelected?: any[];
};

type ScrollProps = {
  x?: string | number;
};

export interface ProtableProps extends TableProps {
  table: useTableData;
  operateButtons?: Array<ButtonProps & { render?: JSX.Element }>;
  searchBtns?: Array<ButtonProps & { render?: JSX.Element }>;
  columns: FormCol[];
  onBeforeSearch?: (state: FormSubmitProps) => Boolean;
  rowSelection?: RowSelection;
  onPageChange?: (page: number) => void;
  scroll?: ScrollProps;
  paginationProps?: PaginationProps;
  requestOptions?: Options;
  formCol?: number;
}

export type FormProps = {
  widget:
    | 'input'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'select'
    | 'textarea'
    | 'dateInput'
    | 'timePicker'
    | 'searchSelect'
    | 'monthPicker'
    | 'searchTree';
  [key: string]: any;
};

export interface FormCol extends TableColumns {
  props?: FormProps | Array<FormProps>;
}

export interface BaseTableProps extends TableProps {
  style?: React.CSSProperties;
  columns: TableColumns[];
  rowSelection?: RowSelection;
  onPageChange?: (page: number) => void;
  scroll?: ScrollProps;
  paginationProps?: PaginationProps;
}

export interface BaseFormProps
  extends Omit<ProtableProps, 'table' | 'operateButtons'> {}

export type Fields = {
  [key: string]: any;
};

type Result = {
  total: number;
  data: Record<string, string | number | JSX.Element>[];
};

export type Params = {
  formatData?: (res: any) => Result;
  query?: (
    pageIndex: number,
    pageSize: number,
    searchValues: {
      [key: string]: any;
    },
  ) => {
    [key: string]: any;
  };
  requestOptions?: Options;
  SWRConfiguration?: SWRConfiguration;
};

export interface useTableData extends Params {
  data: Record<string, string | number | JSX.Element>[];
  total: number;
  pageIndex: number;
  key: string;
  onReset: () => void;
  onRefersh: () => void;
  onSearch: () => void;
  updateStore: (p: stateParams) => void;
  searchValues: {
    [key: string]: any;
  };
  loading: boolean;
  selection: UseSelections<any>;
  form: MutableRefObject<FormRefType>;
  updateForm: (p: stateParams) => void;
  setPageIndex: (p: number) => void;
  mutate: (data?: any, opts?: boolean | MutatorOptions | undefined) => void;
}

export type stateParams = {
  data?: Record<string, string | number | JSX.Element>[];
  total?: number;
  // form?: {
  //   [key: string]: any;
  // };
};
