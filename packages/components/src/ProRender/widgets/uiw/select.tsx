import React from 'react';
import { Select } from 'uiw';
import { getArray } from '../../utils';
import { FrSelectProps, Options as SelectOptions } from './types';

const { Option } = Select;

const FrSelect: React.FC<FrSelectProps> = ({
  schema,
  style,
  value,
  onChange,
  options: _options,
  ...rest
}) => {
  let options: SelectOptions[];
  // 如果已经有外部注入的options了，内部的schema就会被忽略
  let disabled = typeof rest.disabled === 'string' ? false : rest.disabled;
  if (_options && Array.isArray(_options)) {
    options = _options;
  } else {
    const { enum: enums, enumNames, options: newOptions } = schema || {};
    options =
      newOptions ||
      getArray(enums).map((item, idx) => {
        let label =
          enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
        const isHtml = typeof label === 'string' && label[0] === '<';
        if (isHtml) {
          label = <span dangerouslySetInnerHTML={{ __html: label }} />;
        }
        return { label, value: item };
      });
  }
  const finalProps = {
    style: { width: '100%', ...style },
    ...rest,
    disabled,
  };
  return (
    <Select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...finalProps}
    >
      {options.map(({ value, label, ...others }) => (
        <Option key={value} value={value} {...others}>
          {label}
        </Option>
      ))}
    </Select>
  );
};

export default FrSelect;
