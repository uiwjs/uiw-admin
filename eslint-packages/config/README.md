# eslint config

uiw-admin 内置 eslint 规则配置


## 安装

```bash
npm i eslint-config-uiw-admin -D # yarn add eslint-config-uiw-admin -D
```

## 用法

1. 第一种：项目的根文件夹中创建一个名为`.eslintrc.json`以下内​​容的文件：

```js
module.exports ={
// ...
"extends": "uiw-admin"
}
```


2. 第二种：项目的`package.json`加入以下内容

```json
// ...
"eslintConfig": {
  "extends": [
    "uiw-admin"
  ]
}
// ...
```

> React17以上的版本配合babel可以单独使用 JSX 而无需引入 React
> https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

## 移除未使用的 React 引入

```
cd your_project
npx react-codemod update-react-imports

```

如果使用ts修改tsconfig.json文件

```json
"jsx": "react-jsx",
```


`eslint-config-uiw-admin` 您可以通过编辑`.eslintrc.json`文件来覆盖设置。在 [ESLint](https://eslint.org/docs/user-guide/configuring) 网站上了解更多关于配置 ESLint的信息。

## 默认规则

 1. [no-const-assign](https://eslint.org/docs/rules/no-const-assign#no-const-assign): 'error',
 2. [eqeqeq](https://eslint.org/docs/rules/eqeqeq#eqeqeq): 'error',
 3. [max-lines](https://eslint.org/docs/rules/max-lines#max-lines): ['error', { max: 500 }],
 4. [max-depth](https://eslint.org/docs/rules/max-depth#max-depth): ['error', 4],
 5. [no-empty-function](https://eslint.org/docs/rules/no-empty-function#no-empty-function): 'error',
 6. [no-empty](https://eslint.org/docs/rules/no-empty#no-empty): 'error',
 7. [no-var](https://eslint.org/docs/rules/no-var#no-var): 'error',
 8. [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define#no-use-before-define): 'off',
 9. [@typescript-eslint/no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-use-before-define.ts): ['error']