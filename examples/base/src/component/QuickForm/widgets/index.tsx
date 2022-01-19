import React from 'react';
import { Input, Select, Radio, RadioGroup, Checkbox } from 'uiw';
import { FormOptionsProps } from '../index'
import { useController, useFormContext } from 'react-hook-form'

function WidgetsItem({
  // formDatas 表单项参数
  name: labelName,
  type,
  render,
  initValue,
  rules,
  options,
  attributes,
  // 组件api监听表单值变化
  onItemChange,
  // react-hook-form/useForm
  // control,
  // trigger
}: any) {

  const { control, trigger } = useFormContext()

  const { field: { onChange, name, onBlur, value, ref } } = useController({
    name: labelName,
    control,
    rules: rules,
    defaultValue: initValue,
  });

  const widgetsProps = {
    name: name,
    ref: ref,
    onChange: (value: any) => {
      onChange(value)
      trigger(name)
      onItemChange?.(name, value)
    },
    onBlur: onBlur(),
    value: value,
    ...attributes
  }

  const dom = () => {
    if (type === 'input') {
      return (
        <div style={{ flex: 1 }}>
          <Input
            ref={ref}
            name={name}
            value={value || ''}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(event)
              trigger(name)
              onItemChange?.(name, event)
            }}
            onBlur={() => {
              onBlur()
              trigger(name)
            }}
            {...attributes}
          />
        </div>
      )
    }
    if (type === 'select') {
      return (
        <div style={{ flex: 1 }}>
          <Select {...widgetsProps}>
            <Select.Option>{attributes?.placeholder || '请选择'}</Select.Option>
            {options.map(({ disabled, label, value }: FormOptionsProps) => <Select.Option disabled={disabled} value={value} key={value}>{label}</Select.Option>)}
          </Select>
        </div>
      )
    }
    if (type === 'radio') {
      return (
        <div style={{ flex: 1 }}>
          <RadioGroup {...widgetsProps}>
            {options.map(({ disabled, label, value }: FormOptionsProps) => <Radio disabled={disabled} value={value}>{label}</Radio>)}
          </RadioGroup>
        </div>
      )
    }
    if (type === 'checkbox') {
      return (
        <div style={{ flex: 1 }}>
          <Checkbox.Group {...widgetsProps}>
            {options.map(({ disabled, label, value }: FormOptionsProps) => <Checkbox disabled={disabled} value={value}>{label}</Checkbox>)}
          </Checkbox.Group>
        </div>
      )
    }
    // 自定义组件
    if (type === 'render') {
      return render?.({ name, ref, onChange, onBlur })
    }
    return null
  }

  return dom()
}

export default WidgetsItem