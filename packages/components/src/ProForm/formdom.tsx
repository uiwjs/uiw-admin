import React from 'react';
import { Form, Button, Col, Row, FormFieldsProps } from 'uiw';
import { ProFormProps } from './type';
import { useStore } from './hooks/store';
import './style/form-item.less';

function FormDom({
  formfields,
  onSubmit,
  onChange,
  buttonsContainer,
  showSaveButton = false,
  showResetButton = false,
  saveButtonProps = {},
  resetButtonProps = {},
}: ProFormProps & {
  formfields: Record<string, FormFieldsProps<{}>> | undefined;
}) {
  const store = useStore();
  const { clickRef, formRef } = store as any;

  return (
    <Form
      style={{ background: '#fff', paddingBottom: 10, marginBottom: 14 }}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => onSubmit?.(initial, current)}
      onChange={({ initial, current }) => onChange?.(initial, current)}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      fields={formfields}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        const { errors } = state;
        formRef.current = {
          errors: errors,
          resetForm: resetForm,
          canSubmit: canSubmit,
          fields: fields,
        };
        return (
          <React.Fragment>
            <Row gutter={10}>
              {Object.keys(fields).map((key) => {
                const colSpan = fields[key]?.props?.span || '8';
                return (
                  <Col key={key} span={colSpan}>
                    {fields[key]}
                  </Col>
                );
              })}
            </Row>
            <div className="w-form-item-center" style={{ ...buttonsContainer }}>
              <Button
                {...saveButtonProps}
                style={{ display: showSaveButton ? 'flex' : 'none' }}
                ref={clickRef}
                disabled={!canSubmit()}
                htmlType="submit"
                {...saveButtonProps}
              >
                {saveButtonProps.label || '提交'}
              </Button>
              <Button
                style={{ display: showResetButton ? 'flex' : 'none' }}
                onClick={resetForm}
                {...resetButtonProps}
              >
                {resetButtonProps.label || '重置'}
              </Button>
            </div>
          </React.Fragment>
        );
      }}
    </Form>
  );
}

export default FormDom;
