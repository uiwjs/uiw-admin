DescriptionList 描述列表
===

成组展示多个只读字段，常见于详情页的信息展示。

## 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    const {Description} = DescriptionList;
    return (
      <DescriptionList title="标题" column={4} >
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
    </Description>
    </DescriptionList>
  }
}
```
<!--End-->

## API

### DescriptionList

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| layout | 布局 | Enum{'horizontal', 'vertical'} | horizontal |
| column | 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 | number(1 <= col <= 4) | 3 |
| title | 列表标题 | String | - |

### DescriptionList.Description

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| term | 列表项标题 | String | - |
