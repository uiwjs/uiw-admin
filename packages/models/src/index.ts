import {
  RematchRootState,
  Models,
  RematchDispatch,
  Model,
  // createModel,
  RematchStore
} from '@rematch/core';
import { ExtraModelsFromLoading } from '@rematch/loading';
// @ts-ignore
import { store, createModels } from "@@/dva"
// no need to extend from Models
export interface RootModel extends Models<RootModel> {
}

type FullModel = ExtraModelsFromLoading<RootModel>
// export const store = init<RootModel, FullModel>({
//   models: {},
//   plugins: [loading()],
// });

export const { dispatch, addModel } = store as RematchStore<RootModel, FullModel>;

// export const createModels = (model: Model<RootModel>, name: string) => {
//   const models = createModel<RootModel>()(model)
//   addModel({ name, ...models })
// }

const createModel = createModels as (model: Model<RootModel>, name: string) => void

const stores = store as RematchStore<RootModel, FullModel>;

export { stores as store, createModel as createModels }

export type Store = RematchStore<RootModel, FullModel>;
export type AddModel = typeof addModel
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault = Model<RootModel>
