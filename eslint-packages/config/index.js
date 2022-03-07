const fs = require('fs');
const path = require('path');
const isTsProject = fs.existsSync(path.join(process.cwd(), './tsconfig.json'));

const isJsMoreTs = async (path = 'src') => {
  const fg = require('fast-glob');
  const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 });
  const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 });
  return jsFiles.length > tsFiles.length;
};

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return;
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['react-app', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-const-assign': 'error',
    eqeqeq: 'error',
    'max-lines': ['error', { max: 500 }],
    'max-depth': ['error', 4],
    'no-empty-function': 'error',
    'no-empty': 'error',
    'no-var': 'error',
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
  },
};
