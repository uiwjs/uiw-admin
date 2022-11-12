import { RoutersProps, ModelType, RouteModels } from './interface';
import path from 'path';
import fs from 'fs';
export * from './babel';
export * from './rematch';

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

/** 转 首字母大写 */
export const getToUpperCase = (valus: string) => {
  return valus
    .split('-')
    .map((str) => str.replace(/^\S/, (s) => s.toUpperCase()))
    .join('');
};

export const getJsonToString = (key: string, value: string) => {
  if (key === 'component' && ['403', '404', '500'].includes(value)) {
    return `<Exceptions${value} />`;
  } else if (key === 'icon') {
    const Com = getToUpperCase(value);
    return `<${Com} />`;
  } else if (key === 'component') {
    return `React.lazy(() => import('${value}'))`;
  }
  return value;
};
