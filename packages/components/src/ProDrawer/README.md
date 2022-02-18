# 业务Drawer弹框

<!--ProDrawer-->

## 基本使用
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [ drawerVisible,setDrawerVisible ] = useState( false )
  const [ isView ] = useState( false )
    return (
     <div>
       <ProDrawer
        title="标题"
        visible={drawerVisible}
        onClose={()=>setDrawerVisible(false)}
        width={800}
        buttons={[
          { label: '取消', type:"primary" , onClick: ()=>setDrawerVisible(false) },
          {
            label: '保存',
            type:"primary",
            onClick: ()=>{},
            show: !isView
          },
        ]}
      >
        <div>demo</div>
      </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框</Button>
     </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

#### 基础参数
[继承于uiw,请参考Drawer其余参数](https://uiwjs.github.io/#/components/drawer)

| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| visible | 显示隐藏 | boolean        | -      |
| title   | 标题     | string         | -     |
| onClose | 关闭事件 | ()=>void       | null   |
| width   | Drawer宽 | number         | 1000   |
| buttons | 按钮集合 | ButtonsProps[] | []     |


#### ButtonsProps
[继承于uiw,请参考Button其余参数](https://uiwjs.github.io/#/components/button)

| 参数     | 说明         | 类型    | 默认值 |
| :------- | :----------- | :------ | :----- |
| label    | 按钮文本     | string  | -      |
| show     | 是否展示按钮 | boolean | true   |
| path     | 权限         | string  | -      |
| disabled | 是否禁用     | boolean | false  |




## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.