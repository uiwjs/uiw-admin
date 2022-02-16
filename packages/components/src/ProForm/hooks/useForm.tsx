import { useState } from 'react';

interface StateProps {
  onSubmit: () => void;
  getFieldValues: () => void;
  resetForm: () => void;
  getError: () => void;
  setFields: () => void;
}

const useForm = () => {
  // form(srting)表单实例
  const [formState, setFormState] = useState<{ current: StateProps }>();

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
