import fs from 'fs';
import { IsModel } from '../utils';
/**获取model文件信息*/
export const getModelInfo = (newPath: string) => {
  // 1. 判断是否已经存在
  // 如果已经存在着直接更新
  /**是否是model*/
  let isMode = false;
  /**model 名称*/
  let modelName: undefined;
  /** model 是否使用 createModel 导出 */
  let isCreateModel = false;
  // 先判断路径是否存在models 和ts|js 结尾
  if (/\.(ts|js)$/.test(newPath) && /models/.test(newPath)) {
    const {
      isModels,
      modelNames,
      isCreateModel: isCreate,
    } = IsModel(fs.readFileSync(newPath, { encoding: 'utf-8' }));
    modelName = modelNames;
    isMode = isModels;
    isCreateModel = isCreate;
  }
  return {
    /**是否是model*/
    modelName,
    /**model 名称*/
    isMode,
    /** model 是否使用 createModel 导出 */
    isCreateModel,
  };
};
