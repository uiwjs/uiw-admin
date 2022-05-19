// @ts-nocheck
import {
  RematchRootState,
  RematchDispatch,
  Model,
  RematchStore,
  init,
} from '@rematch/core';
import { ExtraModelsFromLoading } from '@rematch/loading';
/**  @@ 指向 /src/.uiw 目录 */
import { store, RootModel } from '@@/rematch';
export { store };

export type FullModel = ExtraModelsFromLoading<RootModel>;
const stores = store as RematchStore<RootModel, FullModel>;
export const { dispatch, addModel } = stores;
export type Store = RematchStore<RootModel, FullModel>;
export type AddModel = typeof addModel;
// 对象方式的 Dispatch 类型
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault<T = any> = Model<RootModel, T>;
export * from '@@/rematch';
