/*
 * @Description: 简单版本的 自动加载 model
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import createTemp, { getJsonToString } from "./temp"
import chokidar from "chokidar"
import { getJSONData, stringToJson } from "./../utils"
import { RoutersProps } from "./../utils/interface"

class RoutesWebpackPlugin {
  // json 文件地址
  jsonFilePath = ''
  // js文件地址
  jsFilePath = ''
  // ts 文件地址
  tsFilePath = ""
  // 渲染路由数组
  routes: RoutersProps[] = []
  // 上一次的路由数据
  preString = ""
  // 下一次渲染路由数据
  nextString = ''
  // 根目录
  cwd = ""
  // 需要监听的文件目录
  cwdConfig = ''

  constructor() {
    // 必须要存在这个文件 优先级  json > ts > js
    this.jsonFilePath = path.resolve(process.cwd(), "config/routes.json");
    this.jsFilePath = path.resolve(process.cwd(), "config/routes.js");
    this.tsFilePath = path.resolve(process.cwd(), "config/routes.ts");
    // ----
    this.cwdConfig = path.resolve(process.cwd(), "config")
    this.cwd = path.resolve(process.cwd())
  }
  // 生成临时路由
  createTemps = (strs: string) => {
    if (strs === "[]") {
      this.preString = ""
      this.nextString = ""
    } else {
      this.preString = this.nextString
      this.nextString = ""
    }
    const routeTemp = createTemp(strs)
    fs.writeFileSync(path.resolve(process.cwd(), "src/.uiw/routes.tsx"), routeTemp, { encoding: "utf-8", flag: "w+" })
  }

  //  判断上一次和下一次
  checkPreAndNext = () => {
    if (this.preString !== this.nextString) {
      //  读取文件数据
      const routerTemp = JSON.stringify(this.routes, getJsonToString, 2)
        .replace(/\"component\": (\"(.+?)\")/g, (global, m1, m2) => {
          return `"component": ${m2.replace(/\^/g, '"')}`;
        }).replace(/\\r\\n/g, '\r\n')
        .replace(/\\n/g, '\r\n');
      this.createTemps(routerTemp)
    }
  }
  // 获取文件内容
  getFileContent = (isType: "json" | "ts" | "js" | false) => {
    if (isType === "json") {
      this.nextString = fs.readFileSync(this.jsonFilePath, { encoding: "utf-8" }).toString().trim()
      if (this.nextString !== "") {
        this.routes = stringToJson(this.nextString)
        this.nextString = JSON.stringify(this.routes)
        this.checkPreAndNext()
        return;
      }
    } else if (["js", "ts"].includes(isType as string)) {
      let filePath = ""
      if (isType === "js") {
        filePath = this.jsFilePath
      } else {
        filePath = this.tsFilePath
      }
      const content = fs.readFileSync(filePath, { encoding: "utf-8" })
      const { isJSON, jsonArr } = getJSONData(content)
      if (isJSON) {
        this.routes = jsonArr
        this.nextString = JSON.stringify(jsonArr)
        this.checkPreAndNext()
        return;
      }
    }
    this.createTemps("[]")
  }

  // 判断文件优先级 
  JudgeFileType = () => {
    let isType: "json" | "ts" | "js" | false = "json";
    if (fs.existsSync(this.jsonFilePath)) {
      isType = "json"
    } else if (fs.existsSync(this.tsFilePath)) {
      isType = "ts"
    } else if (fs.existsSync(this.jsFilePath)) {
      isType = "js"
    } else {
      isType = false
    }
    this.getFileContent(isType)
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap("RoutesWebpackPlugin", () => {
      this.JudgeFileType();
      if (process.env.NODE_ENV === "development") {
        chokidar.watch(this.cwdConfig, {
          cwd: this.cwd,
        }).on('all', (event, path) => {
          if (["change", "add", "unlink"].includes(event) && ["config/routes.json", "config/routes.ts", "config/routes.js"].includes(path)) {
            this.JudgeFileType();
          }
        });
      }
    })
  }
}

export default RoutesWebpackPlugin;
