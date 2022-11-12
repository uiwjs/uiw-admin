// 模板
export default (
  routeStr: string,
  iconsList: string[],
  isType: 'ts' | 'js' | 'json' | boolean,
) => {
  let reactTemp = `import React from "react"`;
  const iconStr = createIcons(iconsList);
  if (['js', 'ts'].includes(isType as string)) {
    // 1. 判断是否 已经存在  from "react"
    const isReact = !/\/\/(.+|)import React.+ from "react"/.test(routeStr);
    return `
// @ts-nocheck
${(!isReact && reactTemp) || ''}
import {Exceptions404,Exceptions403,Exceptions500 } from "@uiw-admin/exceptions"
${iconStr}
${routeStr};    
    `;
  }
  return `
// @ts-nocheck
import React from "react";
${iconStr}
import {Exceptions404,Exceptions403,Exceptions500 } from "@uiw-admin/exceptions"
export default ${routeStr};
`;
};

// 创建 icon 图标
export const createIcons = (iconsList: string[]) => {
  let iconStr = '';
  iconsList.forEach((key) => {
    const [icon] = key.split('_');
    iconStr += `import { ${icon} as ${key} } from "@uiw/icons/lib/${icon}";\n`;
  });
  return iconStr;
};
