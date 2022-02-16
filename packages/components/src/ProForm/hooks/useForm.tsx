import { useState, useRef } from 'react';
import { FormListProps } from '../type';

interface StateProps {
  onSubmit: () => void;
  getFieldValues: () => void;
  resetForm: () => void;
}

const useForm = () => {
  // form(srting)表单实例
  const [formState, setFormState] = useState<{ current: StateProps }>();
  // form(srting)表单错误信息
  const errorsRef = useRef<{ [key: string]: any }>({});

  // form(array)表单实例
  const [formStateList, setFormStateList] = useState<
    { current?: FormListProps }[]
  >([]);

  // form(srting)触发验证表单验证
  const submitvalidate = () => formState?.current?.onSubmit() || null;
  // form(srting)重置表单
  const resetForm = () => formState?.current?.resetForm() || null;
  // form(srting)获取表单值
  const getFieldValues = () => formState?.current?.getFieldValues() || {};
  // form(srting)获取错误信息
  const getErrors = () => errorsRef?.current || {};

  return {
    submitvalidate,
    getErrors,
    getFieldValues,
    resetForm,
    formStateList,
    // --------------
    setFormState,
    setFormStateList,
    errorsRef,
  };
};

export default useForm;
