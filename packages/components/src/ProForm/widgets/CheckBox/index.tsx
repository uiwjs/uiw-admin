import React from 'react';
import { Checkbox } from 'uiw';

interface FormSelectProps {
  option?: HTMLOptionElement[];
}

const FormCheckBox: React.FC<FormSelectProps> = ({ option, ...others }) => {
  return (
    <Checkbox.Group {...others}>
      {option &&
        option.map((opt) => (
          <Checkbox key={opt.value} value={opt.value}>
            {opt.label}
          </Checkbox>
        ))}
    </Checkbox.Group>
  );
};

export default FormCheckBox;
