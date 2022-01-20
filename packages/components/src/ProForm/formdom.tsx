import React from 'react';
import { Form, Button, FormFieldsProps, Col, Row } from 'uiw';
import { ProFormProps } from './';
import './style/form-item.less';

function FormDom({
  formfields,
  onSubmit,
  onChange,
  btns = [],
}: ProFormProps & {
  formfields: Record<string, FormFieldsProps<{}>> | undefined;
}) {
  const renderBtn = ({ canSubmit, resetForm }: {
    canSubmit: () => boolean;
    resetForm: () => void;
  }) => {
    const children = btns.map(
      ({ label, btnType, show = true, onClick, ...others }: any, index) => {
        if (!show) return null;
        if (btnType === 'submit') {
          return (
            <Button
              key={index}
              disabled={!canSubmit()}
              htmlType="submit"
              {...others}
            >
              {label}
            </Button>
          );
        }
        if (btnType === 'reset') {
          return (
            <Button key={index} onClick={() => resetForm} {...others}>
              {label}
            </Button>
          );
        }
        return (
          <Button key={index} {...others} onClick={onClick?.()}>
            {label}
          </Button>
        );
      },
    );
    return children;
  };

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
        return (
          <React.Fragment>
            <Row gutter={10}>
              {Object.keys(fields).map((key) => {
                const colSpan = fields[key]?.props?.span || '8'
                return (
                  <Col key={key} span={colSpan}>
                    {fields[key]}
                  </Col>
                );
              })}
            </Row>
            <div className="w-form-item-center">
              {renderBtn({ canSubmit, resetForm })}
            </div>
          </React.Fragment>
        );
      }}
    </Form>
  );
}

export default FormDom;
