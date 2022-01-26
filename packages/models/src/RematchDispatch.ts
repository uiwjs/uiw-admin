// 重新覆盖 RematchDispatch 类型, 不需要  payload和meta都是必填
import {
  Models,
  Model,
  MergeExclusive,
  ModelEffects,
  ExtractRematchDispatchersFromReducers,
  ReturnOfDispatcher,
  ModelEffect,
} from '@rematch/core';
import { Dispatch as ReduxDispatch } from 'redux';

export type RematchDispatchObj<TModels extends Models<TModels>> =
  ReduxDispatch & ExtractRematchDispatchersFromModels<TModels>;

export type ExtractRematchDispatchersFromModels<
  TModels extends Models<TModels>,
> = {
  [modelKey in keyof TModels]: TModels[modelKey] extends Model<TModels>
    ? ModelDispatcher<TModels[modelKey], TModels>
    : never;
};

/**
 * Combines together types extracted from reducers and effects for a model.
 */
export type ModelDispatcher<
  TModel extends Model<TModels>,
  TModels extends Models<TModels>,
> = MergeExclusive<
  ExtractRematchDispatchersFromEffects<TModel['effects'], TModels>,
  ExtractRematchDispatchersFromReducers<
    TModel['state'],
    TModel['reducers'],
    TModels
  >
>;
export type ExtractRematchDispatchersFromEffects<
  TEffects extends Model<TModels>['effects'],
  TModels extends Models<TModels>,
> = TEffects extends (...args: any[]) => infer R
  ? R extends ModelEffects<TModels>
    ? ExtractRematchDispatchersFromEffectsObject<R, TModels>
    : never
  : TEffects extends ModelEffects<TModels>
  ? ExtractRematchDispatchersFromEffectsObject<TEffects, TModels>
  : never;
export type ExtractRematchDispatchersFromEffectsObject<
  TEffects extends ModelEffects<TModels>,
  TModels extends Models<TModels>,
> = {
  [effectKey in keyof TEffects]: ExtractRematchDispatcherFromEffect<
    TEffects[effectKey],
    TModels
  >;
};
export type ExtractRematchDispatcherFromEffect<
  TEffect extends ModelEffect<TModels>,
  TModels extends Models<TModels>,
> = TEffect extends (...args: infer TRest) => infer TReturn
  ? TRest extends []
    ? RematchDispatcher<true, never, never, TReturn>
    : TRest[1] extends undefined
    ? RematchDispatcher<
        true,
        ExtractParameterFromEffect<TRest, 'payload'>,
        never,
        TReturn
      >
    : TRest[2] extends undefined
    ? RematchDispatcher<
        true,
        ExtractParameterFromEffect<TRest, 'payload'>,
        never,
        TReturn
      >
    : RematchDispatcher<
        true,
        ExtractParameterFromEffect<TRest, 'payload'>,
        ExtractParameterFromEffect<TRest, 'meta'>,
        TReturn
      >
  : never;

type ExtractParameterFromEffect<
  P extends unknown[],
  V extends 'payload' | 'meta',
> = P extends []
  ? never
  : P extends [p?: infer TPayload, s?: unknown]
  ? V extends 'payload'
    ? P extends [infer TPayloadMayUndefined, ...unknown[]]
      ? [p: TPayloadMayUndefined]
      : [p?: TPayload]
    : never
  : P extends [
      p?: infer TPayload,
      s?: unknown,
      m?: infer TMeta,
      ...args: unknown[]
    ]
  ? V extends 'payload'
    ? P extends [infer TPayloadMayUndefined, ...unknown[]]
      ? [p: TPayloadMayUndefined]
      : [p?: TPayload]
    : P extends [unknown, unknown, infer TMetaMayUndefined, ...unknown[]]
    ? [m: TMetaMayUndefined]
    : [m?: TMeta]
  : never;

export type RematchDispatcher<
  IsEffect extends boolean,
  TPayload extends [p?: unknown] = never,
  TMeta extends [m?: unknown] = never,
  TReturn = any,
> = [TPayload, TMeta] extends [never, never]
  ? (() => ReturnOfDispatcher<IsEffect, TReturn>) & { isEffect: IsEffect }
  : [TMeta] extends [never]
  ? CheckIfParameterOptional<TPayload> extends true
    ? ((
        payload?: TPayload[0],
      ) => ReturnOfDispatcher<IsEffect, TReturn, TPayload[0]>) & {
        isEffect: IsEffect;
      }
    : ((
        payload: TPayload[0],
      ) => ReturnOfDispatcher<IsEffect, TReturn, TPayload[0]>) & {
        isEffect: IsEffect;
      }
  : CheckIfParameterOptional<TMeta> extends true
  ? CheckIfParameterOptional<TPayload> extends true
    ? ((
        payload?: TPayload[0],
        meta?: TMeta[0],
      ) => ReturnOfDispatcher<IsEffect, TReturn, TPayload[0], TMeta[0]>) & {
        isEffect: IsEffect;
      }
    : ((
        payload: TPayload[0],
        meta?: TMeta[0],
      ) => ReturnOfDispatcher<IsEffect, TReturn, TPayload[0], TMeta[0]>) & {
        isEffect: IsEffect;
      }
  : ((
      payload?: TPayload[0],
      meta?: TMeta[0],
    ) => ReturnOfDispatcher<IsEffect, TReturn, TPayload[0], TMeta[0]>) & {
      isEffect: IsEffect;
    };
//把最后一个换成 可选参数 对象的方式

type CheckIfParameterOptional<P> = P extends [unknown, ...unknown[]]
  ? false
  : true;
