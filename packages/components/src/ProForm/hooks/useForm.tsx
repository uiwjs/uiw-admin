import { useState, useRef } from 'react';
import { FormListProps } from '../type';

const useForm = () => {
  // 表单组件实例
  const [formInstance, setFormInstance] = useState<any>(null);

  // 多表单列表
  const [formList, setFormList] = useState<{ current?: FormListProps }[]>([]);

  // 表单错误信息
  const errorsRef = useRef<{ [key: string]: any }>({});

  // 触发验证表单兼容原有api验证
  const submitvalidate = () => formInstance?.current?.onSubmit();

  // 获取表单值
  const getFieldValues = () => formInstance.current?.getFieldValues() || {};

  // 获取错误信息
  const getErrors = () => errorsRef.current;

  return {
    submitvalidate,
    getErrors,
    getFieldValues,
    // 多表单列表
    formList,
    // --------------
    setFormInstance,
    setFormList,
    errorsRef,
  };
};

export default useForm;
