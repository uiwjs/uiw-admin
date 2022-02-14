import { useRef } from 'react';
import { FormRefProps } from '../type';

const useForm = () => {
  const formRef = useRef<FormRefProps>();

  // 触发验证表单
  const submitvalidate = () => formRef.current?.submitvalidate() || null;
  // 重置表单
  const resetForm = () => formRef.current?.resetForm() || null;
  // 获取表单值
  const getFieldValues = () => formRef.current?.getFieldValues() || null;
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
