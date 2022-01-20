# 基于uiw-form封装的业务表单

<!--ProForm-->

```js
import { ProForm } from '@uiw-admin/components'
import React, { useState } from 'react';
import { Button } from 'uiw'
const Demo = () => {
  const [ isView ] = useState( false )
    return (
       <ProForm
         formType="card"
         title="基础信息"
         buttons={[
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
| formType | 表单类型	  | 'collapse' 或 'card'		| 'card' |
| submitRef | 获取表单提交事件ref	  |  any		| - |


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
| span| 可以通过指定 24 列中每列的宽度来创建基本网格系统| string| '8' |
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