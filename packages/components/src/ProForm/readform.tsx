import React from 'react'
import { Descriptions } from 'uiw'
import { ProFormProps } from './type';
import { getReadValue } from './utils/index'

export default ({
  title,
  formDatas,
  readOnlyProps
}: ProFormProps) => {
  return (
    <Descriptions column={3} bordered title={title} {...readOnlyProps}>
      {formDatas?.map(({ label, widget, initialValue = '', option = [], readSpan = 1, widgetProps = {} }, index) => {
        return (
          <Descriptions.Item span={readSpan} label={label} key={index}>
            {getReadValue(widget, initialValue, option, widgetProps)}
          </Descriptions.Item>
        )
      })}
    </Descriptions>
  )
}