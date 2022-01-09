
// import BasicLayout from "./../layouts/BasicLayout"
// import Home from "../pages/Home"
// import Dashboard from "../pages/Dashboard"
// import Login from "../pages/login"
import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

const BasicLayout = Loadable(React.lazy(() => import("../layouts/BasicLayout")) as any)

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    element: React.lazy(() => import("../pages/login"))
  },
  {
    path: "/",
    element: <BasicLayout />,
    routes: [
      {
        index: true,
        element: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/courses",
        name: "Dashboard",
        element: React.lazy(() => import("../pages/Dashboard")),
      },
      {
        path: "/home",
        name: "首页",
        element: React.lazy(() => import("../pages/Home")),
      },
      {
        path: "/dom",
        name: "子项",
        routes: [
          {
            path: "/dom/courses",
            name: "Dashboard",
            element: React.lazy(() => import("../pages/Dashboard")),
          },
          {
            path: "/dom/home",
            name: "home",
            element: React.lazy(() => import("../pages/Home")),
          },
        ]
      }
    ]
  }
];

