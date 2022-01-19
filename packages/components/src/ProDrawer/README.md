# 封装了button的Drawer弹框

<!--ProDrawer-->

```js
import { ProDrawer } from '@uiw-admin/components'
import React, { useState } from 'react';
import { Button } from 'antd'
const Demo = () => {
  const [ drawerVisible,setDrawerVisible ] = useState( [] )
  const [ isView ] = useState( false )
    return (
     <div>
       <ProDrawer
        title="编辑"
        visible={drawerVisible}
        onClose={()=>setDrawerVisible(false)}
        width={800}
        buttons={[
          { label: '取消', onPress: ()=>setDrawerVisible(false) },
          {
            label: '保存',
            onPress: ()=>{},
            show: !isView,
          },
        ]}
      >
        <div>demo</div>
      </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框</Button>
     </div>
  );
}
```

## 参数

#### 基础参数
[继承于uiw,请参考Drawer其余参数](https://uiwjs.github.io/#/components/drawer)

| 参数       | 说明                                                 | 类型          | 默认值 |
| :--------- | :--------------------------------------------------- | :------------ | :----- |
| visible | 显示隐藏                                              | boolean     |   -   |
| title    | 标题                            | string      |  ''    |
| onClose     | 关闭事件                                  | ()=>void       | null  |
| width    | Drawer宽                                       | number       | 1000   |
| buttons   | 按钮集合                                       | buttonsColumns       | []   |


#### buttonsColumns参数
[继承于uiw,请参考Button其余参数](https://uiwjs.github.io/#/components/button)

| 参数       | 说明                                                   | 类型                     | 默认值 |
| :--------- | :--------------------------------------------------- | :------------------------| :----- |
| label      | 按钮文本   | string                   |   ''   |
| onPress  | 按钮点击事件          | ()=>void  |   -    |
| show      | 	是否展示按钮       | boolean	 |  true


