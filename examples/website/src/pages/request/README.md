# 网络请求
简介
对于中后台应用来说，很大一部分工作就在于请求后端的 CRUD 的接口，为进一步降低用户对请求层的感知，我们移除了默认生成的 utils/request.ts 文件，改成通过配置化的方式暴露给开发者做请求的配置和增强处理；同时通过业务总结出一套标准的接口结构规范，并提供统一的接口解析、错误处理的能力；后续将持续完善可配置项、提供垂直场景如列表、登录失效等解决方案。
## request

系统的请求基于axios进行了二次封装，参见[axios](https://axios-http.com/)

## 方法
基于restful规范，提供了2个方法：
- get 获取服务端数据，参数拼接在url上，以 query string 方式发送给后端
- post 新增数据，参数以body形式发送给后端


## 参数

| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| url | 请求地址 | string        | -      |
| options   | 请求配置，即axios的配置，     | Options         | -     |

### Options
| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| body | 请求传递给后端的参数 | any      | -      |
| requestType   | 数据格式    | 'form' 或 'json' 或 'urlencoded'        | -     |

## 调用方式
### ✨配和swr调用
> 如果已全局配置过swr,可不用传入request

```tsx
import React from 'react'
import useSWR from 'swr';
import { request } from "@uiw-admin/utils"

export default const Index = () => {
  const [ name ,setName ] = React.useState('')
  const { mutate } = useSWR(
    ['/api/selectById',{ method: 'POST', body: {id:1} }],
    request,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data && data.code === 200) {
          setName(data.data)
         }
      },
    }
  )

  React.useEffect(()=>mutate(false),[mutate])

  return <div>{name}</div>
}

```
### 在rematch中使用
> 在servers/index.js中
```ts
import { request } from "@uiw-admin/utils"

export const selectById  = (params:{id:string}) => request("/api/selectById",{ method:"POST",body: { ...params } })

```
> 在model/index.ts中
```ts
import { RootModel } from '@kkt/pro'
import { createModel } from '@rematch/core'
import { selectById } from '../servers'

const index = createModel<RootModel>()({
  name: 'index',
  state: {
    name:''
  },
  reducers: {
    updateState: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async selectById(payload: {id:string}) {
      const dph = dispatch
      const data = await selectById(payload)
      if (data.code === 200) {
        dph.index.dispatch({
          type:"updateState",
          payload:{
            name:data.data || ''
          }
        })
      }
    },
  }),
})
export default index

```

> 在页面中调用
```tsx
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState,Dispatch } from '@kkt/pro'

export default const Index = () => {
  const dispatch = useDispatch<Dispatch>()
  const stores = useSelector((state: RootState) => state) || {}
  const { index:{ name } } = stores
  React.useEffect(()=>{
     dispatch({
      type: 'index/selectById',
      payload:{id:1},
    })
  },[])
  return <div>{name}</div>
}

```

## ❤️贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.