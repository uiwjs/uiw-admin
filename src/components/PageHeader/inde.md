PageHeader 页头
===

页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。


### 404

404 页面。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <PageHeaderLayout title="仪表盘" showBreadcrumb={false}>
        <h2>这里是内容</h2>
      </PageHeaderLayout>
    )
  }
}
```
<!--End-->


## API

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| renderBreadcrumb | 面包屑，`false` | ReactNode | `true` |
| title | 页面标题区域 | ReactNode | - |
| content | 内容区| ReactNode | - |
