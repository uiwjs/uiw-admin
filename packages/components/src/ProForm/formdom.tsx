import React from 'react';
import { Form, Button } from 'uiw';
import { ProFormProps } from './'
import './style/form-item.less';

function FormDom({
  getFormFields,
  onSubmit,
  onChange,
  onSubmitError,
  btns = [],
  span = 3,
}: ProFormProps & { getFormFields: any }) {
  return (
    <Form
      style={{ background: '#fff', paddingBottom: 10, marginBottom: 14 }}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => onSubmit?.(initial, current)}
      onChange={({ initial, current }) => onChange?.(initial, current)}
      onSubmitError={(error) => {
        if (onSubmitError) {
          onSubmitError(error)
        } else {
          if (error.filed) {
            return { ...error.filed };
          }
          return null;
        }
      }}
      fields={getFormFields}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        return (
          <React.Fragment>
            <div className="w-form-grid" style={{ gridTemplateColumns: `repeat(${span}, 1fr)` }}>
              {Object.keys(fields).map((key) => (
                <div key={key} style={{ flex: 1 }}>
                  {fields[key]}
                </div>
              ))}
            </div>
            <div className="w-form-item-center">
              {
                btns.map(({ label, btnType, onPress, show = true, size, type = 'primary', loading, width = 80 }, index) => {
                  const btnProps = {
                    loading: loading,
                    style: { width: width },
                    type: type,
                    size: size,
                  }
                  if (!show) return null
                  if (btnType === 'submit') {
                    return <Button key={index} {...btnProps} disabled={!canSubmit()} htmlType="submit">{label}</Button>
                  }
                  if (btnType === 'reset') {
                    return (
                      <Button key={index} {...btnProps} onClick={() => { resetForm; onPress?.() }}>{label}</Button>
                    )
                  }
                  return <Button key={index} {...btnProps} onClick={() => onPress?.()}>{label}</Button>
                })
              }
            </div>
          </React.Fragment>
        );
      }}
    </Form>
  )
}


export default FormDom