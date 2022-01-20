// 模板
export default (routeStr: string) => {
  return `
// @ts-nocheck
import React from "react";
import {Exceptions404,Exceptions403,Exceptions500 } from "@uiw-admin/exceptions"
export default ${routeStr};
`;
};

export const getJsonToString = (key: string, value: string) => {
  if (key === "component" && ["403", "404", "500"].includes(value)) {
    return `<Exceptions${value} />`
  } else if (key === "component") {
    return `React.lazy(() => import('${value}'))`
  }
  return value
}