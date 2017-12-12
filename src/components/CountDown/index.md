CountDown 倒计时
===

倒计时组件。

## 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    const time = Date.now() + 26400000;

    return (
      <CountDown
        onEnd={() => {
          console.log('onEnd')
        }}
        target={time}
        className="my-countdown"
      />
  }
}
```
<!--End-->

## API

### CountDown

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| target | 结束时间 | Enum {'Date', 'Timestamp', 'String'} | - |
| interval | 间隔时间 | Number | `1000` ms |
| onEnd | 结束时回调函数 | Function | - |
| format | 倒计时格式化函数 | Function(millSec) | 'hh:mm:ss' |
| className | CSS样式类名称 | String | - |
