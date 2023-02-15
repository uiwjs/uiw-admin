/**
 * 转换 examples/base下除src目录下所有ts文件为js文件
 * */
const path = require('path');
const fs = require('fs');
const FS = require('fs-extra');
const ts = require('typescript');
const { transformFileAsync } = require('@babel/core');
const recursiveReaddirFiles = require('recursive-readdir-files');

const PWDEntry = path.resolve(__dirname, '../examples/base/');
const PWDOutPut = path.resolve(__dirname, '../examples/basejs/');

// 获取文件
const getFields = async () => {
  const dirToFiles = await recursiveReaddirFiles.default(PWDEntry, {
    exclude:
      /(node_modules|.uiw|build|dist|\.d\.ts|\.(test|spec)\.(ts|tsx|js|jsx))$/,
  });
  return dirToFiles;
};
// 转换ts tsx代码
const transform = async (paths) => {
  const result = await transformFileAsync(paths, {
    presets: ['@babel/preset-typescript'],
  });
  if (result) {
    const output = result.options.filename
      .replace(PWDEntry, PWDOutPut)
      .replace(/\.(ts|tsx)$/, '.js');
    ts.sys.writeFile(output, result.code);
  }
};
// 循环文件
const fieldMap = async () => {
  const fieldArr = (await getFields()) || [];
  fieldArr.forEach((item) => {
    if (item.ext && /ts|tsx/.test(item.ext)) {
      transform(item.path);
    } else {
      FS.copySync(item.path, item.path.replace(PWDEntry, PWDOutPut));
    }
  });
};
// 为了后面那一步 修改package.json
const ci = async () => {
  await fieldMap();
  // 更改 package.json name 名称
  const pagPath = path.resolve(__dirname, '../examples/basejs/package.json');
  const pagContent = fs.readFileSync(pagPath, { encoding: 'utf-8' });
  const newPageContent = pagContent.replace(
    /"name": "@examples\/base"/,
    `"name": "@examples/basejs"`,
  );
  fs.writeFileSync(pagPath, newPageContent);
};
ci();
