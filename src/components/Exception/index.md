Exception 异常
===

异常页用于对页面特定的异常状态进行反馈。通常，它包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。


### 404

404 页面。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <Exception type="404" />
    )
  }
}
```
<!--End-->

### 500

500 页面。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <Exception type="500" />
    )
  }
}
```
<!--End-->

### 403

403 页面。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <Exception type="403" />
    )
  }
}
```
<!--End-->


## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| type        | 页面类型，若配置，则自带对应类型默认的 `title`，`desc`，`img`，此默认设置可以被 `title`，`desc`，`img` 覆盖 | Enum {'403', '404', '500'} | - |
| title       | 标题     | ReactNode  | -    |
| desc        | 补充描述    | ReactNode  | -    |
| img         | 背景图片地址     | string  | -    |
| actions     | 建议操作，配置此属性时默认的『返回首页』按钮不生效    | ReactNode  | -    |
| linkElement | 定义链接的元素，默认为 `a`，可传入React-Router的`Link` | string\|ReactElement | - |
