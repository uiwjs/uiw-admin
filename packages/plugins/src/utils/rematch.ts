/**
 * 获取目录下所有的model文件
 * */
import fs from 'fs';
import path from 'path';
import { ModelType } from './interface';
import { IsModel } from '.';
export const getFilenameInfo = (filedir: string, root: string) => {
  const fileName = path.basename(filedir).replace(/\.(ts|js)$/, '');
  const pathUrls = `${filedir}`.replace(/\\/g, '/');
  const location = pathUrls.replace(/\/models.*$/, '');
  const srcPath = pathUrls.replace(new RegExp(root), '.');
  return {
    fileName,
    location,
    srcPath,
    pathUrls,
  };
};

export class RematchFiles {
  modelList: ModelType[] = [];
  root: string = '';
  constructor(root: string) {
    this.root = root;
    this.loopInit(root);
  }
  // 递归文件
  loopInit(filePath: string, isModel = false) {
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
            const { pathUrls, location, srcPath, fileName } = getFilenameInfo(
              filedir,
              this.root,
            );
            // const pathUrls = `${filedir}`.replace(/\\/g, '/');
            // const location = pathUrls.replace(/\/models.*$/, '');
            // const srcPath = pathUrls.replace(new RegExp(this.root), '.');
            if (isModels) {
              this.modelList.push({
                path: pathUrls,
                filename: fileName,
                modelName: modelNames,
                isCreateModel,
                location,
                name: modelNames || fileName,
                srcPath,
              });
            }
          }
          if (filename === 'models') {
            mode = true;
          }
          if (isDir) {
            this.loopInit(filedir, mode); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
          }
        }
      });
    }
  }
}
