
// 模板
export default (models: string) => {
  return `
import {
  init,
  Models,
  Model,
  createModel
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';

export interface RootModel extends Models<RootModel> {
}
type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
  models: {},
  plugins: [loading()],
});

export const { addModel } = store;

export const createModels = (model: Model<RootModel>, name: string) => {
  const models = createModel<RootModel>()(model)
  addModel({ name, ...models })
}
${models}
`;
};

export const createTemp = (pathUrl: string, filename: string) => {
  const path = `${pathUrl}`.replace(/\\/g, "/")
  return `createModels(require("${path}").default,"${filename}");\n`;
};
