import React from 'react';
import {Radio, RadioGroup } from 'uiw';

interface FormSelectProps {
  option?: HTMLOptionElement[];
}

const FormRadio: React.FC<FormSelectProps> = ({ option, ...others }) => {
  return (
    <RadioGroup {...others}>
      {option &&
        option.map((opt) => (
          <Radio key={opt.value} value={opt.value}>
            {opt.label}
          </Radio>
        ))}
    </RadioGroup>
  );
};

export default FormRadio;
