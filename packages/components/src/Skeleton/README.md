## 页面骨架组件

统一规定页面loading方式 页面边距

## 用例

```js
import { Skeleton } from '@uiw-admin/components'


<Skeleton loading={true}>
  <div>children</div>
</Skeleton>

```

## Props
| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| loading | 页面加载状态	| Boolean	| false |

其余参数与[Uiw Loader](https://uiwjs.github.io/#/components/loader)相同