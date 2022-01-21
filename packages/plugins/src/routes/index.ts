/*
 * @Description: 简单版本的 自动加载 model
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import createTemp, { getJsonToString } from "./temp"
import chokidar from "chokidar"
export interface RoutersProps {
  /** 默认跳转 */
  index?: boolean;
  /** 路径 */
  path?: string;
  /** 名称 */
  name?: string;
  /**  图标 */
  icon?: string;
  /** 重定向  当 index===true生效 */
  redirect?: string;
  /** 组件 */
  component?: string;
  /** 子集 路由 */
  routes?: RoutersProps[];
  /** 是否隐藏菜单 */
  hideInMenu?: boolean;
  /** 用于路由校验权限 */
  isAuth?: boolean;
}

class RoutesWebpackPlugin {
  routesPath = "";
  routes = []
  oldRouterJson = ""
  cwd = ""
  cwdConfig = ''

  constructor() {
    // 必须要存在这个文件
    this.routesPath = path.resolve(process.cwd(), "config/routes.json");
    this.cwdConfig = path.resolve(process.cwd(), "config")
    this.cwd = path.resolve(process.cwd())
  }
  // 生成临时路由
  createTemps = (strs: string) => {
    if (strs === "[]") {
      this.oldRouterJson = ""
    }
    const routeTemp = createTemp(strs)
    fs.writeFileSync(path.resolve(process.cwd(), "src/.uiw/routes.tsx"), routeTemp, { encoding: "utf-8", flag: "w+" })
  }
  // 读取 路由 json 文件
  createRoutes = () => {
    if (fs.existsSync(this.routesPath)) {
      //  读取文件数据
      const routerTemp = JSON.stringify(this.routes, getJsonToString, 2)
        .replace(/\"component\": (\"(.+?)\")/g, (global, m1, m2) => {
          return `"component": ${m2.replace(/\^/g, '"')}`;
        }).replace(/\\r\\n/g, '\r\n')
        .replace(/\\n/g, '\r\n');
      this.createTemps(routerTemp)
    }
  };
  // 校验文件
  checkField = async () => {
    // 校验文件是否存在
    const iss = fs.existsSync(this.routesPath);
    if (iss) {
      //存在 更新
      const newStr = fs.readFileSync(this.routesPath, { encoding: "utf-8" }).toString().trim()
      // 文件存在但是为空
      if (newStr === "") {
        this.createTemps("[]");
        return;
      }
      if ((newStr) !== this.oldRouterJson) {
        this.oldRouterJson = newStr
        this.routes = JSON.parse(this.oldRouterJson)
        this.createRoutes()
      }
    } else {
      // 不存在
      this.createTemps("[]")
    }
  };

  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap("RoutesWebpackPlugin", () => {
      this.checkField();
      if (process.env.NODE_ENV === "development") {
        chokidar.watch(this.cwdConfig, {
          cwd: this.cwd,
        }).on('all', (event, path) => {
          // 编辑 和删除进行处理 其他不进行处理
          if (event === "unlink" && path === "config/routes.json") {
            this.createTemps("[]")
          }
          if (["change", "add"].includes(event) && path === "config/routes.json") {
            this.checkField()
          }
        });
      }
    })
  }
}

export default RoutesWebpackPlugin;
