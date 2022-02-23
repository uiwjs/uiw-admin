// 模板
export default (routeStr: string, isType: 'ts' | 'js' | 'json' | boolean) => {
  // from "react"
  let reactTemp = `import React from "react"`;
  if (['js', 'ts'].includes(isType as string)) {
    // 1. 判断是否 已经存在  from "react"
    const isReact = !/\/\/(.+|)import React.+ from "react"/.test(routeStr);
    return `
// @ts-nocheck
${(!isReact && reactTemp) || ''}
import {Exceptions404,Exceptions403,Exceptions500 } from "@uiw-admin/exceptions"
${routeStr};    
    `;
  }
  return `
// @ts-nocheck
import React from "react";
import {Exceptions404,Exceptions403,Exceptions500 } from "@uiw-admin/exceptions"
export default ${routeStr};
`;
};

export const getJsonToString = (key: string, value: string) => {
  if (key === 'component' && ['403', '404', '500'].includes(value)) {
    return `<Exceptions${value} />`;
  } else if (key === 'component') {
    return `React.lazy(() => import('${value}'))`;
  }
  return value;
};
