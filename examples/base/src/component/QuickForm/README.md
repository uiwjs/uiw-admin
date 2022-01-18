```tsx
import React, { useRef } from 'react';
import QuickForm from 'component/QuickForm'
const Demo = ()=>{
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
            type: 'input',
            name: 'age',
            label: "年龄",
            attributes: {
              placeholder: '请输入年龄',
            },
            hide: true
          },
        ]}
      />
  )
}
   
```