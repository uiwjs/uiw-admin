/*
 * @Description: 简单版本的 自动加载 model
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { IsModel } from './../utils';
import createRematchTemps, { createModelsTempStr } from './temp';
import { ModelType } from './../utils/interface';
export type { ModelType };
class RematchWebpackPlugin {
  oldModel: ModelType[] = [];
  deleteModel: string[] = [];
  field: string = '';

  src = '';
  uiw = '';
  lazyLoad: boolean = false;
  newPath = '';

  constructor(props?: { lazyLoad?: boolean }) {
    this.src = path.resolve(process.cwd(), 'src');
    this.uiw = path.resolve(process.cwd(), 'src/.uiw');
    this.lazyLoad = !!props?.lazyLoad;

    this.getPathDeep(this.src);
    this.restCreate();
  }
  // 递归文件
  getPathDeep = (filePath: string, isModel = false) => {
    const files = fs.readdirSync(filePath);
    if (files) {
      files.forEach((filename: string) => {
        let mode = isModel;
        const filedir = path.join(filePath, filename);
        const isNoEmty = fs.existsSync(filedir);
        if (!isNoEmty) {
          return;
        }
        const stats = fs.statSync(filedir);
        if (stats) {
          const isFile = stats.isFile(); //是文件
          const isDir = stats.isDirectory(); //是文件夹
          if (isFile && isModel && /\.(ts||js)$/.test(filename)) {
            const data = fs.readFileSync(filedir, { encoding: 'utf-8' });
            const { isModels, modelNames, isCreateModel } = IsModel(data);
            const pathUrls = `${filedir}`.replace(/\\/g, '/');
            const location = pathUrls.replace(/\/models.*$/, '');
            const srcPath = pathUrls.replace(new RegExp(this.src), '.');
            if (isModels) {
              this.oldModel.push({
                path: pathUrls,
                filename: filename.replace(/\.(ts|js)$/, ''),
                modelName: modelNames,
                isCreateModel,
                location,
                name: modelNames || filename,
                srcPath,
              });
            }
          }
          if (filename === 'models') {
            mode = true;
          }
          if (isDir) {
            this.getPathDeep(filedir, mode); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
          }
        }
      });
    }
  };

  // 重新生成
  restCreate = () => {
    let modelStr = createModelsTempStr(this.oldModel, this.lazyLoad);
    if (!fs.existsSync(this.uiw)) {
      fs.mkdirSync(this.uiw);
    }
    // 在项目的 src/.uiw/ 创建 rematch.ts 用于models加载
    fs.writeFileSync(
      path.resolve(process.cwd(), 'src/.uiw/rematch.ts'),
      createRematchTemps(modelStr),
      { flag: 'w+', encoding: 'utf-8' },
    );
    if (this.lazyLoad) {
      fs.writeFileSync(
        path.resolve(process.cwd(), 'src/.uiw/modelsMap.json'),
        JSON.stringify(this.oldModel, (_, value) => value, 2),
        { flag: 'w+', encoding: 'utf-8' },
      );
    }

    this.field = '';
    this.deleteModel = [];
  };

  // 删除文件的时候
  deleteField = () => {
    const newModel: ModelType[] = [];
    this.oldModel.forEach((item) => {
      const { path } = item;
      const rgx = new RegExp(`^${this.newPath}`);
      if (rgx.test(path) || this.newPath === path) {
        this.deleteModel.push(path);
      } else {
        newModel.push(item);
      }
    });
    // 如果是空的不用管了
    // 如果存在则直接重新生成
    if (this.deleteModel.length !== 0) {
      this.oldModel = newModel;
      this.restCreate();
    }
  };
  // 文件变更时
  existenceField = () => {
    const stats = fs.statSync(this.newPath);
    if (!stats) {
      return;
    }
    // 文件夹不用动
    if (stats.isDirectory()) {
      return;
    }
    // 1. 判断是否已经存在
    // 如果已经存在着直接更新
    let isMode = false;
    let modelName;
    let isCreateModel = false;
    // 先判断路径是否存在models 和ts|js 结尾
    if (/\.(ts|js)$/.test(this.newPath) && /models/.test(this.newPath)) {
      const {
        isModels,
        modelNames,
        isCreateModel: isCreate,
      } = IsModel(fs.readFileSync(this.newPath, { encoding: 'utf-8' }));
      modelName = modelNames;
      isMode = isModels;
      isCreateModel = isCreate;
    }
    const newFile = this.oldModel.find((item) => item.path === this.newPath);
    if (newFile) {
      // 进行判断是否还是 model
      if (!isMode) {
        this.deleteModel.push(this.newPath);
        // 过滤出不是 一个 model 文件的项
        this.oldModel = this.oldModel.filter(
          (item) => item.path !== this.newPath,
        );
      }
      this.restCreate();
    } else {
      // 判断是不是 model  是则更新
      if (isMode) {
        const pathUrls = `${this.newPath}`.replace(/\\/g, '/');
        const arr = pathUrls.split(/\\|\//);
        let filename = arr[arr.length - 1].replace(/\.(ts|js)$/, '');
        const location = pathUrls.replace(/\/models.*$/, '');
        const srcPath = pathUrls.replace(new RegExp(this.src), '.');
        this.oldModel.push({
          path: pathUrls,
          filename,
          modelName,
          isCreateModel,
          location,
          name: modelName || filename,
          srcPath,
        });
        this.restCreate();
      }
    }
  };
  // 校验文件
  checkField = () => {
    // 校验文件是否存在
    const iss = fs.existsSync(this.newPath);
    if (iss) {
      //存在
      this.existenceField();
    } else {
      // 不存在
      this.deleteField();
    }
  };

  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap('RematchWebpackPlugin', (...res) => {
      if (process.env.NODE_ENV === 'development') {
        const watcher = fs.watch(path.resolve(process.cwd(), 'src'), {
          recursive: true,
        });

        watcher.on('change', (type, filename) => {
          if (typeof filename === 'string') {
            this.field = filename as string;
            this.newPath = path.resolve(process.cwd(), 'src', this.field);
            this.checkField();
          }
        });
      }
    });
  }
}

export default RematchWebpackPlugin;
