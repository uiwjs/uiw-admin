import React from 'react';
import { Input, Select } from 'uiw';
import { FormOptionsProps } from '../index'

function WidgetsItem({
  name,
  type,
  options,
  attributes,
  onChange,
  value,
  trigger,
  onItemChange
}: any) {
  const dom = () => {
    if (type === 'input') {
      return (
        <div style={{ flex: 1 }}>
          <Input
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(event)
              trigger(name)
              onItemChange?.(name, event)
            }}
            onBlur={() => trigger(name)}
            {...attributes}
          />
        </div>
      )
    }
    if (type === 'select') {
      console.log('value', value)
      return (
        <div style={{ flex: 1 }}>
          <Select
            onChange={(value) => {
              onChange(value)
              trigger(name)
              onItemChange?.(name, value)
            }}
            value={value}
            {...attributes}
          >
            <Select.Option>{attributes?.placeholder || '请选择'}</Select.Option>
            {options.map(({ disabled, label, value }: FormOptionsProps) => <Select.Option disabled={disabled} value={value} key={value}>{label}</Select.Option>)}
          </Select>
        </div>
      )
    }
    return null
  }

  return dom()
}

export default WidgetsItem