import { parse, ParserOptions, ParserPlugin } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
<<<<<<< HEAD
import template from '@babel/template';
=======
>>>>>>> 9f51f8ed (feat:路由加载icon图标方式)
import { RoutersProps } from './interface';
import { getToUpperCase } from './index';

const pluginsConfig: ParserPlugin[] = [
  'jsx',
  'typescript',
  'classProperties',
  'dynamicImport',
  'exportDefaultFrom',
  'exportNamespaceFrom',
  'functionBind',
  'nullishCoalescingOperator',
  'objectRestSpread',
  'optionalChaining',
  'decorators-legacy',
];

const getAst = (content: string) => {
  const option: ParserOptions = {
    // 在严格模式下解析并允许模块声明
    sourceType: 'module',
    plugins: pluginsConfig,
  };
  return parse(content, option);
};

type NodeFun =
  | t.Expression
  | t.FunctionDeclaration
  | t.TSDeclareFunction
  | t.ClassDeclaration;

function getVarInit(node: NodeFun, path: NodePath<t.ExportDefaultDeclaration>) {
  // 判断  默认导出变量的方式
  if (t.isIdentifier(node) && path.scope.hasBinding(node.name)) {
    // 导出变量的方式 从 path scope 取值 bindings 里面对应  node.name 的变量内容
    let bindingNode = path.scope.getBinding(node.name)!.path.node;
    // 判断对象类型 是否是 VariableDeclarator
    if (t.isVariableDeclarator(bindingNode)) {
      // 取 这个里面的 init 对象
      bindingNode = bindingNode.init!;
    }
    return bindingNode as NodeFun;
  }
  return node;
}

// 使用 ts 判断
function getTSNode(node: any) {
  if (t.isTSTypeAssertion(node) || t.isTSAsExpression(node)) {
    return node.expression;
  } else {
    return node;
  }
}

export const getReactLazy = (path: string) => {
  // ------------------   创建 React.lazy ------------------
  // 第一步 创建 字符串外层 @/pages/TableList
  const callOne = t.callExpression(t.import(), [t.stringLiteral(path)]);
  // 第二步 创建  ArrowFunctionExpression
  const callTwo = t.arrowFunctionExpression([], callOne);

  const callThree1 = t.memberExpression(
    t.identifier('React'),
    t.identifier('lazy'),
  );
  // 第三步，value 值
  const callThree = t.callExpression(callThree1, [callTwo]);
  // const call4 = t.callExpression(callThree1, [callThree])
  // const callObj = t.objectProperty(t.identifier("a"), call4)
  // console.log("callObj", callObj)
  // ------------------   创建 React.lazy  结束 ------------------
  return callThree;
};

export const getJSX = (name: string) => {
  const one = t.jsxOpeningElement(t.jsxIdentifier(name), [], true);
  const two = t.jsxElement(one, null, []);
  return two;
};

export const IsModel = (content: string) => {
  let isModels = false;
  let modelNames;
  let isCreateModel = false;
  const ast = parse(content, {
    // 在严格模式下解析并允许模块声明
    sourceType: 'module',
    plugins: pluginsConfig,
  });

  traverse(ast, {
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      let node = path.node.declaration;
      node = getTSNode(node);
      node = getVarInit(node, path);
      node = getTSNode(node);
      if (t.isCallExpression(node) && node.arguments) {
        node = node.arguments[0] as NodeFun;
        isCreateModel = true;
      }

      // 如果 node 是一个对象
      // 并且 子集存在 state reducers, subscriptions, effects, name 则是一个 model 返回true
      if (
        t.isObjectExpression(node) &&
        node.properties.some((property) => {
          return [
            'state',
            'reducers',
            'subscriptions',
            'effects',
            'name',
          ].includes((property as any).key.name);
        })
      ) {
        isModels = true;
        const modeObj = node.properties.find(
          (property) => (property as any).key.name === 'name',
        );
        if (t.isObjectProperty(modeObj) && t.isStringLiteral(modeObj.value)) {
          modelNames = modeObj.value.value;
        }
      }
    },
  });
  return {
    isModels,
    modelNames,
    isCreateModel,
  };
};

// 转换成对象
export const stringToJson = (str: string) => {
  const json = new Function('return ' + str)();
  return json;
};

// ts/js 文件获取里面的 默认导出内容
export const getJSONData = (content: string) => {
  let isJSON = false;
  let jsonArr: RoutersProps[] = [];
  let jsonCode = '';
  const ast = getAst(content);
  let isReact = false;
  traverse(ast, {
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      let node = path.node.declaration;
      node = getTSNode(node);
      node = getVarInit(node, path);
      node = getTSNode(node);
      // 如果 node 是一个数组
      if (t.isArrayExpression(node)) {
        isJSON = true;
      }
    },
    ImportDefaultSpecifier(path) {
      const node = path.node;
      if (t.isImportDefaultSpecifier(node)) {
        if (node.local.name === 'React') {
          isReact = true;
        }
      }
    },
<<<<<<< HEAD
=======
    ObjectProperty(path) {
      // 判断父级的父级是否是数组 如果是数组则进行转换
      if (t.isArrayExpression(path.parentPath.parent)) {
        const { node } = path;
        if (
          (t.isStringLiteral(node.key) && node.key.value === 'component') ||
          (t.isIdentifier(node.key) && node.key.name === 'component')
        ) {
          if (t.isStringLiteral(node.value)) {
            const valus = node.value.value;
            if (['404', '403', '500'].includes(node.value.value)) {
              node.value = getJSX(`Exceptions${valus}`);
            } else {
              node.value = getReactLazy(valus);
            }
          }
        }
      }
    },
>>>>>>> 9f51f8ed (feat:路由加载icon图标方式)
  });
  jsonCode = generate(ast).code;
  return {
    isJSON,
    jsonArr,
    jsonCode: isReact ? jsonCode : `import React from "react"\n${jsonCode}`,
  };
};

<<<<<<< HEAD
/** 对字符串进行解析处理图标和 404、403、500 页面加载 */
export const babelPluginComponents = (content: string) => {
=======
/** 对字符串进行解析处理图标 */
export const babelPluginIcons = (content: string) => {
>>>>>>> 9f51f8ed (feat:路由加载icon图标方式)
  const ast = getAst(content);
  const iconsList: string[] = [];
  const importList: string[] = [];
  traverse(ast, {
    ImportSpecifier(path) {
      const node = path.node;
      if (t.isIdentifier(node.local)) {
        const values = node.local.name;
        importList.push(values);
      }
    },
    ObjectProperty(path) {
      // 判断父级的父级是否是数组 如果是数组则进行转换
      if (t.isArrayExpression(path.parentPath.parent)) {
        const { node } = path;
        // 对组件进行处理
        if (
          (t.isStringLiteral(node.key) && node.key.value === 'component') ||
          (t.isIdentifier(node.key) && node.key.name === 'component')
        ) {
          if (t.isStringLiteral(node.value)) {
            const valus = node.value.value;
            if (['404', '403', '500'].includes(node.value.value)) {
              node.value = getJSX(`Exceptions${valus}`);
            } else {
              node.value = getReactLazy(valus);
            }
          }
        }
        // 对icon图标进行处理
        if (
          (t.isStringLiteral(node.key) && node.key.value === 'icon') ||
          (t.isIdentifier(node.key) && node.key.name === 'icon')
        ) {
          if (t.isStringLiteral(node.value)) {
            const valus = node.value.value;
            const newValue = getToUpperCase(valus) + `_Icon`;
            node.value = getJSX(`${newValue}`);
            iconsList.push(newValue);
          }
        }
<<<<<<< HEAD
        // 对 navigate 进行转换
        if (
          (t.isStringLiteral(node.key) && node.key.value === 'navigate') ||
          (t.isIdentifier(node.key) && node.key.name === 'navigate')
        ) {
          if (t.isStringLiteral(node.value)) {
            const valus = node.value.value;
            const fn = template(valus);
            const newValue = fn();
            if (t.isExpressionStatement(newValue)) {
              node.value = newValue.expression;
            }
          }
        }
=======
>>>>>>> 9f51f8ed (feat:路由加载icon图标方式)
      }
    },
  });
  const jsonCode = generate(ast).code;

  // icon 去重
  let newIcon: string[] = Array.from(new Set(iconsList));
  importList.forEach((k) => {
    newIcon = newIcon.filter((ik) => ik !== k);
  });

  return {
    iconsList: newIcon,
    code: jsonCode,
  };
};
