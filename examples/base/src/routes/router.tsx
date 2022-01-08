
// import BasicLayout from "./../layouts/BasicLayout"
// import Home from "../pages/Home"
// import Dashboard from "../pages/Dashboard"
// import Login from "../pages/login"
import { Routers, Loadable } from "@uiw-admin/router-control"
import React from "react";

const BasicLayout = Loadable(React.lazy(() => import("../layouts/BasicLayout")) as any)
const LoginPage = Loadable(React.lazy(() => import("../pages/login")))
const Home = Loadable(React.lazy(() => import("../pages/Home")))
const Dashboard = Loadable(React.lazy(() => import("../pages/Dashboard")))

// 这块内容需要进行转换掉 
export const routers: Routers[] = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/courses",
        name: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home",
        name: "首页",
        element: <Home />,
      },
      {
        path: "/dom",
        name: "子项",
        children: [
          {
            path: "/dom/courses",
            name: "Dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dom/home",
            name: "home",
            element: <Home />,
          },
        ]
      }
    ]
  }
];

