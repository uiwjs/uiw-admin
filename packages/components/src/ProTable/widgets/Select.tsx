import React from 'react';
import { Select } from 'uiw';

interface FormSelectProps {
  option?: HTMLOptionElement[];
}

const FormSelect: React.FC<FormSelectProps> = ({ option, ...others }) => {
  return (
    <Select {...others}>
      <Select.Option value="">请选择</Select.Option>
      {option &&
        option.map((opt) => (
          <Select.Option key={opt.value} value={opt.value}>
            {opt.label}
          </Select.Option>
        ))}
    </Select>
  );
};

export default FormSelect;
