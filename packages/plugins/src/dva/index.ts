/*
 * @Description: 简单版本的 自动加载 model 
 */
import fs from "fs"
import path from "path"
import webpack from "webpack"
import createDvaTemps from "./temp"


const createTemp = (path: string, filename: string) => {
  return `createModels(require("${path}").default||{},"${filename}");\n`
}

class DvaWebpackPlugin {
  constructor() {
  }
  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap('DvaWebpackPlugin', () => {
      const watcher = fs.watch(path.resolve(process.cwd(), "src"), { recursive: true });
      let modelStr = "";
      const getPaths = async (filePath: string, isModel = false) => {
        const files = fs.readdirSync(filePath)
        if (files) {
          files.forEach((filename: string) => {
            let mode = isModel
            const filedir = path.join(filePath, filename);
            const isNoEmty = fs.existsSync(filedir)
            if (!isNoEmty) {
              return;
            }
            const stats = fs.statSync(filedir)
            if (stats) {
              const isFile = stats.isFile();//是文件
              const isDir = stats.isDirectory();//是文件夹
              if (isFile && isModel && /\.(ts||js)$/.test(filename)) {
                const data = fs.readFileSync(filedir, { encoding: "utf-8" })
                if (/export default/.test(data) && /reducers/.test(data) && /state/.test(data)) {
                  modelStr = modelStr + createTemp(filedir, filename.replace(/\.(ts|js)/, ""))
                }
              }
              if (filename === "models") {
                mode = true
              }
              if (isDir) {
                getPaths(filedir, mode); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
              }
            }
          })
        }
      }
      const writ = () => {
        modelStr = ''
        // 写完之后情况
        getPaths(path.resolve(process.cwd(), "src"))
        const field = path.resolve(process.cwd(), "src/.uiw")
        const uiw = fs.existsSync(field)
        if (!uiw) {
          fs.mkdirSync(field)
        }
        fs.writeFileSync(path.resolve(process.cwd(), "src/.uiw/dva.ts"), createDvaTemps(modelStr), { flag: "w+", encoding: "utf-8" })
      }
      writ()
      watcher.on("change", (type, filename) => {
        if (typeof filename === "string" && !(/\.uiw/.test(filename))) {
          if (/models/.test(filename) && /\.(ts||js)$/.test(filename)) {
            const paths = path.resolve(process.cwd(), "src", filename)
            const md = fs.existsSync(paths)
            if (!md) {
              writ()
            } else {
              // 判断文件内容
              const data = fs.readFileSync(path.resolve(process.cwd(), "src", filename), { encoding: "utf-8" })
              if (/export default/.test(data) && /reducers/.test(data) && /state/.test(data)) {
                writ()
              }
            }

          }
        }
      })
    })
  }
}

export default DvaWebpackPlugin