import { useRef } from 'react';

const useForm = () => {
  const formRef = useRef<any>();

  // 触发验证表单
  const submitvalidate = () => formRef.current.submitvalidate();
  // 重置表单
  const resetForm = () => formRef.current.resetForm();
  // 获取表单值
  const getFieldValues = () => formRef.current.getFieldValues();
  // 获取错误信息
  const getErrors = () => formRef.current?.errors || {};

  return {
    formRef,
    submitvalidate,
    resetForm,
    getFieldValues,
    getErrors,
  };
};

export default useForm;
