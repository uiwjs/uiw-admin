# Drawer 抽屉
屏幕边缘滑出的浮层面板,集成权限button按钮。

基于[uiw/Drawer](https://uiwjs.github.io/#/components/drawer)和[uiw/Button](https://uiwjs.github.io/#/components/button)封装
- [x] 支持原uiw/Drawer和uiw/Button参数
- [x] 支持快速生成button按钮
- [x] button按钮的权限控制

## 何时使用
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
<!--ProDrawer-->

## 基础抽屉
> 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [ drawerVisible,setDrawerVisible ] = useState( false )
    return (
     <div>
       <ProDrawer visible={drawerVisible} onClose={()=>setDrawerVisible(false)}>
        <div>基础抽屉</div>
       </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框</Button>
     </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```


## 预设宽度
> 可通过width控制Drawer宽(默认800px),也可通过size控制
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [ drawerVisible,setDrawerVisible ] = useState( false )
  const [ drawerVisible2,setDrawerVisible2 ] = useState( false )
  const [ drawerVisible3,setDrawerVisible3 ] = useState( false )
    return (
     <div>
       <ProDrawer visible={drawerVisible2} onClose={()=>setDrawerVisible2(false)}>
        <div>800px</div>
       </ProDrawer>
       <ProDrawer width={1000} visible={drawerVisible} onClose={()=>setDrawerVisible(false)}>
        <div>1000px</div>
       </ProDrawer>
       <ProDrawer size="small" visible={drawerVisible3} onClose={()=>setDrawerVisible3(false)}>
        <div>size-small</div>
       </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible2(true)}>打开弹框(800px)</Button>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框(1000px)</Button>
      <Button type="primary" onClick={()=>setDrawerVisible3(true)}>打开弹框(size-small)</Button>
     </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
## 抽屉按钮
>通过传递buttons生成按钮,按钮继承了uiw/buttons,我们可以通过show控制按钮显示与隐藏
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
        visible={drawerVisible}
        onClose={()=>setDrawerVisible(false)}
        buttons={[
          { label: '取消', type:"primary" , onClick: ()=>setDrawerVisible(false) },
          { label: '保存',type:"primary",show:false },
        ]}
      >
        <div>集成了Button</div>
      </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框</Button>
     </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## 表单抽屉
> 配和ProForm使用(新增;编辑;查看等业务)
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ProDrawer,ProForm } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
  const [ drawerVisible,setDrawerVisible ] = useState( false )
  const [ isView,setIsView] = useState( false )
    return (
     <div>
       <ProDrawer 
          visible={drawerVisible} 
          onClose={()=>setDrawerVisible(false)}
          buttons={[{ label: isView?'表单模式':'查看模式', type:"primary" , onClick:()=>setIsView(!isView)}]}
        >
         <ProForm
          readOnly={isView}
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
       </ProDrawer>
      <Button type="primary" onClick={()=>setDrawerVisible(true)}>打开弹框</Button>
     </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## 抽屉按钮权限
> 我们可以通过path与登陆时获取的按钮权限菜单进行匹配,从而控制按钮的权限
```jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Button } from 'uiw'
const Demo = () => {
    return (
       <ProDrawer
        visible={drawerVisible}
        onClose={()=>setDrawerVisible(false)}
        buttons={[
          { label: '取消', type:"primary" , onClick: ()=>setDrawerVisible(false) },
          {
            label: '保存',
            type:"primary",
            onClick: ()=>{},
            path:"/demo/drawer"
          },
        ]}
      >
        <div>集成了Button</div>
      </ProDrawer>
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