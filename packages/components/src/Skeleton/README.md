## 页面骨架组件

页面loading组件，用于整个界面的loading效果， 与`uiw Loading`组件加了默认边距，后续也可以加更多功能。

## 用例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import { Skeleton } from '@uiw-admin/components'


const Demo = () => <Skeleton loading={true}>
  <div>children</div>
</Skeleton>


ReactDOM.render(<Demo />, _mount_);

```

## Props
| 参数 | 说明	| 类型	| 默认值 |
| --  | -- | -- | -- |
| loading | 页面加载状态	| Boolean	| false |

> 其余参数与[Uiw Loader](https://uiwjs.github.io/#/components/loader)相同