import React from 'react';
import { Input } from 'uiw';
import { QuickFormProps } from './index'
import { Controller } from 'react-hook-form'
import { Control, FieldError, FieldValues } from 'react-hook-form/dist/types/form';
import { DeepMap } from 'react-hook-form/dist/types/utils';

import './index.css'
export interface FromDomsProps {
  values: QuickFormProps & {
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
    trigger: (name?: string | string[] | undefined) => Promise<boolean>;
  }
}

const FromDom = (props: FromDomsProps) => {
  const {
    values: {
      formDatas = [],
      onItemChange,
      control,
      errors,
      trigger,
      span = 3
    }
  } = props;

  const renderContent = ({
    label,
    name,
    type,
    value,
    options,
    onChange,
    attributes,
  }: any) => {
    if (type === 'input') {
      return (
        <div style={{ flex: 1 }}>
          <Input
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(event)
              trigger(name)
              onItemChange && onItemChange(name, event)
            }}
            onBlur={() => {
              trigger(name)
            }}
            {...attributes}
          />
        </div>
      )
    }
  }
  
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${span}, 1fr)` }}>
      {
        formDatas.map((item, index) => (
          item.hide ? null : (
            <div key={item.name}>
              <div className="form-item" key={index}>
                <div className="form-item-label">
                  {item?.rules && <span style={{ color: '#ff4d4f', paddingRight: 5, paddingTop: 5 }}>*</span>}
                  <span style={{ paddingLeft: item?.rules ? 0 : 12, fontWeight: 600 }}>{item?.label || ''}</span>
                </div>
                <Controller
                  key={item.name}
                  control={control}
                  render={({ onChange, value, onBlur }) => {
                    return (
                      <React.Fragment>
                        {renderContent({
                          ...item,
                          onChange,
                          value,
                          onBlur,
                        })}
                      </React.Fragment>
                    )
                  }}
                  name={item.name}
                  rules={item.rules}
                  defaultValue={item.initValue ? item.initValue : ''}
                />
              </div>
              {errors[item.name] && errors[item.name].message && (
                <div className="form-item-error"> {errors[item.name].message}</div>
              )}
            </div>
          )
        ))
      }
    </div>
  )
}

export default FromDom