// 模板
export default (routeStr: string, isType: 'ts' | 'js' | 'json' | boolean) => {
  if (['js', 'ts'].includes(isType as string)) {
    return `
// @ts-nocheck
import React from "react";
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
