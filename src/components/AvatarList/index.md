AvatarList 头像列表
===

一组用户头像，常用在项目/团队成员列表。可通过设置 size 属性来指定头像大小。

## 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <AvatarList size="small">
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" onClick={(e) => {
          console.log(e)
        }} />
        <AvatarList.Item />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
      </AvatarList>
  }
}
```
<!--End-->

## API

### AvatarList

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| size | 头像大小 | Enum {'small', 'default', 'large'} | - |

### AvatarList.Item

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| tips        | 悬浮提示文本 | String | - |
| src | 头像图片链接地址 | String | icon-user |
| onClick | 点击头像图片回调函数 | Function | - |
