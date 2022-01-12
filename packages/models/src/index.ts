import {
  init,
  RematchRootState,
  Models,
  RematchDispatch,
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
export type Store = typeof store;
export type AddModel = typeof addModel
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>;
