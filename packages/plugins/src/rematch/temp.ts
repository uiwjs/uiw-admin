export interface TempProps {
  models: string;
  importStr: string;
  createModelsStr: string;
  typeModels: string;
}
// 模板
export default (str: TempProps) => {
  return `
import {
  init,
  Models,
  Model,
  RematchRootState,
  RematchDispatch,
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
${str.importStr}
${str.createModelsStr}
export const models = {
  ${str.models}
}
export interface RootModel extends Models<RootModel> {
  ${str.typeModels}
}
export type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loading()],
});

export const { dispatch, addModel } = store;
export type Store = typeof store;
export type AddModel = typeof addModel;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault<T = any> = Model<RootModel, T>;

`;
};

export const createModelsTempStr = (
  modelArr: {
    path: string;
    filename: string;
    modelName?: string;
    isCreateModel: boolean;
  }[],
) => {
  let importStr = '';
  let createModelsStr = '';
  let typeModels = '';
  let models = '';
  modelArr.forEach((item) => {
    const { path, filename, modelName, isCreateModel } = item;
    const pathUrls = path.replace(/\.(js|ts)/, '');
    const names = modelName || filename;
    importStr = importStr + `import ${names} from "${pathUrls}";\n`;
    if (isCreateModel) {
      createModelsStr = createModelsStr + `const ${names}Model = ${names};\n`;
    } else {
      createModelsStr =
        createModelsStr +
        `const ${names}Model = createModel<RootModel>()(${names});\n`;
    }
    typeModels = typeModels + ` ${names}:typeof  ${names}Model,\n`;
    models = models + ` ${names}:${names}Model,\n`;
  });
  return {
    importStr,
    createModelsStr,
    typeModels,
    models,
  };
};

export const createTemp = (pathUrl: string, filename: string) => {
  const path = `${pathUrl}`.replace(/\\/g, '/');
  return `createModels(require("${path}").default,"${filename}");\n`;
};
