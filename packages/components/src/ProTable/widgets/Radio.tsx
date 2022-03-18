import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from 'uiw';

interface FormSelectProps {
  option?: HTMLOptionElement[];
  disabled?: boolean;
}

const FormRadio: React.FC<FormSelectProps> = ({
  disabled,
  option,
  ...others
}) => {
  const [allDisabled, setAllDisabled] = useState<boolean>(false);

  // 全部枚举设为disabled

  useEffect(() => {
    setAllDisabled(disabled || false);
  }, [disabled]);

  return (
    <RadioGroup {...others}>
      {option &&
        option.map((opt) => (
          <Radio
            disabled={allDisabled || opt?.disabled}
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </Radio>
        ))}
    </RadioGroup>
  );
};

export default FormRadio;
