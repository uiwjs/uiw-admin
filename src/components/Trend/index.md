Trend 趋势标记
===

在数值背后添加一个小图标来标识涨跌情况。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Trend flag="up">12%</Trend>
        <Trend flag="down" style={{ marginLeft: 8 }}>11%</Trend>
      </div>
    )
  }
}
```
<!--End-->


## API

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| colorful | 是否彩色标记 | Boolean | `true` |
| flag | 上升下降标识：`up`/`down` | Boolean | - |