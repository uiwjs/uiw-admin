// @ts-ignore
import { init, Models } from '@rematch/core';
import { ExtraModelsFromLoading } from '@rematch/loading';
export const models = {};
export interface RootModel extends Models<RootModel> {}
export type FullModel = ExtraModelsFromLoading<RootModel>;
export const store = init<RootModel, FullModel>({});
export const { dispatch, addModel } = store;
