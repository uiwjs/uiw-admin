# 设置页面标题

简化设置页面标题，建议在项目入口设置

## 何时使用

需要设置页面标题使用

## 安装

```bash
npm i @uiw-admin/document-title --save # yarn add @uiw-admin/document-title
```

## 案例1

```jsx
import React from 'react';
import DocumentTitle from '@uiw-admin/document-title';

const Home = ()=>{
  return (
    <DocumentTitle title="UIW Admin">
      <h1>Home, sweet home.</h1>
    </DocumentTitle>
  )
}

export default Home

```

## 案例2

```jsx
import React from 'react';
import DocumentTitle from '@uiw-admin/document-title';

const Home = ()=>{
  return (
  <React.Fragment>
    <DocumentTitle title="UIW Admin" />
    <h1>Home, sweet home.</h1>
  </React.Fragment>)
}

export default Home

```

## 预览

![](https://user-images.githubusercontent.com/59959718/155087122-475a33bc-a2d4-419b-a192-27d96818ed5c.jpg)

## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.