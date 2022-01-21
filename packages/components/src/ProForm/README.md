# 基于uiw-form封装的业务表单

<!--ProForm-->

### 基本使用(与uiw/form使用保持一致)
```js
import { ProForm } from '@uiw-admin/components'
import React, { useState } from 'react';
import { Button } from 'uiw'
const Demo = () => {
    return (
       <ProForm
         formType="card"
         title="基础信息"
         showSaveButton
         showResetButton
         onSubmit={(initial, current) => {
          const errorObj: any = {};
          if (!current?.lastName) {
            errorObj.lastName = '名字不能为空';
          }
          if (Object.keys(errorObj).length > 0) {
            const err: any = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！' });
            throw err;
          }
          // 调用请求接口
        }}
         onChange={(initial: any, current: any) => {} )}
         formDatas={
           [
             {
               label: '姓氏',
               key: 'firstName',
               widget: 'input',
               initialValue: '',
               widgetProps: {}
               // 单独一行
               span:"24"
             }
           ]}
       />
  );
}
```

### 通过submitRef进行表单提交
```js
import { ProForm } from '@uiw-admin/components'
import React, { useState,useRef } from 'react';
import { Button } from 'uiw'
const Demo = () => {

  const submitRef = useRef<any>()

    return (
      <React.Fragment>
       <ProForm
         submitRef={submitRef}
         title="基础信息"
         onSubmit={(initial, current) => {
          const errorObj: any = {};
          if (!current?.lastName) {
            errorObj.lastName = '名字不能为空';
          }
          if (Object.keys(errorObj).length > 0) {
            const err: any = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！' });
            throw err;
          }
          // 调用请求接口
        }}
         formDatas={
           [
             {
               label: '姓氏',
               key: 'firstName',
               widget: 'input',
               initialValue: '',
               widgetProps: {}
             }
           ]}
       />
       <Button onClick={()=>submitRef?.current?.click()}>保<Button>
      </React.Fragment>
  );
}
```

### 只读模式
```js
import { ProForm } from '@uiw-admin/components'
import React, { useState } from 'react';
const Demo = () => {
  const [ isView ] = useState( true )
    return (
       <ProForm
         readOnly={isView}
         title="基础信息"
         // 只读模式下调整 一行的 DescriptionItems 数量,其余参数参考uiw/Descriptions
         readOnlyProps={{ columns:3 }}
         formDatas={
           [
             {
               label: '姓名',
               key: 'firstName',
               widget: 'input',
               initialValue: '周政',
               // 只读模式下单独一行
               readSpan:3
             }
           ]}
       />
  );
}
```


## Porps

| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| formDatas | 表单项集合	| FormItemsProps[]		| [] |
| onSubmit | 提交表单回调 需配合btns，继承uiw/form submit	| (initial: Record<string, any>, current: Record<string, any>) => void		| - |
| onChange | 表单值变化回调，继承uiw/form onChange	| (initial: Record<string, any>, current: Record<string, any>) => void	| - |
| showSaveButton | 展示提交按钮	|  boolean		| false |
| showResetButton | 展示重置按钮	|  boolean		| false |
| saveButtonProps | 提交按钮api;继承于uiw/button	|  boolean		| false |
| resetButtonProps | 重置按钮api;继承于uiw/button	|  boolean		| false |
| buttonsContainer  | buttons容器样式(可调整button布局)	| React.CSSProperties		| - |
| title | 标题	  | string 或 React.ReactNode		| - |
| formType | 表单类型	  | 'collapse' 或 'card' 或 'pure'		| 'card' |
| submitRef | 获取表单提交事件ref	  |  any		| - |
| readOnly | 是否是只读模式模式	  |  boolean		| false |
| readOnlyProps | 只读模式 参考Descriptions参数	  |  DescriptionsProps		| {} |

## FormItemsProps
| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| label| 表单项名称 | string	| - |
| key| 表单项key| string	| - |
| widget| 表单项类型| typeof commonWidgetsList	| - |
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

## 注意
- [继承于uiw/form,请参考uiw/from以及表单组件](https://uiwjs.github.io/#/components/from)
- 组件默认集成了Input,Checkbox,Switch,Textarea,DateInput,TimePicker,MonthPicker,SearchSelect,Select,Radio。可通过配置widget注册自定义组件