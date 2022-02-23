import { parse, ParserOptions } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { RoutersProps, ModelType, RouteModels } from './interface';
import path from 'path';
import fs from 'fs';
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
    plugins: [
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
    ],
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
  const option: ParserOptions = {
    // 在严格模式下解析并允许模块声明
    sourceType: 'module',
    plugins: [
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
    ],
  };
  const ast = parse(content, option);
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
    ArrayExpression(path) {
      let elements = path.node.elements;
      elements.forEach((item) => {
        if (t.isObjectExpression(item) && item.properties) {
          item.properties.forEach((objItem) => {
            if (
              t.isObjectProperty(objItem) &&
              ((t.isStringLiteral(objItem.key) &&
                objItem.key.value === 'component') ||
                (t.isIdentifier(objItem.key) &&
                  objItem.key.name === 'component'))
            ) {
              if (t.isStringLiteral(objItem.value)) {
                const valus = objItem.value.value;
                if (['404', '403', '500'].includes(objItem.value.value)) {
                  objItem.value = getJSX(`Exceptions${valus}`);
                } else {
                  objItem.value = getReactLazy(valus);
                }
              }
            }
          });
        }
      });
    },
  });
  jsonCode = generate(ast).code;
  return {
    isJSON,
    jsonArr,
    jsonCode,
  };
};

// 判断 路由的 component 路径指向是文件还是目录  如果是文件则去除最后一项 变成目录
// 拼接项目 path.resolve(process.cwd(), 'src') 地址 进行判断数据
// 最后生成 一个路由映射 model 文件 路径 的json文件
/**
 * @description 生成的映射json文件格式
 * {
 *  path:[
 *    {name:"",path:"....path"}
 *  ]
 * }
 * */
/** 把数组扁平化   */
export const getRoutesList = (
  data: RoutersProps[] = [],
  list: RoutersProps[] = [],
) => {
  data.forEach((item) => {
    if (item.routes) {
      getRoutesList(item.routes, list);
    } else {
      const { component } = item;
      // item
      if (
        typeof component === 'string' &&
        !['404', '500', '403', '*'].includes(component)
      ) {
        // 地址拼接
        const pathStr = component.replace(/^@/, '');
        // 判断 地址是文件还是目录
        let newPath = path.join(process.cwd(), 'src', pathStr);
        if (fs.existsSync(newPath)) {
          const stats = fs.statSync(newPath);
          if (stats && stats.isFile()) {
            const pathArr = newPath.split('/');
            pathArr.pop();
            newPath = pathArr.join('/');
          }
        }
        list.push({
          ...item,
          component: newPath,
        });
      }
    }
  });
  return list;
};

export const getRouteMapModels = (
  routes: RoutersProps[],
  modelsData: ModelType[],
) => {
  const routeModels: RouteModels = {};
  const newRoutes = getRoutesList(routes);
  let rootPath = path.join(process.cwd(), 'src');
  const rootPathModels = modelsData
    .filter((item) => rootPath === item.location)
    .map((ites) => ({ path: `${ites.srcPath}`, name: ites.name }));
  routeModels['/'] = rootPathModels || [];

  newRoutes.forEach((item) => {
    const { path, component } = item;
    const modelsArr = modelsData
      .filter((ite) => ite.location === component)
      .map((ites) => ({ path: `${ites.srcPath}`, name: ites.name }));
    if (path && modelsArr) {
      if (routeModels[path]) {
        routeModels[path].push(...modelsArr);
      } else {
        routeModels[path] = modelsArr;
      }
    } else if (path) {
      routeModels[path] = [];
    }
  });
  return routeModels;
};
