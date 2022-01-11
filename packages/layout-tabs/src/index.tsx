import React from "react";
import { Tabs } from "uiw"
import { Routers, } from "@uiw-admin/router-control"
import { getRoutesList } from "./utils"
import { matchPath, } from "react-router"
import "./styles/index.css"
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const getRender = (routeListData: Routers[], location: any) => {
  return routeListData.find((item) => {
    if (location && location.pathname && item.path) {
      return matchPath({ path: item.path, }, location.pathname)
    }
    return false
  })
}

interface LayoutTabsProps {
  routes: Routers[]
}
const LayoutTabs = (props: LayoutTabsProps) => {
  const { routes } = props
  const location = useLocation()
  const navigate = useNavigate()

  const routeListData = getRoutesList(routes)
  const [pathArr, setPathArr] = React.useState<Routers[]>([])
  const Current: Routers = getRender(routeListData, location)

  React.useEffect(() => {
    if (!Current) {
      // 没找到跳转
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
      const match = matchPath({ path: item.path, }, location.pathname);
      if (match) {
        item.location = location;
      }
      return item;
    });
    setPathArr(() => [...tabData]);
  }, [location.search]);

  return <div className="uiw-layout-tabs-warp">
    <Tabs
      type="card"
      activeKey={location.pathname}
      onTabClick={(tab, key, e) => {
        const tabs = pathArr.find((item) => item.location.pathname === tab)
        if (tabs && location.pathname !== tab) {
          navigate(`${tab}${tabs.location.search}`, { state: tabs.location.state })
        }
      }}
    >
      {pathArr.map((item) => {
        return <Tabs.Pane key={item.location.pathname} label={item.name} />
      })}
    </Tabs>
    <div className="uiw-layout-tabs-body"  >
      {pathArr.map((item, index) => {
        const match = matchPath({ path: item.path, }, location.pathname)
        return <div
          key={item.path || ""}
          style={{ display: match ? "block" : "none" }}
        >
          {item.element}
        </div>
      })}
    </div>
  </div>
}
export default LayoutTabs