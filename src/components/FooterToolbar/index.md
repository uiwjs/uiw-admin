FooterToolbar 底部工具栏
===

固定在底部的工具栏。


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <FooterToolbar
      extra={<Icon type="uiw" style={{ fontSize: 24 }} />}
      style={{ width: 'calc(100% - 290px)' }}
      actions={(<div><Button> 立即预订 <Icon type="heart-off" /> </Button> <Button type="primary"  > 立即预订 <Icon type="heart-on" /> </Button></div>)}
    >
      <div style={{ textAlign: 'center', fontSize: 12 }}>
        <span>&copy;<a href="https://www.woaibangong.com" style={{ color: '#3d90f2' }}>我爱办公</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span>App下载</span>
      </div>
    </FooterToolbar>
    )
  }
}
```
<!--End-->

## API

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| extra | 额外信息，向左对齐 | ReactNode\|String | - |
| actions | 操作按钮，向右对齐 | ReactNode\|String | - |
| children | 子组件 | ReactNode | - |
| className | CSS类名称 | ReactNode | - |
| extraClassName | extra CSS类名称 | ReactNode | - |
| actionClassName | actions CSS类名称 | ReactNode | - |
