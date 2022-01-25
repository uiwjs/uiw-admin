# 基于uiw-form封装的业务表单

## 注意
- [继承于uiw/form,请参考uiw/from以及表单组件](https://uiwjs.github.io/#/components/form)
- 组件默认集成了Input,Checkbox,Switch,Textarea,DateInput,TimePicker,MonthPicker,SearchSelect,Select,Radio。

<!--ProForm-->

### 基本使用(与uiw/form使用保持一致)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProForm } from '@uiw-admin/components'
import { Button,Notify,Slider } from 'uiw'
const Demo = () => {
    return (
       <ProForm
         // 表单类型
         formType="collapse"
         title="基本使用(与uiw/form使用保持一致)"
         // 自定义组件
         customWidgetsList={{
          slider: Slider,
        }}
         // 是否展示uiw/form提交按钮
         showSaveButton
         // 是否展示uiw/form重置按钮
         showResetButton
         // 提交后验证
         onSubmit={(initial, current) => {
          const errorObj = {};
          if (!current?.input) {
            errorObj.input = 'input不能为空';
          }
          if (Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！' });
            throw err;
          }
          // 调用请求接口
        }}
         // 表单值变化 
         onChange={(initial, current) => {}}
         formDatas={[
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               help:"input不能为空"
             },
             {
              label: 'textarea',
              key: 'textarea',
              widget: 'textarea',
             },
             {
              label: 'select',
              key: 'select',
              widget: 'select',
              option: [
                { value: 1, label: '苹果' },
                { value: 2, label: '西瓜' },
                { value: 3, label: '香蕉' },
                { value: 4, label: '东北大冻梨' }
              ],
            },
            {
              label: 'switch',
              key: 'switch',
              widget: 'switch',
            },
            {
              label: 'radio',
              widget: 'radio',
              key: 'radio',
              option: [
                { label: '男', value: 'man' },
                { label: '女', value: 'girl' }
              ],
            },
            {
              label: '多选框',
              widget: 'checkbox',
              key: 'checkbox',
              option: [
                { label: '四川菜', value: 'sichuan' },
                { label: '湖北菜', value: 'hubei' }
              ],
            },
            {
              label: '年月日时分秒',
              key: 'dateInputsecond',
              widget: 'dateInput',
              widgetProps: {
                format: 'YYYY-MM-DD HH:mm:ss'
              },
            },
            {
              label: '年月日',
              key: 'dateInput',
              widget: 'dateInput',
            },
            {
              label: '年月',
              key: 'monthPicker',
              widget: 'monthPicker',
            },
            {
              label: '时分秒',
              key: 'timePicker',
              widget: 'timePicker',
            },
            // 只读模式下支持读取React.ReactNode
            {
              label: '自定义组件',
              key: 'slider',
              widget: 'slider',
              readSpan: 2,
              span:"24"
            },
          ]}
       />
  )
}
ReactDOM.render(<Demo />, _mount_);
```

### 通过submitRef进行表单提交
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState,useRef } from 'react';
import { ProForm } from '@uiw-admin/components'
import { Button,Notify } from 'uiw'
const Demo = () => {

  const submitRef = useRef()

    return (
     <div>
       <ProForm
         submitRef={submitRef}
         title="通过submitRef进行表单提交"
         formType="card"
         onSubmit={(initial, current) => {
          const errorObj = {};
          if (!current?.input) {
            errorObj.input = 'input不能为空';
          }
          if (Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！' });
            throw err;
          }
          // 调用请求接口
        }}
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24"
             },
          ]}
       />
       <Button style={{ marginTop:10,width:80 }} type="primary" onClick={()=>submitRef?.current?.click()}>保存</Button>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### 只读模式
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { ProForm } from '@uiw-admin/components'
import { formatter } from 'uiw'
import React, { useState } from 'react';
const Demo = () => {
  const [ queryInfo ] = useState({
    input:"周政",
    textarea:"周政",
    select:"周政",
    dateInputsecond: '2021-1-21 23:59:59',
    dateInput: '2021-1-21',
    monthPicker: '2021-1-21',
    timePicker: '2021-1-21 23:59:59',
  })
    return (
       <ProForm
         // 表单类型
         formType="pure"
         readOnly={true}
         title="只读模式"
         // 只读模式下调整 一行的 DescriptionItems 数量,其余参数参考uiw/Descriptions
         readOnlyProps={{ column:2 }}
         formDatas={
           [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               // 只读模式下支持读取React.ReactNode
               initialValue: queryInfo?.input,
             },
             {
               label: 'textarea',
               key: 'textarea',
               widget: 'textarea',
               initialValue: queryInfo?.textarea,
             },
             {
               label: 'select',
               key: 'select',
               widget: 'select',
               option:[{label:"周政",value:"周政"}],
               initialValue: queryInfo?.select,
             },
             {
              label: 'dateInput',
              key: 'dateInputsecond',
              widget: 'dateInput',
              widgetProps: {
                // 年月日时分秒
                format: 'YYYY-MM-DD HH:mm:ss'
              },
              initialValue: queryInfo.dateInputsecond && formatter('YYYY-MM-DD HH:mm:ss', new Date(queryInfo.dateInputsecond))
            },
            {
              label: 'dateInput',
              key: 'dateInput',
              widget: 'dateInput',
              initialValue: queryInfo.dateInput && formatter('YYYY-MM-DD', new Date(queryInfo.dateInput))
            },
            {
              label: 'monthPicker',
              key: 'monthPicker',
              widget: 'monthPicker',
              initialValue: queryInfo.monthPicker && formatter('YYYY-MM', new Date(queryInfo.monthPicker))
            },
            {
              label: 'timePicker',
              key: 'timePicker',
              widget: 'timePicker',
              initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker)
            },
           ]}
       />
  );
}
ReactDOM.render(<Demo />, _mount_);
```


## Porps  继承uiw-Form

| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| formDatas | 表单项集合	| FormItemsProps[]		| [] |
| onSubmit | 提交表单回调 需配合btns，继承uiw/form submit	| (initial: `Record<string, any>`, current: `Record<string, any>`) => void		| - |
| onChange | 表单值变化回调，继承uiw/form onChange	| (initial: `Record<string, any>`, current: `Record<string, any>`) => void	| - |
| showSaveButton | 展示提交按钮	|  boolean		| false |
| showResetButton | 展示重置按钮	|  boolean		| false |
| saveButtonProps | 提交按钮api;继承于uiw/button	|  boolean		| false |
| resetButtonProps | 重置按钮api;继承于uiw/button	|  boolean		| false |
| buttonsContainer  | buttons容器样式(可调整button布局)	| React.CSSProperties		| - |
| title | 标题	  | string		| - |
| formType | 表单类型	  | 'collapse' 或 'card' 或 'pure'		| 'card' |
| submitRef | 获取表单提交事件ref	  |  any		| - |
| readOnly | 是否是只读模式模式	  |  boolean		| false |
| readOnlyProps | 只读模式 参考Descriptions参数	  |  DescriptionsProps		| {} |
| customWidgetsList | 可配置自定义组件	  |  { [key: string]: any }		| {} |

## FormItemsProps 继承uiw-FormItem
| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| label| 表单项名称 | string	| - |
| key| 表单项key| string	| - |
| widget| 表单项类型| sring	| - |
| initialValue| 表单项值，可以是默认值| any 或 any[]	| - |
| option| 数据化选项内容, type为 radio、checkbox、select 生效| FormItemsOptionsProps[]| - |
| widgetProps| 表单组件其余参数,参考uiw表单组件| any|- |
| hide| 是否显示| boolean| true |
| span| 非只读模式下,可以通过指定 24 列中每列的宽度来创建基本网格系统| string| '8' |
| readSpan| 只读模式下包含列的数量 参考Descriptions.Item| number | 1 |
| required| 是否必填| boolean | - |


## FormItemsOptionsProps
| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| label| 名称 | string(必传值)	| - |
| value| key | string 或 number(必传值)	| - |
| disabled| 是否禁用 | boolean	| - |
