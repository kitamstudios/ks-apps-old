import { AnyAction, ReducersMapObject } from 'redux';
import { ISagaModule } from 'redux-dynamic-modules-saga';

import { todosReducer } from './reducer';
import { LandingState } from './contracts';

const createReducerMap = () => {
  return {
    todos: todosReducer,
  } as unknown;
};

export const LandingModule: ISagaModule<LandingState> = {
  id: 'landing',
  reducerMap: createReducerMap() as ReducersMapObject<LandingState, AnyAction>,
};
