export default (models: string) => {
  return `
import {
  init,
  Models,
  Model,
  createModel
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
// no need to extend from Models
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
`}