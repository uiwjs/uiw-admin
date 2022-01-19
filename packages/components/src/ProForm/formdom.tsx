import React from 'react';
import { Form, Button, FormFieldsProps } from 'uiw';
import { ProFormProps } from './'
import './style/form-item.less';

function FormDom({
  formfields,
  onSubmit,
  onChange,
  onSubmitError,
  btns = [],
  span = 3,
}: ProFormProps & { formfields: Record<string, FormFieldsProps<{}>> | undefined }) {

  const renderBtn = ({ canSubmit, resetForm }: { canSubmit: () => boolean, resetForm: () => void }) => {
    const children = btns.map(({ label, btnType, show = true, onClick, ...others }: any, index) => {
      if (!show) return null
      if (btnType === 'submit') {
        return <Button key={index} disabled={!canSubmit()} htmlType="submit" {...others}>{label}</Button>
      }
      if (btnType === 'reset') {
        return (
          <Button key={index} onClick={() => resetForm} {...others}>{label}</Button>
        )
      }
      return <Button key={index} {...others} onClick={onClick?.()}>{label}</Button>
    })
    return children
  }

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
      fields={formfields}
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
              {renderBtn({ canSubmit, resetForm })}
            </div>
          </React.Fragment>
        );
      }}
    </Form>
  )
}


export default FormDom