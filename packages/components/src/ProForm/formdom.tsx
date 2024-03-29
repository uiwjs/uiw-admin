import React, { useRef, useEffect } from 'react';
import { Form, Button, Col, Row, FormFieldsProps } from 'uiw';
import { ProFormProps, UseFormStateProps } from './type';
import { useStore, useColPropsContext } from './hooks/store';
import { fromValidate } from './utils';
import './style/form-item.css';

function FormDom({
  formDatas = [],
  formfields,
  formType,
  onSubmit,
  onChange,
  onSubmitError,
  buttonsContainer,
  showSaveButton = false,
  showResetButton = false,
  saveButtonProps = {},
  resetButtonProps = {},
  formInstanceRef,
  className,
  style,
}: ProFormProps & {
  formfields: Record<string, FormFieldsProps<{}>> | undefined;
  formInstanceRef: React.MutableRefObject<
    { current: UseFormStateProps | null } | undefined
  >;
}) {
  const baseRef: React.MutableRefObject<null> = useRef(null);
  const store = useStore();
  const colProps = useColPropsContext();

  const { setFormState } = store as {
    setFormState: ((p: any) => void) | undefined;
  };

  // 通过store获取表单实例
  useEffect(() => setFormState?.(baseRef), [baseRef]);

  // 通过ref获取表单实例
  useEffect(() => {
    if (baseRef && baseRef.current) {
      formInstanceRef.current = baseRef;
    }
  }, [baseRef]);

  const styles: React.CSSProperties = {
    paddingBottom: 10,
    ...style,
  };

  if (formType !== 'pure') {
    styles.background = '#fff';
  }

  return (
    <Form
      className={className}
      ref={baseRef}
      style={styles}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => {
        // 如果传入了onSubmit走onSubmit,否则主动验证
        const filterFormDatas = formDatas.filter((item) => item.hide !== true);
        const validateList =
          filterFormDatas.map((item) => ({
            key: item.key,
            value: current[item.key],
            rules: item.rules,
            required: item.required,
          })) || [];
        const errorObj = fromValidate(validateList);
        if (Object.keys(errorObj).length > 0) {
          const err: any = new Error();
          err.filed = errorObj;
          throw err;
        }
        onSubmit?.(initial, current);
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
      {({ fields = {}, state, canSubmit = () => false, resetForm }) => {
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
                className="uiw-admin-proform-btn"
                style={{ display: showSaveButton ? 'flex' : 'none' }}
                disabled={!canSubmit()}
                type="primary"
                htmlType="submit"
                {...saveButtonProps}
              >
                {saveButtonProps.label || '提交'}
              </Button>
              <Button
                className="uiw-admin-proform-btn"
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
