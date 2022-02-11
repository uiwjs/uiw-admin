import { useRef } from 'react';

const useForm = () => {
  const clickRef = useRef<any>();
  const formRef = useRef<any>();

  // 触发验证表单
  const submitvalidate = () => clickRef.current.click();
  // 重置表单
  const resetForm = () => formRef.current.resetForm();
  // 获取表单值
  const getFormValues = () => formRef.current.current;

  return {
    formRef,
    clickRef,
    submitvalidate,
    resetForm,
    getFormValues,
  };
};

export default useForm;
