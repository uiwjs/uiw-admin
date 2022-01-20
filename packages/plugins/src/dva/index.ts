/*
 * @Description: 简单版本的 自动加载 model 
 */
import fs from "fs"
import path from "path"
import webpack from "webpack"
import { IsModel } from "./utils"
import createDvaTemps, { createTemp } from "./temp"

class DvaWebpackPlugin {
  oldModel: { path: string, filename: string }[] = []
  deleteModel: string[] = []
  field: string = '';

  src = ""
  uiw = "";

  newPath = "";

  constructor() {
    this.src = path.resolve(process.cwd(), "src");
    this.uiw = path.resolve(process.cwd(), "src/.uiw");
    this.getPathDeep(this.src)
    this.restCreate()
  }
  // 递归文件
  getPathDeep = (filePath: string, isModel = false) => {
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
            if (IsModel(data)) {
              this.oldModel.push({ path: filedir, filename: filename.replace(/\.(ts|js)$/, "") })
            }
          }
          if (filename === "models") {
            mode = true
          }
          if (isDir) {
            this.getPathDeep(filedir, mode); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
          }
        }
      })
    }
  }

  // 重新生成
  restCreate = () => {
    let modelStr = ""
    this.oldModel.forEach(item => {
      const { path, filename } = item
      modelStr = modelStr + createTemp(path, filename)
    })
    if (!fs.existsSync(this.uiw)) {
      fs.mkdirSync(this.uiw)
    }
    fs.writeFileSync(path.resolve(process.cwd(), "src/.uiw/dva.ts"), createDvaTemps(modelStr), { flag: "w+", encoding: "utf-8" })
    this.field = ''
    this.deleteModel = []
  }

  // 删除文件的时候
  deleteField = () => {
    const newModel: { path: string; filename: string }[] = []
    this.oldModel.forEach((item) => {
      const { path } = item
      const rgx = new RegExp(`^${this.newPath}`)
      if (rgx.test(path) || this.newPath === path) {
        this.deleteModel.push(path)
      } else {
        newModel.push(item)
      }
    })
    // 如果是空的不用管了
    // 如果存在则直接重新生成
    if (this.deleteModel.length !== 0) {
      this.restCreate()
      this.oldModel = newModel
    }
  }
  // 文件变更时
  existenceField = () => {
    const stats = fs.statSync(this.newPath)
    if (!stats) {
      return;
    }
    // 文件夹不用动
    if (stats.isDirectory()) {
      return;
    }
    // 1. 判断是否已经存在
    // 如果已经存在着直接更新
    const isMode = IsModel(fs.readFileSync(this.newPath, { encoding: "utf-8" }))
    const newFile = this.oldModel.find(item => item.path === this.newPath)
    if (newFile) {
      // 进行判断是否还是 model
      if (!isMode) {
        this.deleteModel.push(this.newPath)
        this.oldModel = this.oldModel.filter((item) => item.path !== this.newPath)
      }
      this.restCreate()
    } else {
      // 判断是不是 model  是则更新
      if (isMode) {
        const arr = this.newPath.split("/")
        let filename = arr[arr.length - 1].replace(/\.(ts|js)/, "")
        this.oldModel.push({ path: this.newPath, filename })
        this.restCreate()
      }
    }
  }
  // 校验文件
  checkField = () => {
    // 校验文件是否存在
    const iss = fs.existsSync(this.newPath)
    if (iss) {//存在
      this.existenceField()
    } else {
      // 不存在
      this.deleteField()
    }
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap('DvaWebpackPlugin', (...res) => {
      const watcher = fs.watch(path.resolve(process.cwd(), "src"), { recursive: true });

      watcher.on("change", (type, filename) => {
        if (typeof filename === "string") {
          this.field = filename as string;
          this.newPath = path.resolve(process.cwd(), "src", this.field);
          this.checkField()
        }
        // this.createDva(filename as string)
      })
    })
  }
}

export default DvaWebpackPlugin