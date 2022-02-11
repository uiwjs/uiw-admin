export interface TempProps {
  lazyModelsStr: string;
  importStr: string;
  addModelStr: string;
  typeModels: string;
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

export interface RootModel extends Models<RootModel> {
  ${str.typeModels}
}
export type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
  models:{},
  plugins: [loading()],
});

const getStore = async () => {
  ${str.lazyModelsStr}
  ${str.addModelStr}
  return store
}

getStore()

export const { dispatch, addModel } = store;
export type Store = typeof store;
export type AddModel = typeof addModel;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault<T = any> = Model<RootModel, T>;

`;
};

// const models = createModel<RootModel>()(model)
// addModel({ name, ...models })

// const docModel = (await import("/Users/lusun/GitHub/uiw-admin/examples/base/src/models/Doc/doc")).default
// const demoModel = (await import("/Users/lusun/GitHub/uiw-admin/examples/base/src/models/demo")).default
// const globalModel = (await import("/Users/lusun/GitHub/uiw-admin/examples/base/src/models/global")).default
// const homeModel = (await import("/Users/lusun/GitHub/uiw-admin/examples/base/src/models/home")).default
// const loginModel = (await import("/Users/lusun/GitHub/uiw-admin/examples/base/src/models/login")).default
// store.addModel({ name: "doc", ...docModel })
// store.addModel({ name: "demo", ...demoModel })
// store.addModel({ name: "global", ...globalModel })
// store.addModel({ name: "home", ...homeModel })
// store.addModel({ name: "login", ...loginModel })
export const createModelsTempStr = (
  modelArr: {
    path: string;
    filename: string;
    modelName?: string;
    isCreateModel: boolean;
  }[],
) => {
  let importStr = '';
  let lazyModelsStr = '';
  let typeModels = '';
  let addModelStr = '';
  // let models = '';
  modelArr.forEach((item) => {
    const { path, filename, modelName, isCreateModel } = item;
    const pathUrls = `${path}`.replace(/\\/g, '/').replace(/\.(js|ts)/, '');
    const names = modelName || filename;
    importStr = importStr + `import ${names}Model from "${pathUrls}";\n`;
    lazyModelsStr =
      lazyModelsStr +
      `const ${names}Model = (await import("${pathUrls}")).default;\n`;
    if (isCreateModel) {
      addModelStr =
        addModelStr +
        `store.addModel({ name: "${names}", ...${names}Model });\n`;
    } else {
      addModelStr =
        addModelStr +
        `store.addModel({ name: "${names}", ...createModel<RootModel>()(${names}Model) });\n`;
    }
    typeModels = typeModels + ` ${names}:typeof  ${names}Model,\n`;
  });
  return {
    importStr,
    lazyModelsStr,
    typeModels,
    addModelStr,
  };
};

export const createTemp = (pathUrl: string, filename: string) => {
  const path = `${pathUrl}`.replace(/\\/g, '/');
  return `createModels(require("${path}").default,"${filename}");\n`;
};
