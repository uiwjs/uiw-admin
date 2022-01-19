import React from 'react';
import { QuickFormProps } from './'
import { Row, Col } from 'uiw'
import WidgetsItem from './widgets'
import { Control, UseFormTrigger, FieldValues } from 'react-hook-form'
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
  span = 3,
  control,
  trigger,
  errors
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

          const childrenProps = { ...item, onItemChange, control, trigger }
          const children = <WidgetsItem {...childrenProps} />

          // 隐藏不显示
          if (item.hide) {
            return null
          }

          return (
            <div key={item.name}>
              <Row className="w-form-item-center">
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