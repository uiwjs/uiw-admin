import React, { useRef, useEffect } from 'react';
import { Form, Button, Col, Row, FormFieldsProps } from 'uiw';
import { ProFormProps } from './type';
import { useStore } from './hooks/store';
import { fromValidate } from './utils';
import './style/form-item.less';

function FormDom({
  formDatas,
  formfields,
  onSubmit,
  onChange,
  buttonsContainer,
  showSaveButton = false,
  showResetButton = false,
  saveButtonProps = {},
  resetButtonProps = {},
  type,
  form,
}: ProFormProps & {
  formfields: Record<string, FormFieldsProps<{}>> | undefined;
}) {
  const baseRef = useRef<any>();
  const store = useStore();

  const { errorsRef, setFormInstance, formList, setFormList } = store as any;

  // 普通表单
  useEffect(() => setFormInstance?.(baseRef), [baseRef]);

  // 处理多表单
  useEffect(() => {
    if (baseRef) {
      if (type === 'array') {
        const datas = formList;
        datas.push(baseRef);
        setFormList?.([...datas]);
      }
      return () => setFormList?.([]);
    }
  }, [type]);

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
          const validateList =
            (formDatas &&
              formDatas.length > 0 &&
              formDatas.map((item) => ({
                key: item.key,
                value: current[item.key],
                rules: item.rules,
              }))) ||
            [];
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
        if (error.filed) {
          errorsRef.current = { ...error.filed };
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
