# 基于uiw-form封装的业务表单

<!--ProForm-->

```js
import { ProForm } from '@uiw-admin/components'
import React, { useState } from 'react';
import { Button } from 'antd'
const Demo = () => {
  const [ isView ] = useState( false )
    return (
     <div>
       <ProForm
         formType="card"
         title="基础信息"
         btns={[
            {
             label: "提交表单",
             btnType: "submit",
             type: "danger",
             show: !isView
           },
           {
             label: "重置表单",
             btnType: "reset",
             type: "danger",
             show: !isView
           }
         ]}
         onSubmit={(initial: any, current: any) => {} )}
         onChange={(initial: any, current: any) => {} )}
         onSubmitError={(error:any)=>{}}
         formDatas={
           [
             {
               label: '姓氏',
               key: 'firstName',
               widget: 'input',
               initialValue: '',
               widgetProps: { disabled: isView }
             }
           ]}
       />
     </div>
  );
}
```

## 参数
```ts

interface ProFormProps {
  /** 表单项集合 */
  formDatas?: FormItemsProps[];
  /** 一行几个 */
  span?: number;
  /** 提交表单回调 需配合btns */
  onSubmit?: (initial: Record<string, any>, current: Record<string, any>) => void;
  /** 表单值变化回调 */
  onChange?: (initial: Record<string, any>, current: Record<string, any>) => void;
  /** 提交后错误回调 */
  onSubmitError?: (error: any) => void;
  /** 表单按钮 */
  btns?: BtnProps[]
  /** 标题 */
  title?: string | React.ReactNode | any;
  /** 表单类型 */
  formType?: 'collapse' | 'card';
}

// 表单项参数
interface FormItemsProps {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  key: string;
  /** 表单元素类型 */
  widget: 'input' | 'input'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'select'
  | 'textarea'
  | 'dateInput'
  | 'timePicker'
  | 'searchSelect'
  | 'monthPicker';
  /** 表单元素值，可以是默认值 */
  initialValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  option?: FormItemsOptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
}

// 表单button参数
interface BtnProps {
  label?: string;
  btnType: 'submit' | 'reset' | 'other';
  onPress?: () => void;
  show?: boolean;
  size?: 'large' | 'default' | 'small';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
  loading?: boolean;
  width?: number
}

// option参数
interface FormItemsOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```