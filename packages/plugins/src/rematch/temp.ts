import path from 'path';
export interface TempProps {
  lazyModelsStr: string;
  importStr: string;
  addModelStr: string;
  typeModels: string;
  createModelsStr: string;
  models: string;
  lazyLoad: boolean;
}
// 模板
export default (str: TempProps) => {
  return `
// @ts-ignore
import {
  init,
  Models,
  Model,
  RematchRootState,
  RematchDispatch,
  createModel,
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
${str.importStr}
${!str.lazyLoad ? str.createModelsStr : ''}
export const models = {
  ${!str.lazyLoad ? str.models : ''}
}
export interface RootModel extends Models<RootModel> {
  ${str.typeModels}
}
export type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loading()],
});

${
  str.lazyLoad
    ? `
const getStore = async () => {
  ${str.lazyModelsStr}
  ${str.addModelStr}
  return store
}
getStore()

`
    : ''
}
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
  lazyLoad: boolean,
  bindPage: boolean,
) => {
  let importStr = '';
  let lazyModelsStr = '';
  let typeModels = '';
  let addModelStr = '';
  let createModelsStr = '';
  let models = '';
  const Reg = new RegExp(`^${path.resolve(process.cwd(), 'src/models/')}`);

  modelArr.forEach((item, index) => {
    const { path: paths, filename, modelName, isCreateModel } = item;
    const pathUrls = `${paths}`.replace(/\\/g, '/').replace(/\.(js|ts)/, '');
    const names = modelName || filename;
    importStr =
      importStr + `import ${names}Model${index} from "${pathUrls}";\n`;
    if ((bindPage && Reg.test(item.path)) || !bindPage) {
      lazyModelsStr =
        lazyModelsStr +
        `const ${names}Model${index} = (await import("${pathUrls}")).default;\n`;

      if (isCreateModel) {
        addModelStr =
          addModelStr +
          `store.addModel({ name: "${names}", ...${names}Model${index} });\n`;
        createModelsStr =
          createModelsStr + `const ${names}Model = ${names}Model${index};\n`;
      } else {
        addModelStr =
          addModelStr +
          `store.addModel({ name: "${names}", ...createModel<RootModel>()(${names}Model${index}) });\n`;
        createModelsStr =
          createModelsStr +
          `const ${names}Model = createModel<RootModel>()(${names}Model${index});\n`;
      }
      models = models + `${names}:${names}Model,\n`;
    }
    typeModels = typeModels + ` ${names}:typeof  ${names}Model${index},\n`;
  });
  return {
    importStr,
    lazyModelsStr,
    typeModels,
    addModelStr,
    models,
    lazyLoad,
    createModelsStr,
  };
};

export const createTemp = (pathUrl: string, filename: string) => {
  const path = `${pathUrl}`.replace(/\\/g, '/');
  return `createModels(require("${path}").default,"${filename}");\n`;
};
