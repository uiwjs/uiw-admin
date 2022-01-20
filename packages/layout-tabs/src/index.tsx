import React from "react";
import { Tabs } from "uiw"
import { RoutersProps, } from "@uiw-admin/router-control"
import { getRoutesList, getRender } from "./utils"
import { matchPath, } from "react-router"
import "./styles/index.css"
import {
  useNavigate,
  useLocation,
  Location
} from "react-router-dom";

interface LayoutTabsProps {
  /** 子集路由 */
  routes: RoutersProps[]
}
const LayoutTabs = (props: LayoutTabsProps) => {
  const { routes } = props
  const location = useLocation()
  const navigate = useNavigate()
  const [pathArr, setPathArr] = React.useState<(RoutersProps & { location: Location })[]>([])

  const routeListData = getRoutesList(routes)
  const Current = getRender(routeListData, location) as RoutersProps

  React.useEffect(() => {
    /** 在这边加路由权限 控制就好了 */
    // isAuth 这边加这个属性
    // 1. 如果加了这个属性 说明  跳转需求进行权限校验
    // 2. 如果没加这个属性 说明  跳转不用权限校验
    // 3. 加了这个属性为 false 说明 这个路由是没权限的，需要跳转403页面
    // 4. 加了这个属性为 true 说明 这个路由是有权限的，跳转正常页面
    // 5. 如果也没有页面 直接 跳转404页面
    if (!Current) {
      // 没找到跳转
      navigate("/404")
      return;
    }
    if (Current && Current.redirect) {
      navigate(Current.redirect)
      return;
    }
    const curr = getRender(pathArr, location)
    if (!curr) {
      setPathArr(pre => pre.concat([{ ...Current, location }]).filter((item) => !!item))
    }
  }, [location.pathname])

  React.useMemo(() => {
    const tabData = [...pathArr].map((item) => {
      if (item.path) {
        const match = matchPath({ path: item.path, }, location.pathname);
        if (match) {
          item.location = location;
        }
      }
      return item;
    });
    setPathArr(() => [...tabData]);
  }, [location.search]);

  return <div className="uiw-layout-tabs-warp">
    <Tabs
      type="card"
      activeKey={location.pathname}
      onTabClick={(keys) => {
        const tabs = pathArr.find((item) => item.location.pathname === keys)
        if (tabs && location.pathname !== keys) {
          navigate(`${keys}${tabs.location.search}`, { state: tabs.location.state, replace: true })
        }
      }}
    >
      {pathArr.map((item) => {
        return <Tabs.Pane key={item.location.pathname} label={item.name} />
      })}
    </Tabs>
    <div className="uiw-layout-tabs-body"  >
      {pathArr.map((item, index) => {
        const match = matchPath({ path: item.path as string, }, location.pathname)
        return <div
          key={item.location.pathname}
          style={{
            display: match ? "block" : "none",
            overflow: 'auto',
          }}
        >
          {item.element}
        </div>
      })}
    </div>
  </div>
}
export default LayoutTabs