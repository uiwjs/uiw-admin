import {
  init,
  Models,
  Model,
  RematchRootState,
  RematchDispatch,
} from '@rematch/core'
import loading, { ExtraModelsFromLoading } from '@rematch/loading'
import models, { ModelsType } from './config'
export interface RootModel extends Models<RootModel>, ModelsType {}
export type FullModel = ExtraModelsFromLoading<RootModel>
export const store = init<RootModel, FullModel>({
  models,
  plugins: [loading()],
})
export const { dispatch, addModel } = store
export type Store = typeof store
export type AddModel = typeof addModel
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>
export type ModelDefault<T = any> = Model<RootModel, T>
