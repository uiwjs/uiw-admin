# ProForm 表单

基于[uiw Form](https://uiwjs.github.io/#/components/form)封装。
- ✅  支持原uiw/Form的提交方式并可以更简洁的生成表单
- ✅  支持多个表单同时提交
- ✅  支持动态添加表单
- ✅  支持只读模式表单

## 何时使用
- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

<!--ProForm-->
## 类型
> 通过formType表单类型
### 卡片类型
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
const Demo = () => {
    return (
     <div>
       <ProForm
         title="卡片表单"
         formType="card"
         onChange={(initial, current) => {
          console.log('onChange', initial, current);
         }}
         colProps={{span:12}}
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
             },
              {
              label: 'radio',
              widget: 'radio',
              key: 'radio',
              widgetProps: {
                disabled: false
              },
              option: [
                { label: '男', value: 'man' },
                { label: '女', value: 'girl' }
              ],
            },
          ]}
       />
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### 折叠类型
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
const Demo = () => {
    return (
     <div>
       <ProForm
         title="折叠表单"
         formType="collapse"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
             },
          ]}
       />
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### 纯表单类型
> pure类型下将不再展示title
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
const Demo = () => {
    return (
     <div>
       <ProForm
         formType="pure"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
             },
          ]}
       />
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## 布局
### 基本布局
> 通过span(继承于uiw/Graid/Col)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
const Demo = () => {
    return (
     <div>
       <ProForm
         formType="pure"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
             },
               {
               label: 'input',
               key: 'input2',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"12",
             },
               {
               label: 'input',
               key: 'input3',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"12",
             },
             {
               label: 'input',
               key: 'input4',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"8",
             },
             {
               label: 'input',
               key: 'input5',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"8",
             },
             {
               label: 'input',
               key: 'input6',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"8",
             },
          ]}
       />
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
### 只读布局
> 通过readSpan(继承于uiw/Descriptions.Item)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
const Demo = () => {
    return (
     <div>
       <ProForm
         readOnly={true}
         formType="pure"
         formDatas={ [
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:3,
             },
               {
               label: 'input',
               key: 'input2',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:2,
             },
               {
               label: 'input',
               key: 'input3',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:1,
             },
             {
               label: 'input',
               key: 'input4',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:1,
             },
             {
               label: 'input',
               key: 'input5',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:1
             },
             {
               label: 'input',
               key: 'input6',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               readSpan:1,
             },
          ]}
       />
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```



## 基本使用
> 与uiw/form使用保持一致
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProForm } from '@uiw-admin/components'
import { Button,Notify,Slider } from 'uiw'
const Demo = () => {
  const [state,setState] = React.useState({})
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
    <>
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
          setState(current)
          // 调用请求接口
        }}
         formDatas={[
             {
               label: 'input',
               key: 'input',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               help:"input不能为空",
               required:true,
             },
             {
              label: 'textarea',
              key: 'textarea',
              widget: 'textarea',
              span:24,
              colstyle:{ maxWidth:800 }
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
            },
            {
              label: 'searchTree',
              key: 'searchTree',
              widget: 'searchTree',
              span: '24',
              readSpan: 3,
              widgetProps:{
                allowClear:true,
                onSearch:(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue),
                onChange:(selectedAll, selectd, isChecked)=>console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)
              },
              initialValue:[],
              option:[
                {
                  label: '上海市',
                  key: '1-0-0',
                  children:[
                    { label: '黄浦区', key: '1-0-1' },
                    { label: '卢湾区', key: '1-0-2' },
                    {
                      label: '徐汇区',
                      key: '1-0-3',
                      children:[
                        { label: '半淞园路街道', key: '1-1-0' },
                        { label: '南京东路街道', key: '1-2-0' },
                        { label: '外滩街道', key: '1-3-0' },
                      ]
                    },
                  ]
                }
              ]
            }
          ]}
       />
        <div style={{ maxWidth: 200 }}>
          <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
        </div>
    </>
  )
}
ReactDOM.render(<Demo />, _mount_);
```

## 通过useForm
> (提交,重置,设置)
> - 我们可以通过useForm注册form表单实例进行验证;重置;设置。(submitvalidate;getError;getFieldValues;setFields;resetForm...)
> - 我们也可以通过传递rules配置验证规则(支持正则,required,回调验证)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [state,setState] = React.useState({})
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
               required:true,
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
          const value = form.getFieldValues?.()
          setState(value)
         // 调用请求接口
       }}
       >
        保存
      </Button>
      <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={()=>{
          form.resetForm()
          setState({})
        }}
       >
        重置
      </Button>
       <Button 
        style={{ marginTop:10,width:80 }} 
        type="primary" 
        onClick={()=> {
          form.setFields({input:'1234'})
          setState({input:'1234'})
        } }
       >
        设置
      </Button>
      <div style={{ maxWidth: 500 }}>
        <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## 多个表单
### 基础提交
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [state,setState] = React.useState({})
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
               required:true,
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
               required:true,
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
             {
               label: 'input3',
               key: 'input3',
               widget: 'input',
               initialValue: '',
               widgetProps: {},
               span:"24",
               required:true,
               rules: [
                { 
                  validator: (value = '') => {
                    if(!value) return "请输入"
                    return true
                  },
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
          setState(params)
          // 调用请求接口
       }}>
         保存
      </Button>
      <div style={{ maxWidth: 500 }}>
        <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

### promise提交
> (通过validateFieldsAndGetValue方法先验证后获取值)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [state,setState] = React.useState({})
  const form = useForm()
  const form2 = useForm()

  const asyncAwaitFormList = (arr=[]) => {
    return (
      arr && arr.length>0 &&  Promise.all(arr).then((vals) =>{
        return vals
      })
    )
  };

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
               required:true,
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
               required:true,
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
          // 触发验证获取值
          const values = await asyncAwaitFormList([form?.validateFieldsAndGetValue(),form2?.validateFieldsAndGetValue()])
          let obj = {};
          values.forEach((item) => Object.assign(obj, item));
          setState(obj)
          // 调用请求接口
       }}>
         保存
      </Button>
      <div style={{ maxWidth: 500 }}>
        <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
## 动态添加表单
### uiw/form提交
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState,useRef } from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button,Card } from 'uiw'

const Demo = () => {
  const form = useForm()
  const formRefList = useRef([])
  const [state,setState] = useState([])
  const [items,setItems] = useState([])
  const [option,setOption] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  // 过滤删除为null的ref
  const formList = formRefList?.current.filter(n => n) || []

   const asyncAwaitFormList = (arr=[]) => {
    return (
      arr && arr.length>0 &&  Promise.all(arr).then((vals) =>{
        return vals
      })
    )
  };

  const addItems = (attr)=>[
     {
      label: '司机手机号',
      key: 'phone',
      widget: 'input',
      initialValue: '',
      required:true,
      rules: [
        { required: true, message: '请输入' },
      ]
    },
    {
      label: 'searchSelect',
      key: 'searchSelect',
      widget: 'searchSelect',
      option: attr.searchSelect.option,
      widgetProps: {
        mode:"multiple",
        onSearch: attr.searchSelect.onSearch,
        loading: attr.searchSelect.loading,
        allowClear: true,
        showSearch: true,
        style:{ width:"100%" }
     },
    },
  ]

  const handleAddFormItems = (type,idx)=>{
    if(type==='add'){
       items.push(addItems)
    }
    if(type==='delete'){
      items.splice(idx,1)
    }
    setItems([...items])
  }

   // 模拟搜索
  const handleSearch = ( type = '' , name = '' ) => {
    if (type === 'searchSelect') {
      setLoading(true)
      setOption([
        { value: 1, label: '苹果' },
        { value: 2, label: '西瓜' },
        { value: 3, label: '香蕉' },
        { value: 4, label: '东北大冻梨' },
      ])
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  const handleSave = async ()=>{
    const validateList = formList.map(itm=>itm.validateFieldsAndGetValue()) || []
    const values = await asyncAwaitFormList(validateList)
    setState(values)
    console.log("values",values)
    // 调用接口
  }

  return (
     <div>
      {items.map((item, idx) => {
          return (
           <Card 
            title={`表单${idx + 1}`} 
            key={idx} 
            style={{ marginBottom:10 }} 
            extra={<span onClick={handleAddFormItems.bind(this,'delete',idx)}>删除</span>}
            >
             <ProForm
              ref={(e) =>(formRefList.current[idx] = e)}
              // 表单类型
              formType="pure"
              form={form}
              cardProps={{
                noHover: true,
              }}
              // 更新表单的值
              buttonsContainer={{ justifyContent: 'flex-start' }}
              formDatas={item({
                searchSelect:{
                  option:option,
                  onSearch: handleSearch.bind(this,'searchSelect'),
                  loading:loading
                }
              })}
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
        onClick={() => handleSave()}>
        保存
      </Button>
      <div style={{ maxWidth: 500 }}>
        <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
### promise提交
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState,useRef } from 'react';
import { ProForm,useForm } from '@uiw-admin/components'
import { Button,Card } from 'uiw'

const Demo = () => {
  const form = useForm()
  const formRefList = useRef([])
  const [state,setState] = useState([])
  const [items,setItems] = useState([])
  const [option,setOption] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  // 过滤删除为null的ref
  const formList = formRefList?.current.filter(n => n) || []

   const asyncAwaitFormList = (arr=[]) => {
    return (
      arr && arr.length>0 &&  Promise.all(arr).then((vals) =>{
        return vals
      })
    )
  };

  const addItems = (attr)=>[
     {
      label: '司机手机号',
      key: 'phone',
      widget: 'input',
      initialValue: '',
      required:true,
      rules: [
        { required: true, message: '请输入' },
      ]
    },
    {
      label: 'searchSelect',
      key: 'searchSelect',
      widget: 'searchSelect',
      option: attr.searchSelect.option,
      widgetProps: {
        mode:"multiple",
        onSearch: attr.searchSelect.onSearch,
        loading: attr.searchSelect.loading,
        allowClear: true,
        showSearch: true,
        style:{ width:"100%" }
     },
    },
  ]

  const handleAddFormItems = (type,idx)=>{
    if(type==='add'){
       items.push(addItems)
    }
    if(type==='delete'){
      items.splice(idx,1)
    }
    setItems([...items])
  }

   // 模拟搜索
  const handleSearch = ( type = '' , name = '' ) => {
    if (type === 'searchSelect') {
      setLoading(true)
      setOption([
        { value: 1, label: '苹果' },
        { value: 2, label: '西瓜' },
        { value: 3, label: '香蕉' },
        { value: 4, label: '东北大冻梨' },
      ])
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  const handleSave = async ()=>{
    const validateList = formList.map(itm=>itm.validateFieldsAndGetValue()) || []
    const values = await asyncAwaitFormList(validateList)
    setState(values)
    console.log("values",values)
    // 调用接口
  }

  return (
     <div>
      {items.map((item, idx) => {
          return (
           <Card 
            title={`表单${idx + 1}`} 
            key={idx} 
            style={{ marginBottom:10 }} 
            extra={<span onClick={handleAddFormItems.bind(this,'delete',idx)}>删除</span>}
            >
             <ProForm
              ref={(e) =>(formRefList.current[idx] = e)}
              // 表单类型
              formType="pure"
              form={form}
              cardProps={{
                noHover: true,
              }}
              // 更新表单的值
              buttonsContainer={{ justifyContent: 'flex-start' }}
              formDatas={item({
                searchSelect:{
                  option:option,
                  onSearch: handleSearch.bind(this,'searchSelect'),
                  loading:loading
                }
              })}
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
        onClick={() => handleSave()}>
        保存
      </Button>
      <div style={{ maxWidth: 500 }}>
        <pre style={{ padding: '10px 0 0 10px' }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
## 只读模式
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { ProForm,useForm } from '@uiw-admin/components'
import { formatter } from 'uiw'
import React, { useState } from 'react';
const Demo = () => {
  const [ queryInfo ] = useState({
    input:"Jason",
    textarea:"Jason",
    select:"Jason",
    dateInputsecond: '2021-1-21 23:59:59',
    dateInput: '2021-1-21',
    monthPicker: '2021-1',
    timePicker: '2021-1-21 22:59:59',
    searchSelect:["Jason"],
    rate:2
  })
  const form = useForm()
    return (
       <ProForm
        form={form}
         readOnly={true}
         title="只读模式"
         formType="pure"
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
               option:[{label:"Jason",value:"Jason"}],
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
              widgetProps:{
                mode:"multiple",
              },
              option:[{label:"Jason",value:"Jason"}],
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



## 自定义表单组件

> 给组件传`value`, `onChange`  一个是值 一个是组件更改数据回调

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { ProForm,useForm } from '@uiw-admin/components'
import { formatter, Input, Button } from 'uiw'
import React, { useState } from 'react';

const Inputs = ({value, onChange}) => {
  return <>
    <Button>不要输错哦</Button>
    <Input placeholder="请输入内容"  value={value} onChange={e => { onChange(e.target.value) }}  />
  </>
}

const Demo = () => {
  const [ queryInfo ] = useState({
    input:"Jason",
  })
  const form = useForm()
    return (
       <ProForm
        customWidgetsList={{inputs: Inputs}}
        form={form}
         title="只读模式"
         formType="pure"
         formDatas={
           [
             {
               label: '自定义组件',
               key: 'input',
               widget: 'inputs',
               // 只读模式下支持读取React.ReactNode
               initialValue: queryInfo.input,
             },
           ]}
       />
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## Props
> 继承uiw-Form

| 参数               | 说明                                              | 类型                                                                     | 默认值 |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------ | ------ |
| formDatas          | 表单项集合                                        | FormItemsProps[]                                                         | []     |
| onSubmit           | 提交表单回调 需配合btns，继承uiw/form submit      | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |
| onChange           | 表单值变化回调，继承uiw/form onChange             | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |
| onSubmitError           | 调用 onSubmit 抛出的任何错误。从字段名称返回对象映射。 继承uiw/form onSubmitError             | (error:`any`) => void |  -     |
| showSaveButton     | 展示提交按钮                                      | boolean                                                                  | false  |
| showResetButton    | 展示重置按钮                                      | boolean                                                                  | false  |
| saveButtonProps    | 提交按钮api;继承于uiw/button                      | ButtonProps                                                                  | -  |
| resetButtonProps   | 重置按钮api;继承于uiw/button                      | ButtonProps                                                                  | -  |
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
| colProps           | uiw`Col` API,公共属性                              | colProps                                                                 |         |

### FormItemsProps
> 继承uiw-FormItem

| 参数         | 说明                                                          | 类型                    | 默认值 |
| ------------ | ------------------------------------------------------------- | ----------------------- | ------ |
| label        | 表单项名称                                                    | string                  | -      |
| key          | 表单项key                                                     | string                  | -      |
| widget       | 表单项类型                                                    | sring                   | -      |
| initialValue | 表单项值，可以是默认值                                        | any 或 any[]            | -      |
| option       | 数据化选项内容, widget为 radio、checkbox、select 生效           | OptionsProps[] | -      |
| widgetProps  | 表单组件其余参数,参考uiw表单组件                              | any                     | -      |
| hide         | 是否显示                                                      | boolean                 | true   |
| span         | 非只读模式下,可以通过指定 24 列中每列的宽度来创建基本网格系统 | string                  | '8'    |
| readSpan     | 只读模式下包含列的数量 参考Descriptions.Item                  | number                  | 1      |
| required     | 是否必填                                                      | boolean                 | -      |
| rules     | 验证规则                                                      | RulesProps[]                 | -      |
| colstyle     | Col(uiw/Grid)样式                                         | React.CSSProperties                | -      |


### RulesProps
| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| message    | 验证提示消息     | string           | -      |
| pattern    | 验证正则      | RegExp | -      |
| validator | 自定义验证规则 | (value: any \| any[]) => boolean\|string | - | 
| required | 是否必填 | boolean | - | 

### OptionsProps
| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| label    | 名称     | string(必传值)           | -      |
| value    | key      | string 或 number(必传值) | -      |
| disabled | 是否禁用 | boolean                  | -      |

## useForm

### response
> - v5.2.14(~~clickRef~~) 
> - v5.2.18(~~formStateList~~) (~~setFormStateList~~) (~~errorsRef~~) 

| 参数     | 说明     | 类型                     | 默认值 |
| -------- | -------- | ------------------------ | ------ |
| submitvalidate | 表单验证 | ()=>void | - | 
| resetForm | 重置表单值 | ()=>void | - | 
| onSubmit | 表单提交 | (e: React.FormEvent)=>void | - |   
| getFieldValues | 获取表单值 | ()=>void | - |  
| getError | 获取表单错误 | ()=>void | - |  
| setFields | 设置表单的值 | (fields: FormState['current'])=>void | [] |      
| validateFieldsAndGetValue | 验证并获取值 | ()=>Promise`<any>` | [] |   

## 注意
> [继承于uiw/Form,请参考uiw/From以及表单组件](https://uiwjs.github.io/#/components/form),
 默认集成了`Input`,`Checkbox`,`Switch`,`Textarea`,`DateInput`,`TimePicker`,
 `MonthPicker`,`SearchSelect`,`Select`,`Radio`,`selectMultiple`,`Rate`,`Upload`。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
