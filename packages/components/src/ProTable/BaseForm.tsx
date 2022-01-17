import React, { useEffect } from 'react';
import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Radio,
  Checkbox,
  Switch,
  SearchSelect,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  FormSubmitProps,
} from 'uiw';
import { FormCol } from './index';
import Select from './widgets/Select';
import { useStore } from './hooks';

interface BaseFormProps {
  columns: FormCol[];
}

export type Fields = {
  [key: string]: any;
};

const widgets = {
  input: Input,
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
  select: Select,
  // searchSelect: SearchSelect,
  textarea: Textarea,
  dateInput: DateInput,
  timePicker: TimePicker,
  monthPicker: MonthPicker,
};

const BaseForm: React.FC<BaseFormProps> = (props) => {
  const store = useStore();

  let { updateStore, reset, onSearch } = store as any;

  const { columns } = props;
  // 获取表单配置
  const getFormFields = () => {
    const fields: Fields = {};
    columns.forEach((col) => {
      if (col.props && Object.keys(col.props).length > 0) {
        const { widgetProps, key, widget, label, initialValue, ...otherProps } =
          col.props;
        const name = col.key || key;
        const Widget = widgets[widget];
        fields[name] = {
          label: col.title || label,
          children: <Widget {...widgetProps} />,
          ...otherProps,
          initialValue,
        };
      }
    });

    return fields;
  };

  // 处理更新默认值

  useEffect(() => {
    updateStore({
      searchValues: { ...getFormFields().defaultValues },
    });
  }, [JSON.stringify(getFormFields().defaultValues)]);

  // 查询
  const onFormSearch = ({ initial, current }: FormSubmitProps) => {
    updateStore({
      searchValues: {
        ...initial,
        ...current,
      },
    });
    onSearch(current);
  };

  // 重置

  const onReset = (resetForm: () => void) => {
    resetForm();
  };

  return (
    <Form
      style={{ background: '#fff', paddingBottom: 5 }}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => {
        onFormSearch({ initial, current });
      }}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      fields={getFormFields()}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        return (
          <div>
            <Row gutter={10}>
              {Object.keys(fields).map((key) => (
                <Col key={key} fixed>
                  {fields[key]}
                </Col>
              ))}

              <Col style={{ marginTop: 31 }}>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                {/* <Button type="warning" onClick={() => onReset(resetForm)}>
                  重置表单
                </Button> */}
              </Col>
            </Row>
          </div>
        );
      }}
    </Form>
  );
};

export default BaseForm;
