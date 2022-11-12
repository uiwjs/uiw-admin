## 页面骨架组件

页面骨架组件，用于整个界面的loading效果，也可调整统一边距。

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
| 参数    | 说明         | 类型    | 默认值 |
| ------- | ------------ | ------- | ------ |
| loading | 页面加载状态 | Boolean | false  |

> 其余参数与[Uiw Loader](https://uiwjs.github.io/#/components/loader)相同


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.