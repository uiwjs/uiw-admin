GlobalFooter 全局页脚
===

页脚属于全局导航的一部分，作为对顶部导航的补充，通过传递数据控制展示内容。

## 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <GlobalFooter
      links={[{
        id: '1',
        text: '我爱办公',
        href: 'https://www.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="uiw" />)
      }, {
        id: '2',
        text: 'APP下载',
        href: 'https://download.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="appstore" />)
      }, {
        id: '3',
        text: 'Smart管理平台',
        href: 'https://smart.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="android" />)
      }]}
      copyright="我爱办公"
    >
    </GlobalFooter>)
  }
}
```
<!--End-->

## API

### GlobalFooter

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| links | 超链接对象 | ReactNode\|Array | - |
| copyright | 版权 | ReactNode\|String | - |
| children |子组件 | ReactNode | - |
