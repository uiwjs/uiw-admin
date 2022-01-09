import { Routers } from "@uiw-admin/router-control"
export function getMenu(data: Routers[] = []) {
  let treeList: Routers[] = []
  data.forEach((item) => {
    let obj = { ...item }
    if (item.routes) {
      const child = getMenu(obj.routes)
      obj.routes = child
    }
    if (item.path) {
      const { element, ...rest } = obj
      treeList.push({ ...rest })
    }
  })
  return treeList;
}
