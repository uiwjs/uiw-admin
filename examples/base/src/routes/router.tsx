
import BasicLayout from "./../layouts/BasicLayout"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/login"
import type { RouteObject } from "react-router-dom";
// 这块内容需要进行转换掉 
export const routers: RouteObject[] = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/courses",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ]
  }
];
