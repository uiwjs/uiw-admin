import { useState } from 'react';
import { UseFormStateProps } from '../type';

const useForm = () => {
  // form表单实例
  const [formState, setFormState] = useState<{ current: UseFormStateProps }>();

  // 表单验证(同时兼容老api submitvalidate和新api onSubmit )
  const submitvalidate = () => formState?.current?.onSubmit() || null;
  const onSubmit = () => formState?.current?.onSubmit() || null;
  // 获取表单的值
  const getFieldValues = () => formState?.current?.getFieldValues() || {};
  // 获取表单错误信息
  const getError = () => formState?.current?.getError() || {};

  return {
    ...formState?.current,
    submitvalidate,
    onSubmit,
    getError,
    getFieldValues,
    // --------------
    setFormState,
  };
};

export default useForm;
