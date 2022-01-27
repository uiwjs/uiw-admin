const path = require('path');
const fs = require('fs');
const ts = require('typescript');
const { transformFile } = require('@babel/core');

const kktrcTS = path.resolve(__dirname, '../examples/base/.kktrc.ts');
const kktrcJS = path.resolve(__dirname, '../examples/basejs/.kktrc.js');
const iskktrc = fs.existsSync(kktrcTS);
const iskktrcJS = fs.existsSync(kktrcJS);

const createKKtrcJS = async () => {
  if (iskktrc && !iskktrcJS) {
    transformFile(
      kktrcTS,
      {
        presets: ['@babel/preset-typescript'],
      },
      (err, result) => {
        if (err) {
          return;
        }
        try {
          const output = result.options.filename
            .replace(kktrcTS, kktrcJS)
            .replace(/\.(ts|tsx)$/, '.js');
          ts.sys.writeFile(output, result.code);
        } catch (error) {
          return;
        }
      },
    );
  }
};
createKKtrcJS();

// 更改 package.json name 名称
const pagPath = path.resolve(__dirname, '../examples/basejs/package.json');
const pagContent = fs.readFileSync(pagPath, { encoding: 'utf-8' });

const newPageContent = pagContent.replace(
  /"name": "@examples\/base"/,
  `"name": "@examples/basejs"`,
);
fs.writeFileSync(pagPath, newPageContent);
