import React from 'react';
import { QuickFormProps } from './index'
import { Controller, Control, UseFormTrigger, FieldValues } from 'react-hook-form'
import { Row, Col } from 'uiw'
import WidgetsItem from './widgets'
import './style/form-item.less';

export type FromDomsProps = {
  control: Control<FieldValues, object>;
  errors: {
    [x: string]: any;
  }
  trigger: UseFormTrigger<FieldValues>;
} & QuickFormProps

const FromDom = ({
  formDatas = [],
  onItemChange,
  control,
  errors,
  trigger,
  span = 3
}: FromDomsProps) => {
  return (
    <div className="w-form-grid" style={{ gridTemplateColumns: `repeat(${span}, 1fr)` }}>
      {
        formDatas.map(item => {

          const clsLabel = ['w-form-label', item?.rules ? 'w-form-label-require' : null]
            .filter(Boolean)
            .join(' ')
            .trim();

          const labelFontStyle = {
            fontWeight: 600,
            color: "#000000d9"
          }

          const children = (
            <Controller
              key={item.name}
              control={control}
              render={({ field: { onChange, value }, }) => {
                const widgetsItemProps = {
                  ...item,
                  onChange,
                  value,
                  trigger,
                  onItemChange
                }
                return <WidgetsItem {...widgetsItemProps} />
              }}
              name={item.name}
              rules={item.rules}
              defaultValue={item.initValue ? item.initValue : ''}
            />
          )

          if (item.hide) {
            return null
          }

          return (
            <div key={item.name}>
              <Row>
                <Col fixed className={clsLabel}>
                  {item?.rules && <span style={{ paddingTop: 5, paddingRight: 5 }}>*</span>}
                  <span style={{ paddingLeft: item?.rules ? 0 : 12, ...labelFontStyle }}>{item?.label || ''}</span>
                </Col>
                <Col>{children}</Col>
              </Row>
              <Row>
                {errors[item.name] && errors[item.name].message && (
                  <Col className="w-form-label-error"> {errors[item.name].message}</Col>
                )}
              </Row>
            </div>
          )
        })
      }
    </div>
  )
}

export default FromDom