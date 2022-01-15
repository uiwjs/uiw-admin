import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

const BasicLayout = Loadable(React.lazy(() => import("../layouts/BasicLayout")))
const Dashboard = Loadable(React.lazy(() => import("../pages/Dashboard")))

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    models: ["login"],
    isAuth: true,
    component: React.lazy(() => import("../pages/login"))
  },

  {
    path: "/",
    models: ["global", "Doc/doc","demo"],
    component: <BasicLayout />,
    isAuth: true,
    routes: [
      {
        index: true,
        isAuth: true,
        redirect: '/tableList',
        component: React.lazy(() => import("../pages/Home")),
      },
      {
        isAuth: true,
        path: "/tableList",
        name: "查询表格",
        component: React.lazy(() => import("../pages/TableList")),
      },
      {
        path: "/home",
        name: "首页",
        isAuth: true,
        models: ["home"],
        component: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/dom",
        name: "子项",
        isAuth: true,
        routes: [
          {
            path: "/dom/courses",
            name: "Dashboard",
            isAuth: true,
            component: React.lazy(() => import("../pages/Dashboard")),
          },
          {
            path: "/dom/home",
            name: "home",
            isAuth: true,
            component: React.lazy(() => import("../pages/Home")),
          },
        ]
      },
      {
        isAuth: true,
        path: "/demo",
        name: "demo",
        component: React.lazy(() => import("../pages/Demo")),
      },
      {
        path: "/403",
        name: "403",
        isAuth: true,
        hideInMenu: true,
        component: <div>403</div>
      },
      {
        path: "/500",
        name: "500",
        isAuth: true,
        hideInMenu: true,
        component: <div>500</div>
      },
      {
        path: "*",
        name: "404",
        isAuth: true,
        hideInMenu: true,
        component: <div>404</div>
      },

    ]
  },
];

