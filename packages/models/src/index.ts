import {
  RematchRootState,
  RematchDispatch,
  Model,
  RematchStore,
} from '@rematch/core';
import { ExtraModelsFromLoading } from '@rematch/loading';
/**  @@ 指向 /src/.uiw 目录 */
// @ts-ignore
import { store, RootModel } from '@@/rematch';
// @ts-ignore
export { store } from '@@/rematch';

export type FullModel = ExtraModelsFromLoading<RootModel>;
const stores = store as RematchStore<RootModel, FullModel>;
export const { dispatch, addModel } = stores;
export type Store = RematchStore<RootModel, FullModel>;
export type AddModel = typeof addModel;
// 对象方式的 Dispatch 类型
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault<T = any> = Model<RootModel, T>;
// @ts-ignore
export * from '@@/rematch';
