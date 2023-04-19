# 全局数据状态管理

> `kktp`配置 `initModel` 生效

  - 简化 @rematch/* 状态管理公共进行初始化;
  - 约定是到 model 组织方式，不用手动注册 model
  - 文件名即 name，model 内如果没有声明 name，会以文件名作为 name
  - 内置 @rematch/loading，直接 loading 字段使用即可
  - [更多 @rematch/core api](https://rematchjs.org/docs/api-reference)

## kktp配置文件

```ts
// .kktprc.ts
export default {
  // ...
  initModel:true,
}
```

## store  

> 由 @rematch/core 的 init 初始化生成的状态存储

## dispatch

> 更新状态方法


## 约定式的 model 组织方式

符合以下规则的文件会被认为是 model 文件，

  1. src/models 下的文件
  2. src/pages 下，子目录中 models 目录下的文件
  3. src/pages 下，子目录中 models.ts 文件

```txt

src
  models/a.ts
  pages
    foo/models/b.ts
    test/models.ts

```

## model 校验

```ts
import { createModel, RootModel, ModelDefault } from '@kkt/pro'

//------- createModel 方式 ------ 
// 通过
export default createModel()({name:"foo"})
export default createModel()({reducers:"foo"})

// ts 类型方式 通过
export default createModel<RootModel>()({name:"foo"})
export default createModel<RootModel>()({reducers:"foo"})

// 通过
const models = createModel()({reducers:"foo"})
export default models


//----- 直接一个对象的方式 ---- 不建议使用 ------

// 通过
export default { name: 'foo' };
export default { reducers: 'foo' };

// 通过
const model = { name: 'foo' };
export default model;

// ts 类型方式 通过
const model: ModelDefault = { name: 'foo' };
export default model;

```


## 类型

通过 @kkt/pro 导出类型：`FullModel`，`Store`，`AddModel`，`Dispatch`，`RootState`，`ModelDefault`，`RootModel`。

## model 用例

```ts
import { RootModel, createModel } from '@kkt/pro'
import { selectById } from '../servers/demo'

const demo = createModel<RootModel>()({
  name: 'demo',
  state: {
    drawerVisible: false,
    tableType: '',
    queryInfo: {},
    isView: false,
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async selectById(payload: any) {
      const dph = dispatch
      const data = await selectById(payload)
      if (data.code === 200) {
        dph.demo.updateState({
          drawerVisible: true,
          queryInfo: data.data || {},
        })
      }
    },
    clean() {
      const dph = dispatch
      dph.demo.updateState({
        drawerVisible: false,
        tableType: '',
        queryInfo: {},
        isView: false,
      })
    },
  }),
})
export default demo


```


## page 用例

```tsx
import React from 'react'
import { Dispatch, RootState, useDispatch,useSelector } from '@kkt/pro';

const Demo = () => {
  const dispatch = useDispatch<Dispatch>()
  // 获取 models 中所有的状态
  const store = useSelector( (state: RootState) => state )
  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    })
    dispatch.demo.updateState({ a: 1 })
  }
  return (
    <React.Fragment>
      <button onClick={()=>updateData({c:12})} >点击</button>
    </React.Fragment>
  )
}
export default Demo

```

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
