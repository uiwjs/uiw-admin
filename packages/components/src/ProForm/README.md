# 基于uiw-form封装的业务表单

## 注意
> [继承于uiw/form,请参考uiw/from以及表单组件](https://uiwjs.github.io/#/components/form),
 默认集成了`Input`,`Checkbox`,`Switch`,`Textarea`,`DateInput`,`TimePicker`,`MonthPicker`,`SearchSelect`,`Select`,`Radio`,`selectMultiple`,`Rate`,`Upload`。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--ProForm-->

### 基本使用(与uiw/form使用保持一致)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProForm } from '@uiw-admin/components'
import { Button,Notify,Slider } from 'uiw'
const Demo = () => {
   const [option] = React.useState([
    { value: 1, label: '苹果' },
    { value: 2, label: '西瓜' },
    { value: 3, label: '香蕉' },
    { value: 4, label: '东北大冻梨' },
    { value: 5, label: '香蕉' },
    { value: 6, label: '葡萄' },
    { value: 6, label: '哈密瓜' },
   ])
   const [loading, setLoading] = React.useState(false)
   // 模拟搜索
  const handleSearch = ( type = '' , name = '' ) => {
    if (type === 'searchSelect') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }
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
              widgetProps: {
                format: 'YYYY-MM-DD'
              },
            },
            {
              label: '年月',
              key: 'monthPicker',
              widget: 'monthPicker',
               widgetProps: {
                format: 'YYYY-MM'
              },
            },
            {
              label: '时分秒',
              key: 'timePicker',
              widget: 'timePicker',
            },
            {
              label: 'searchSelect',
              key: 'searchSelect',
              widget: 'searchSelect',
              option: option,
              widgetProps: {
                mode:"multiple",
                onSearch: handleSearch.bind(this,'searchSelect'),
                onChange: (value) => console.log('changevalue', value),
                onSelect: (value) => console.log('selectvalue', value),
                loading: loading,
                allowClear: true,
                showSearch: true,
                style:{ width:"100%" }
              },
            },
            {
              label: '评分',
              key: 'rate',
              widget: 'rate',
            },
            // 只读模式下支持读取React.ReactNode
            {
              label: '自定义组件',
              key: 'slider',
              widget: 'slider',
              readSpan: 2,
              span:"24"
            },
            {
              label: '上传组件',
              key: 'upload',
              widget: 'upload',
              span: '24',
              readSpan: 3,
              widgetProps: {
                uploadType: 'card',
                multiple: true,
                maxNumber: 2,
              showFileIcon: {
                showPreviewIcon: true,
                showRemoveIcon: true,
              },
            },
              rules: [{ required: true, message: '请上传' }],
            },
          ]}
       />
  )
}
ReactDOM.render(<Demo />, _mount_);
```

### 通过form api进行表单(提交,重置,设置)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {

  const form = useForm()

    return (
     <div>
       <ProForm
         form={form}
         title="通过form api进行表单提交"
         formType="card"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
               rules: [
                { pattern: new RegExp(/[1][3][0-9]{9}$/), message: "请输入正确手机号" },
               ]
             },
          ]}
       />
       <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={async()=>{
          // 触发验证
          await form.submitvalidate();
          // 获取错误信息
          const errors = form.getError()
          if(errors && Object.keys(errors).length > 0 ) return
         // 调用请求接口
       }}
       >
        保存
      </Button>
      <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={()=> form.resetForm() }
       >
        重置
      </Button>
       <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={()=> form.setFields({input:'1234'}) }
       >
        设置
      </Button>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### 多表单同时进行提交
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const form = useForm()
  const form2 = useForm()
  return (
     <div>
       <ProForm
         form={form}
         title="表单一"
         formType="card"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
               rules: [
                { required: true, message: '请输入' },
                { pattern: new RegExp(/[1][3][0-9]{9}$/), message: "请输入正确手机号" },
               ]
             },
          ]}
       />
        <div style={{ marginTop:15 }} />
        <ProForm
         formType="pure"
         form={form2}
         title="表单二"
         formType="card"
         formDatas={ [
             {
               label: 'input2',
               key: 'input2',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
               rules: [
                { 
                  validator: (value = '') => {
                    if(!value) return false
                    return true
                  },
                  message: "请输入"
                },
               ]
             },
          ]}
       />
       <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={ async ()=>{
          // 触发验证
          await form?.submitvalidate()
          await form2?.submitvalidate()
          // 获取错误信息
          const errors = form.getError()
          const errors2 = form2.getError()

          if(errors && Object.keys(errors).length > 0 ) return
          if(errors2 && Object.keys(errors2).length > 0 ) return
          // 获取表单值
          const value = form.getFieldValues?.()
          const value2 = form2.getFieldValues?.()
          const params = {...value,...value2}
          console.log("params",params)
          // 调用请求接口
       }}>
         保存
      </Button>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
### 只读模式
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { ProForm,useForm } from '@uiw-admin/components'
import { formatter } from 'uiw'
import React, { useState } from 'react';
const Demo = () => {
  const [ queryInfo ] = useState({
    input:"周政",
    textarea:"周政",
    select:"周政",
    dateInputsecond: '2021-1-21 23:59:59',
    dateInput: '2021-1-21',
    monthPicker: '2021-1',
    timePicker: '2021-1-21 22:59:59',
    searchSelect:["周政"],
    rate:2
  })
  const form = useForm()
    return (
       <ProForm
        form={form}
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
              initialValue: queryInfo?.dateInputsecond
            },
            {
              label: 'dateInput',
              key: 'dateInput',
              widget: 'dateInput',
              widgetProps: {
                // 年月日
                format: 'YYYY-MM-DD'
              },
              initialValue: queryInfo?.dateInput
            },
            {
              label: 'monthPicker',
              key: 'monthPicker',
              widget: 'monthPicker',
              widgetProps: {
                // 年月
                format: 'YYYY-MM'
              },
              initialValue: queryInfo?.monthPicker
            },
            {
              label: 'timePicker',
              key: 'timePicker',
              widget: 'timePicker',
              initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker)
            },
            {
              label: 'searchSelect',
              key: 'searchSelect',
              widget: 'searchSelect',
              option:[{label:"周政",value:"周政"}],
              initialValue:queryInfo.searchSelect || []
            },
            {
              label: 'rate',
              key: 'rate',
              widget: 'rate',
              initialValue:queryInfo.rate
            },
            {
              label: 'upload',
              key: 'upload',
              widget: 'upload',
              widgetProps:{
                uploadType: 'card',
              },
              initialValue: [
                {
                  dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4',
                  name: 'uiw.png',
                },
              ]
            },
           ]}
       />
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### 表单数组进行提交(获取errors仍有问题待测试)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState,useRef } from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button,Card } from 'uiw'
const Demo = () => {
  const form = useForm()
  const formRefList = useRef([])
  const [items,setItems] = useState([])
  // 过滤删除为null的ref
  const formList = formRefList?.current.filter(n => n) || []

  const handleAddFormItems = (type,idx)=>{
    if(type==='add'){
       items.push([
        {
          label: '司机手机号',
          key: 'phone',
          widget: 'input',
        },
      ])
    }
    if(type==='delete'){
      items.splice(idx,1)
    }
    setItems([...items])
  }

  return (
     <div>
      {items.map((item, idx) => {
          return (
           <Card 
            title={`表单${idx + 1}`} 
            key={idx} 
            style={{ marginBottom:10 }} 
            extra={<span onClick={handleAddFormItems.bind(this,'delete',idx)}>删除</span>}>
             <ProForm
              ref={(e) =>(formRefList.current[idx] = e)}
              // 表单类型
              formType="pure"
              type="array"
              form={form}
              style={{ marginBottom: 10 }}
              cardProps={{
                noHover: true,
              }}
              // 更新表单的值
              buttonsContainer={{ justifyContent: 'flex-start' }}
              formDatas={item}
              // 提交后验证
              onSubmit={(initial, current) => {
                const errorObj = {};
                if (!current?.phone) {
                  errorObj.phone = 'input不能为空';
                }
                if (Object.keys(errorObj).length > 0) {
                const err = new Error();
                err.filed = errorObj;
                throw err;
              }
              // 获取值
              const params = (formList.map(value => ({ ...value?.getFieldValues() }))) || [];
              console.log('params', params)
              // 调用请求接口
            }}
            />
          </Card>
          )
        })}
       <Button 
        style={{ marginTop:10,width:80 }}  
        type="primary"  
        onClick={handleAddFormItems.bind(this,'add')}>
         新增
        </Button>
       <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={()=>{
          // 触发验证
          formList.forEach(item => item.submitvalidate())
        }}>
        保存
      </Button>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```


## Porps  继承uiw-Form

| 参数               | 说明                                              | 类型                                                                     | 默认值 |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------ | ------ |
| formDatas          | 表单项集合                                        | FormItemsProps[]                                                         | []     |
| onSubmit           | 提交表单回调 需配合btns，继承uiw/form submit      | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |
| onChange           | 表单值变化回调，继承uiw/form onChange             | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |
| onSubmitError           | 调用 onSubmit 抛出的任何错误。从字段名称返回对象映射。 继承uiw/form onSubmitError             | (error:`any`) => void |  -     |
| showSaveButton     | 展示提交按钮                                      | boolean                                                                  | false  |
| showResetButton    | 展示重置按钮                                      | boolean                                                                  | false  |
| saveButtonProps    | 提交按钮api;继承于uiw/button                      | boolean                                                                  | false  |
| resetButtonProps   | 重置按钮api;继承于uiw/button                      | boolean                                                                  | false  |
| buttonsContainer   | buttons容器样式(可调整button布局)                 | React.CSSProperties                                                      | -      |
| title              | 标题                                              | string                                                                   | -      |
| formType           | 表单类型                                          | 'collapse' 或 'card' 或 'pure'                                           | 'card' |
| form               | useForm返回值,替换原有submitRef作用可进行表单验证 | UseFormProps 必传                                                              | -      |
| readOnly           | 是否是只读模式模式                                | boolean                                                                  | false  |
| readOnlyProps      | 只读模式 参考Descriptions参数                     | DescriptionsProps                                                        | {}     |
| customWidgetsList  | 可配置自定义组件                                  | { [key: string]: any }                                                   | {}     |
| cardProps          | uiw`Card` API                                     | CardProps                                                                | {}     |
| collapseProps      | uiw`Collapse` API                                 | CollapseProps                                                            | {}     |
| collapsePanelProps | uiw`Collapse.Panel` API                           | CollapsePanelProps                                                       | {}     |

## FormItemsProps 继承uiw-FormItem
| 参数         | 说明                                                          | 类型                    | 默认值 |
| ------------ | ------------------------------------------------------------- | ----------------------- | ------ |
| label        | 表单项名称                                                    | string                  | -      |
| key          | 表单项key                                                     | string                  | -      |
| widget       | 表单项类型                                                    | sring                   | -      |
| initialValue | 表单项值，可以是默认值                                        | any 或 any[]            | -      |
| option       | 数据化选项内容, widget为 radio、checkbox、select 生效           | FormItemsOptionsProps[] | -      |
| widgetProps  | 表单组件其余参数,参考uiw表单组件                              | any                     | -      |
| hide         | 是否显示                                                      | boolean                 | true   |
| span         | 非只读模式下,可以通过指定 24 列中每列的宽度来创建基本网格系统 | string                  | '8'    |
| readSpan     | 只读模式下包含列的数量 参考Descriptions.Item                  | number                  | 1      |
| required     | 是否必填                                                      | boolean                 | -      |
| rules     | 验证规则                                                      | rulesProps[]                 | -      |

## FormItemsOptionsProps
| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| label    | 名称     | string(必传值)           | -      |
| value    | key      | string 或 number(必传值) | -      |
| disabled | 是否禁用 | boolean                  | -      |

## UseFormProps
| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| submitvalidate | 表单验证 | ()=>void | - | 
| resetForm | 重置表单值 | ()=>void | - | 
| onSubmit | 表单提交 | ()=>void | - |   
| getFieldValues | 获取表单值 | ()=>void | - |  
| getError | 获取表单错误 | ()=>void | - |  
| setFields | 设置表单的值 | ()=>void | [] |      

## rulesProps
| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| message    | 验证提示消息     | string           | -      |
| pattern    | 验证正则      | RegExp | -      |
| validator | 自定义验证规则 | (value: any | any[]) => boolean | - | 
| required | 是否必填 | boolean | - | 

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.