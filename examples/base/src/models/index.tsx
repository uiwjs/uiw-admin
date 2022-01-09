import {
  init,
  RematchRootState,
  Models,
  RematchDispatch,
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
import global from './global';
import login from './login';

// no need to extend from Models
export interface RootModel extends Models<RootModel> {
  global: typeof global;
  login: typeof login;
}

type FullModel = ExtraModelsFromLoading<RootModel>

const models: RootModel = { global, login }

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loading()],
});

export const { dispatch } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>;
