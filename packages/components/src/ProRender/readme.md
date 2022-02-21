## ProRender

与[XRender](https://x-render.gitee.io/) 使用基本一致，文档参考他的就行

## XRender

- 加入组件新属性`readType="description"`,预览的时候，与别的页面预览一致
- 编写`schamea`的时候，`select`可以直接传`options`，用于复杂的逻辑(基本上很少用到)
- 兼容性问题，无法使用虚拟列表，可使用别的列表
- 可以传`softHidden: true` 隐藏error message占位元素
