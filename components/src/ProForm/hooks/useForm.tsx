import { useState } from 'react';
import { UseFormStateProps } from '../type';
import { isObjectEmpty } from '../utils/index';

const useForm = () => {
  // form表单实例
  const [formState, setFormState] = useState<{ current: UseFormStateProps }>();

  // 表单验证(同时兼容老api submitvalidate和新api onSubmit )
  const submitvalidate = () => formState?.current?.onSubmit() || null;
  // 获取表单的值
  const getFieldValues = () => formState?.current?.getFieldValues() || {};
  // 获取表单错误信息
  const getError = () => formState?.current?.getError() || {};

  // 验证并获取表单值
  const validateFieldsAndGetValue = async () => {
    return new Promise(async function (resolve, reject) {
      await submitvalidate();
      const errors = getError();
      if (isObjectEmpty(errors)) {
        const value = getFieldValues();
        resolve(value);
      } else {
        reject(errors);
      }
    });
  };

  return {
    ...formState?.current,
    submitvalidate,
    getError,
    getFieldValues,
    validateFieldsAndGetValue,
    // --------------
    setFormState,
  };
};

export default useForm;
