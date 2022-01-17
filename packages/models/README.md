---
models 状态管理
---

## Installation

```bash
npm i @uiw-admin/models --save
```

## 说明

> 1. 简化 @rematch/* 状态管理公共进行初始化;
> 2. 为了简化 models 书写方式
> 3. [更多 @rematch/core api](https://rematchjs.org/docs/api-reference)

## store  

> 由 @rematch/core 的 init 初始化生成的状态存储

## dispatch

> 更新状态方法

## createModels 

> 把单个 `model` 添加进 `store` 中的 `models`

```ts

import { createModels } from "@uiw-admin/models"

const demoModel = {
  name: "demo",
  state: {
    drawerVisible: false,
    current: 1,
    pageSize: 20,
    dataSource: [],
    total: 0,
    filter: {},
    tableType: ''
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({}),
}
// 把 model 添加 store 的 models 中 
//  "demo" 为 demoModel 中name 有可能不写的问题
createModels(demoModel,"demo")

```