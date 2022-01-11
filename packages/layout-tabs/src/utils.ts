import { Routers } from "@uiw-admin/router-control"

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (data: Routers[] = [], list: Routers[] = []) => {
  data.forEach((item) => {
    if (item.routes) {
      getRoutesList(item.routes, list)
    } else {
      list.push(item)
    }
  })
  return list;
}