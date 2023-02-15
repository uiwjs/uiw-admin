/*
 * @Description: 简单版本的 自动加载 model
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { RematchFiles, getFilenameInfo } from './../utils';
import createRematchTemps, { createModelsTempStr } from './temp';
import { ModelType } from './../utils/interface';
import chokidar from 'chokidar';
import { getModelInfo } from './utils';

export type { ModelType };
class RematchWebpackPlugin {
  oldModel: ModelType[] = [];
  deleteModel: string[] = [];
  field: string = '';

  src = '';
  uiw = '';
  lazyLoad: boolean = false;
  newPath = '';
  isTS: boolean = true;

  constructor(props?: { lazyLoad?: boolean }) {
    this.src = path.resolve(process.cwd(), 'src');
    this.uiw = path.resolve(process.cwd(), 'src/.uiw');
    this.isTS = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));
    this.lazyLoad = !!props?.lazyLoad;

    this.getPathDeep(this.src);
    this.restCreate();
  }
  // 递归文件
  getPathDeep = (filePath: string) => {
    const rematchFiles = new RematchFiles(filePath);
    this.oldModel = rematchFiles.modelList;
  };

  // 重新生成
  restCreate = () => {
    let modelStr = createModelsTempStr(this.oldModel, this.lazyLoad, this.isTS);
    if (!fs.existsSync(this.uiw)) {
      fs.mkdirSync(this.uiw);
    }
    // path.resolve(process.cwd(), this.isTS ? 'src/.uiw/routes.tsx' : 'src/.uiw/routes.js'),
    // 在项目的 src/.uiw/ 创建 rematch.ts 用于models加载
    fs.writeFileSync(
      path.resolve(
        process.cwd(),
        this.isTS ? 'src/.uiw/rematch.ts' : 'src/.uiw/rematch.js',
      ),
      createRematchTemps(modelStr, this.isTS),
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
  deleteField = (newPath: string) => {
    const newModel: ModelType[] = [];
    this.oldModel.forEach((item) => {
      const { path } = item;
      const rgx = new RegExp(`^${newPath}`);
      if (rgx.test(path) || newPath === path) {
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
  existenceField = (newPath: string) => {
    const stats = fs.statSync(newPath);
    if (!stats) {
      return;
    }
    // 文件夹不用动
    if (stats.isDirectory()) {
      return;
    }
    // 获取文件信息
    const { isMode, modelName, isCreateModel } = getModelInfo(newPath);

    const newFile = this.oldModel.find((item) => item.path === newPath);
    if (newFile) {
      // 进行判断是否还是 model
      if (!isMode) {
        this.deleteModel.push(newPath);
        // 过滤出不是 一个 model 文件的项
        this.oldModel = this.oldModel.filter((item) => item.path !== newPath);
      } else {
        // 更新内容 重新生成
        this.oldModel = this.oldModel.map((item) => {
          if (item.path === newPath) {
            return {
              ...item,
              name: modelName || item.name,
              modelName,
            };
          }
          return { ...item };
        });
      }
    } else if (isMode) {
      // 判断是不是 model  是则更新
      const { srcPath, location, pathUrls, fileName } = getFilenameInfo(
        newPath,
        this.src,
      );
      this.oldModel.push({
        path: pathUrls,
        filename: fileName,
        modelName,
        isCreateModel,
        location,
        name: modelName || fileName,
        srcPath,
      });
    }
    if (isMode || newFile) {
      this.restCreate();
    }
  };
  // 校验文件
  checkField = (newPath: string) => {
    // 校验文件是否存在
    const iss = fs.existsSync(newPath);
    if (iss) {
      //存在
      this.existenceField(newPath);
    } else {
      // 不存在
      this.deleteField(newPath);
    }
  };

  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap('RematchWebpackPlugin', (...res) => {
      if (process.env.NODE_ENV === 'development') {
        chokidar
          .watch(path.resolve(process.cwd(), 'src'), {
            cwd: path.resolve(process.cwd(), 'src'),
          })
          .on('all', (event, pathName) => {
            if (
              ['change', 'add', 'unlink'].includes(event) &&
              /(models\/|models\.(ts|js))/.test(pathName)
            ) {
              this.checkField(path.resolve(process.cwd(), 'src', pathName));
            }
          });
      }
    });
  }
}

export default RematchWebpackPlugin;
