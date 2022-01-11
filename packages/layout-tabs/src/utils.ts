import { RoutersProps } from "@uiw-admin/router-control"
import {
  Location
} from "react-router-dom";
import { matchPath, } from "react-router"

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (data: RoutersProps[] = [], list: RoutersProps[] = []) => {
  data.forEach((item) => {
    if (item.routes) {
      getRoutesList(item.routes, list)
    } else {
      list.push(item)
    }
  })
  return list;
}

export const getRender = (routeListData: RoutersProps[], location: Location) => {
  return routeListData.find((item) => {
    if (location && location.pathname && item.path) {
      return matchPath({ path: item.path, }, location.pathname)
    }
    return false
  })
}
