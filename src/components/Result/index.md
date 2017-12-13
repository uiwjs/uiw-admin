Result 处理结果
===

结果页用于对用户进行的一系列任务处理结果进行反馈。


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <PageHeaderLayout title="处理结果" content="结果页用于对用户进行的一系列任务处理结果进行反馈。">
        <Card bordered={false}>
          <Result
            icon="circle-check"
            title="温馨提示"
            description="“我爱办公”一个为爱共享的免费租赁平台！"
            extra="免费注册、发布、管理您的房源"
            actions={[{ text: '立即预订', icon: 'like-o', onClick: () => { } }, { text: '免费预约', type: 'primary', icon: 'heart-off', onClick: () => { } }]} />
        </Card>
        <Card bordered={false} style={{ marginTop: 20, width: 600, marginBottom: 20 }}>
          <Result
            icon={<Icon type="heart-on" />}
            title="温馨提示"
            description="“我爱办公”一个为爱共享的免费租赁平台！"
            extra="免费注册、发布、管理您的房源"
            actions={<Button block type="primary"  > 立即预订 <Icon type="heart-on" /> </Button>} />
        </Card>
      </PageHeaderLayout>
    )
  }
}
```
<!--End-->

## API

### Result

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| icon | 上部显示图标 | ReactNode\|String | - |
| title | 标题 | String | - |
| description | 详细描述| String | - |
| extra | 其他信息 | String | - |
| actions | 操作按钮 | Array\|ReactNode | - |

### Result.actions

详细参数参考[Button](https://uiw-react.github.io/#/cn/button)
