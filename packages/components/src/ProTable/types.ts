import { ButtonProps, TableColumns, TableProps, FormSubmitProps } from 'uiw';
import { SWRConfiguration } from 'swr';
import { UseSelections } from '../hooks/useSelections';

type SelectionType = 'checkbox' | 'radio';

type RowSelection = {
  type?: SelectionType;
  selectKey: string;
  defaultSelected?: any[];
};

export interface ProtableProps extends TableProps {
  table: useTableData;
  operateButtons?: Array<ButtonProps & { render?: JSX.Element }>;
  searchBtns?: Array<ButtonProps & { render?: JSX.Element }>;
  columns: FormCol[];
  onBeforeSearch?: (state: FormSubmitProps) => Boolean;
  rowSelection?: RowSelection;
}

export interface FormCol extends TableColumns {
  props?: {
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
      | 'monthPicker';
    [key: string]: any;
  };
}

export interface BaseTableProps {
  style?: React.CSSProperties;
  columns: TableColumns[];
  rowSelection?: RowSelection;
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
    searchValues: {
      [key: string]: any;
    },
  ) => {
    [key: string]: any;
  };
  SWRConfiguration?: SWRConfiguration;
};

export interface useTableData<T> extends Params {
  data: Record<string, string | number | JSX.Element>[];
  total: number;
  key: string;
  reset: () => void;
  refersh: () => void;
  onSearch: () => void;
  updateStore: (p: stateParams) => void;
  searchValues: {
    [key: string]: any;
  };
  loading: boolean;
  selection: UseSelections<any>;
}

export type stateParams = {
  data?: Record<string, string | number | JSX.Element>[];
  total?: number;
};
