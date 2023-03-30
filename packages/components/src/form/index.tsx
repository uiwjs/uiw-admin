import { Form, Button, Row, Col } from 'uiw';
import React from 'react';
import { validator, getRules } from './utils';
import { ComFormProps } from './interface';
export * from './interface';

function ComForm<T = any>(props: ComFormProps<T>) {
  const {
    fields: fieldArr,
    buttonGroup,
    buttonGroupClassName,
    buttonGroupStyle,
    showSaveButton = false,
    showResetButton = false,
    saveButtonProps = {},
    resetButtonProps = {},
  } = props;

  const buttonGroupArr = buttonGroup || [
    {
      style: { display: showSaveButton ? 'flex' : 'none' },
      htmlType: 'submit',
      children: saveButtonProps.label || '提交',
      ...saveButtonProps,
    },
    {
      style: { display: showResetButton ? 'flex' : 'none' },
      children: resetButtonProps.label || '重置',
      htmlType: 'reset',
      ...resetButtonProps,
    },
  ];

  return (
    <Form
      onChange={(value) => props.onChange?.(value)}
      onSubmitError={(error) => {
        if (props.onSubmitError) {
          props.onSubmitError(error);
        } else {
          return error.filed ? { ...error.filed } : null;
        }
      }}
      fields={fieldArr as any}
      onSubmit={({ initial, current }, event) => {
        if (props.onSubmit) {
          props.onSubmit({ initial, current }, event);
        } else {
          const result = validator(current, getRules(fieldArr));
          if (Object.keys(result).length) {
            const error: any = new Error();
            error.filed = result;
            throw error;
          }
        }
      }}
    >
      {(childProps) => {
        const { fields, canSubmit, resetForm } = childProps;
        return (
          <React.Fragment>
            <Row gutter={10}>
              {fields &&
                Object.keys(fields).map((key) => {
                  let ColProps = {
                    ...(props.colProps || {}),
                  };
                  if (fieldArr) {
                    ColProps = {
                      ...ColProps,
                      ...(fieldArr[key].colProps || {}),
                    };
                  }
                  return (
                    <Col span={8} key={key} {...ColProps}>
                      {fields[key]}
                    </Col>
                  );
                })}
            </Row>
            <div
              className={`w-form-item-center ${buttonGroupClassName}`}
              style={buttonGroupStyle}
            >
              {(buttonGroupArr as any).map((item: any, index: number) => {
                if (typeof item === 'function') {
                  return item(childProps);
                }
                let props = { ...item };
                if (item.htmlType === 'submit') {
                  props.disabled = !canSubmit?.();
                } else if (item.htmlType === 'reset') {
                  props.onClick = resetForm;
                }
                return <Button key={index} {...props} />;
              })}
            </div>
          </React.Fragment>
        );
      }}
    </Form>
  );
}

export default ComForm;
