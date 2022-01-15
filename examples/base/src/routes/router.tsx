import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

const BasicLayout = Loadable(React.lazy(() => import("../layouts/BasicLayout")))

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    models: ["login"],
    component: React.lazy(() => import("../pages/login"))
  },
  {
    path: "/",
    models: ["global", "Doc/doc", "demo"],
    component: <BasicLayout />,
    routes: [
      {
        index: true,
        redirect: '/tableList'
      },
      {
        path: "/tableList",
        name: "查询表格",
        component: React.lazy(() => import("../pages/TableList")),
      },
      {
        path: "/home",
        name: "首页",
        models: ["home"],
        component: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/dom",
        name: "子项",
        routes: [
          {
            path: "/dom/courses",
            name: "Dashboard",
            component: React.lazy(() => import("../pages/Dashboard")),
          },
          {
            path: "/dom/home",
            name: "home",
            component: React.lazy(() => import("../pages/Home")),
          },
        ]
      },
      {
        path: "/demo",
        name: "demo",
        component: React.lazy(() => import("../pages/Demo")),
      },
      {
        path: "/403",
        name: "403",
        component: <div>403</div>
      },
      {
        path: "/500",
        name: "500",
        component: <div>500</div>
      },
      {
        path: "*",
        name: "404",
        component: <div>404</div>
      },

    ]
  },
];

