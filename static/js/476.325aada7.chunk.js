"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{29476:function(n,e,o){o.r(e),e.default='router-control\n===\n\n## Installation\n\n```bash\nnpm i @uiw-admin/router-control --save\n```\n\n## \u53c2\u6570\n\n```ts\n\nexport interface Routers extends Omit<RouteObject, "children"> {\n  key?: string;\n  /** \u9ed8\u8ba4\u8df3\u8f6c */\n  index?: boolean;\n  /** \u8def\u5f84 */\n  path?: string;\n  /** \u540d\u79f0 */\n  name?: string;\n  /**  \u56fe\u6807 */\n  icon?: string;\n  /** \u91cd\u5b9a\u5411  \u5f53 index===true\u751f\u6548 */\n  redirect?: string;\n  /** \u7ec4\u4ef6 */\n  component?: JSX.Element | React.LazyExoticComponent<(props?: any) => JSX.Element>;\n  /** \u5b50\u96c6 \u8def\u7531 */\n  routes?: Routers[]\n  /** \u52a0\u8f7d model \u7684\u6587\u4ef6\u540d\u79f0 */\n  models?: string[];\n  /** \u662f\u5426\u9690\u85cf\u83dc\u5355 */\n  hideInMenu?: boolean;\n  /** \u7528\u4e8e\u8def\u7531\u6821\u9a8c\u6743\u9650 */\n  isAuth?: boolean\n}\n\nexport interface ControllerProps {\n  routes?: RoutersProps[];\n  /** \u8def\u7531\u6a21\u5f0f   \u9ed8\u8ba4 history  */\n  routeType?: "history" | "hash" | "browser";\n  basename?: string;\n  addModel?: (models: string[]) => void\n}\n\n```\n\n\n## \u6848\u4f8b\n\n```ts\nimport { Exceptions403, Exceptions500, Exceptions404 } from "@uiw-admin/exceptions"\nimport { Routers, Loadable } from "@uiw-admin/router-control"\nimport React from "react";\nimport Control from \'@uiw-admin/router-control\';\nimport { store, createModels } from \'@uiw-admin/models\';\n\n// \u8fd9\u5757\u5185\u5bb9\u9700\u8981\u8fdb\u884c\u8f6c\u6362\u6389 \nexport const routers: Routers[] = [\n  {\n    path: "/login",\n    models: ["login"],\n    component: React.lazy(() => import("../pages/login"))\n  },\n  {\n    path: "/",\n    models: ["global", "Doc/doc", "demo"],\n    component: <BasicLayout />,\n    routes: [\n      {\n        index: true,\n        redirect: \'/tableList\'\n      },\n      {\n        path: "/tableList",\n        name: "\u67e5\u8be2\u8868\u683c",\n        component: React.lazy(() => import("../pages/TableList")),\n      },\n      {\n        path: "/home",\n        name: "\u9996\u9875",\n        models: ["home"],\n        component: React.lazy(() => import("../pages/Home")),\n      },\n      {\n        path: "/dom",\n        name: "\u5b50\u9879",\n        routes: [\n          {\n            path: "/dom/courses",\n            name: "Dashboard",\n            component: React.lazy(() => import("../pages/Dashboard")),\n          },\n          {\n            path: "/dom/home",\n            name: "home",\n            component: React.lazy(() => import("../pages/Home")),\n          },\n        ]\n      },\n      {\n        path: "/403",\n        name: "403",\n        component: <Exceptions403 />\n      },\n      {\n        path: "/500",\n        name: "500",\n        component: <Exceptions500 />\n      },\n      {\n        path: "*",\n        name: "404",\n        component: <Exceptions404 />\n      },\n\n    ]\n  },\n];\n\nexport default ()=>{\n  return (\n    <Control\n      routeType="hash"\n      routes={routers}\n      addModel={(models: string[]) => {\n          models.map(async (m) => {\n            const md = await import(`./models/${m}.ts`);\n            const modelData = md.default || md;\n            createModels(modelData, m)\n          });\n        }}\n    />\n  )\n}\n\n```\n\n\n'}}]);
//# sourceMappingURL=476.325aada7.chunk.js.map