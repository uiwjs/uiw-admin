import React, { useImperativeHandle } from 'react';
import { useForm, FieldErrors, RefCallBack, Noop, FormProvider, UseFormReturn, FieldValues } from 'react-hook-form'
import FormDom from './formdom'
import { hasErrors } from './utils'

export interface RenderCallBackProps {
  name: any;
  ref: RefCallBack;
  onChange: (...event: any[]) => void;
  onBlur: Noop
}

export interface FormOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormDataProps {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  name: string;
  /** 表单元素类型 */
  type: 'input' | 'select' | 'radio' | 'checkbox' | 'render';
  /** 表单元素值，可以是默认值 */
  initValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  options?: FormOptionsProps[];
  /** 校验规则 */
  rules?: FieldErrors
  /** 是否显示 */
  hide?: boolean;
  attributes?: any;
  render?: (attr: RenderCallBackProps) => JSX.Element
}

export interface QuickFormProps {
  /** 是否是查看模式 */
  readonly?: boolean;
  /** 表单标题 */
  title?: string
  /** 表单集合 */
  formDatas: FormDataProps[];
  setOptions?: {
    submitErrorCheck?: boolean; //是否检查
    processValuesFunc?: (value: { [x: string]: any }) => void // 接收数据
  },
  /** 表单值变化 */
  onItemChange?: (name: string, value: string | number | any | any[]) => Promise<void>
  /** 表单横向排列个数 */
  span?: number;
}



function Index(props: QuickFormProps, ref: any) {

  const methods: UseFormReturn<FieldValues, object> = useForm()

  const { watch, getValues, setValue, trigger, formState: { errors }, reset, setError, clearErrors } = methods

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultOptions = {
    submitErrorCheck: true, // 提交错误检查
    processValuesFunc: null, // 处理 values 数据
    ...props.setOptions
  };

  // 暴露给父组件调用的方法
  useImperativeHandle(ref, () => ({
    setValue: async (name: string, value?: any, options?: any) => setValue(name, value, options),
    getValues: async () => {
      if (defaultOptions.submitErrorCheck) {
        await trigger()
        if (hasErrors(errors)) {
          return null
        }
      }
      const values = getValues()
      if (typeof defaultOptions.processValuesFunc === 'function') {
        return defaultOptions.processValuesFunc(values)
      }
      return values
    },
    errors: async () => errors,
    reset: async (...args: any) => reset(...args),
    trigger: async () => trigger(),
    setError: (name: string, error: FieldErrors) => setError(name, error),
    clearErrors: (name?: string | string[] | undefined) => clearErrors(name),
    watch: async () => watch()

  }), [setValue, defaultOptions, getValues, trigger, errors, reset, setError, clearErrors, watch]);

  return (
    <FormProvider {...methods} >
      {props?.title && <h3 style={{ marginTop: 10, marginBottom: 10 }}>{props?.title}</h3>}
      <FormDom {...props} />
    </FormProvider>
  )
}


export default React.forwardRef(Index)