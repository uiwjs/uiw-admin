import React from 'react';
import { QuickFormProps } from './'
import { Row, Col } from 'uiw'
import WidgetsItem from './widgets'
import { useFormContext } from 'react-hook-form'
import './style/form-item.less';

const FromDom = ({
  formDatas = [],
  onItemChange,
  span = 3,
}: QuickFormProps) => {
  const { formState: { errors } } = useFormContext()
  return (
    <div className="w-form-grid" style={{ gridTemplateColumns: `repeat(${span}, 1fr)` }}>
      {
        formDatas.map(item => {
          const childrenProps = { ...item, onItemChange }
          const children = <WidgetsItem {...childrenProps} />
          // 隐藏不显示
          if (item?.hide) return null
          return (
            <div key={item.name}>
              <Row>
                <Col fixed className="w-form-label">
                  {item?.rules && <span style={{ color: "#ff4d4f", marginRight: 5 }}>*</span>}
                  <span>{item?.label}</span>
                </Col>
              </Row>
              <Row>{children}</Row>
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