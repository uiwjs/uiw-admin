import { useRef } from 'react';

const useForm = () => {
  const clickRef = useRef<any>();

  // 验证表单
  const submitvalidate = () => clickRef.current.click();

  return {
    clickRef,
    submitvalidate,
  };
};

export default useForm;
