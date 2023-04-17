# 公共异常组件

[![npm version](https://img.shields.io/npm/v/@uiw-admin/exceptions.svg?label=@uiw-admin/exceptions)](https://www.npmjs.com/package/@uiw-admin/exceptions)

> 1. 403 页面
> 2. 404 页面
> 3. 500 页面

## 安装

```bash
  npm i @uiw-admin/exceptions --save # yarn add @uiw-admin/exceptions
```

## 403页面预览

```jsx mdx:preview
import { Exceptions403 } from '@uiw-admin/exceptions'
import React from 'react'

const Demo = () => <Exceptions403 />

export default Demo
```

## 404页面预览

```jsx mdx:preview
import { Exceptions404 } from '@uiw-admin/exceptions'
import React from 'react'

const Demo = () => <Exceptions404 />

export default Demo
```

## 500页面预览

```jsx mdx:preview
import { Exceptions500 } from '@uiw-admin/exceptions'
import React from 'react'

const Demo = () => <Exceptions500 />

export default Demo
```

### ExceptionsProps

| 参数 | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| path | 按钮跳转链接 | `string` | `/home` |
| btnText | 按钮文字 | `string` | `返回首页` |

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.