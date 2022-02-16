import { useState, useRef } from 'react';
import { FormListProps } from '../type';

const useForm = () => {
  // form(srting)表单实例
  const [formState, setFormState] = useState<any>(null);
  // form(srting)表单错误信息
  const errorsRef = useRef<{ [key: string]: any }>({});

  // form(array)表单实例
  const [formStateList, setFormStateList] = useState<
    { current?: FormListProps }[]
  >([]);

  // form(srting)触发验证表单验证
  const submitvalidate = () => formState?.current?.onSubmit();
  // form(srting)获取表单值
  const getFieldValues = () => formState.current?.getFieldValues() || {};
  // form(srting)获取错误信息
  const getErrors = () => errorsRef.current;

  return {
    submitvalidate,
    getErrors,
    getFieldValues,
    formStateList,
    // --------------
    setFormState,
    setFormStateList,
    errorsRef,
  };
};

export default useForm;
