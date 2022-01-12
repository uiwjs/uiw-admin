import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

const BasicLayout = Loadable(React.lazy(() => import("../layouts/BasicLayout")))
const Dashboard = Loadable(React.lazy(() => import("../pages/Dashboard")))

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    model: ["login"],
    component: React.lazy(() => import("../pages/login"))
  },

  {
    path: "/",
    model: ["global"],
    component: <BasicLayout />,
    routes: [
      {
        index: true,
        redirect: '/home',
        component: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/courses",
        name: "Dashboard",
        component: <Dashboard />,
      },
      {
        path: "/courses1",
        name: "Dashboard1",
        component: <Dashboard />,
      },
      {
        path: "/courses1/:id",
        name: "Dashboard1",
        component: <Dashboard />,
      },
      {
        path: "/home",
        name: "首页",
        model: ["home"],
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
        path: "*",
        name: "404",
        component: <div>测试</div>
      },
    ]
  },
];

