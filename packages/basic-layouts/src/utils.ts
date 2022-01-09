import React from 'react';
import { Routers } from "@uiw-admin/router-control"

// export interface Routers {
//   path: string;
//   key?: string;
//   redirect?: string;
//   name?: string;
//   icon?: string;
//   component?: () => Promise<React.ReactNode>;
//   models?: string[];
//   routes?: Routers[];
// }

export function getTreeList(data: Routers[] = [], treeList: Routers[] = []) {
  data.forEach((node) => {
    if (node.routes) {
      treeList = getTreeList(node.routes, treeList);
    } else if (node.path) {
      node.key = node.path;
      treeList.push(node);
    }
  });
  return treeList;
}

export function getMenu(data: Routers[] = []) {
  let treeList: Routers[] = []
  data.forEach((item) => {
    let obj = { ...item }
    if (item.children) {
      const child = getMenu(obj.children)
      obj.children = child
    }
    if (item.path) {
      const { element, ...rest } = obj
      treeList.push({ ...rest })
    }
  })
  return treeList;
}
