```tsx
import React, { useRef } from 'react';
import QuickForm from 'component/QuickForm'
const Demo = ()=>{
  const baseRef = useRef();
  const queryInfo = {}
  return (
     <QuickForm
        ref={baseRef}
        title="测试QuickForm"
        onItemChange={async (name, value) => console.log('name', name, 'value', value)}
        formDatas={[
          {
            type: 'input',
            name: 'firstName',
            label: "姓氏",
            initValue: queryInfo?.firstName,
            attributes: {
              placeholder: '请输入姓氏',
            },
            rules: { required: '请输入姓氏' },
          },
          {
            type: 'input',
            name: 'lastName',
            label: "名字",
            initValue: queryInfo?.lastName,
            attributes: {
              placeholder: '请输入名字',
            },
            rules: { required: '请输入名字' },
          },
           {
            type: 'select',
            name: 'select',
            label: "年龄",
            initValue: queryInfo?.select,
            options: [
              { value: 1, label: '苹果' },
              { value: 2, label: '西瓜' },
              { value: 3, label: '香蕉' },
              { value: 4, label: '东北大冻梨' },
            ],
            attributes: {
              placeholder: '请选择水果',
            }
          },
        ]}
      />
  )
}
   
```