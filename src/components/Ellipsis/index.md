Ellipsis 文本省略
===

文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。


### length用法

通过设置 length 属性指定文本最长长度，如果超过这个长度会自动截取。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div className={styles.box}>
        <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</p>
        <Ellipsis length={10}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
      </div>
    )
  }
}
```
<!--End-->

### tootip用法

通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</p>
        <Ellipsis length={10} tooltip={true}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
      </div>
    )
  }
}
```
<!--End-->

### lines用法

通过设置 lines 属性指定文本行数。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</p>
        <div style={{ width: 200 }}>
          <Ellipsis lines={3} >亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
        </div>
      </div>
    )
  }
}
```
<!--End-->



## API

|参数 | 说明 | 类型 | 默认值|
|----|------|-----|------|
|tooltip | 移动到文本展示完整内容的提示 | boolean | - |
|length | 在按照长度截取下的文本最大字符数，超过则截取省略 | number | - |
|lines | 在按照行数截取下最大的行数，超过则截取省略 | number | - |
