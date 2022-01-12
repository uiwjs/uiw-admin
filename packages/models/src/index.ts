import {
  init,
  RematchRootState,
  Models,
  RematchDispatch,
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

export const { dispatch, addModel } = store;

export const createModels = (model: Model<RootModel>, name: string) => {
  const models = createModel<RootModel>()(model)
  addModel({ name, ...models })
}

export type Store = typeof store;
export type AddModel = typeof addModel
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault = Model<RootModel>
