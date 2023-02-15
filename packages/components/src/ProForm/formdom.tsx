import React, { useRef, useEffect } from 'react';
import { Form, Button, Col, Row, FormFieldsProps } from 'uiw';
import { ProFormProps } from './type';
import { useStore, useColPropsContext } from './hooks/store';
import { fromValidate } from './utils';
import './style/form-item.less';

function FormDom({
  formDatas = [],
  formfields,
  onSubmit,
  onChange,
  onSubmitError,
  // afterSubmit,
  buttonsContainer,
  showSaveButton = false,
  showResetButton = false,
  saveButtonProps = {},
  resetButtonProps = {},
  formInstanceRef,
}: ProFormProps & {
  formfields: Record<string, FormFieldsProps<{}>> | undefined;
  formInstanceRef: any;
}) {
  const baseRef = useRef(null);
  const store = useStore();
  const colProps = useColPropsContext();

  const { setFormState } = store as any;

  // 通过store获取表单实例
  useEffect(() => setFormState?.(baseRef), [baseRef]);

  // 通过ref获取表单实例
  useEffect(() => {
    formInstanceRef.current = baseRef;
  }, [baseRef]);
  return (
    <Form
      ref={baseRef}
      style={{ background: '#fff', paddingBottom: 10, marginBottom: 14 }}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => {
        // 如果传入了onSubmit走onSubmit,否则主动验证
        if (onSubmit) {
          onSubmit?.(initial, current);
        } else {
          const filterFormDatas = formDatas.filter(
            (item) => item.hide !== true,
          );
          const validateList =
            filterFormDatas.map((item) => ({
              key: item.key,
              value: current[item.key],
              rules: item.rules,
            })) || [];
          const errorObj = fromValidate(validateList);
          if (Object.keys(errorObj).length > 0) {
            const err: any = new Error();
            err.filed = errorObj;
            throw err;
          }
        }
      }}
      onChange={({ initial, current }) => onChange?.(initial, current)}
      onSubmitError={(error) => {
        if (onSubmitError) {
          onSubmitError?.(error);
        } else {
          return error.filed ? { ...error.filed } : null;
        }
      }}
      fields={formfields}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        return (
          <React.Fragment>
            <Row gutter={10}>
              {Object.keys(fields).map((key) => {
                const colSpan =
                  fields[key]?.props?.span ||
                  (colProps && colProps.span) ||
                  '8';
                const colstyle = fields[key]?.props?.colstyle || {};
                return (
                  <Col
                    {...colProps}
                    style={{
                      ...((colProps && colProps.style) || {}),
                      ...colstyle,
                    }}
                    key={key}
                    span={colSpan}
                  >
                    {fields[key]}
                  </Col>
                );
              })}
            </Row>
            <div className="w-form-item-center" style={{ ...buttonsContainer }}>
              <Button
                style={{ display: showSaveButton ? 'flex' : 'none' }}
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
