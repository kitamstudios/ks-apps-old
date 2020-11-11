import { AnyAction, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { History } from 'history';

import { appSettingsReducer } from './reducer';
import { fetchRequest } from './actions';
import appSettingsSaga from './sagas';
import { ApplicationState } from './contracts';

const createReducerMap = (history: History) => {
  return {
    appSettings: appSettingsReducer,
    router: connectRouter(history),
  } as unknown;
};

export const createApplicationModule = (history: History): ISagaModule<ApplicationState> => {
  return {
    id: 'root',
    reducerMap: createReducerMap(history) as ReducersMapObject<ApplicationState, AnyAction>,
    initialActions: [fetchRequest()],
    sagas: [appSettingsSaga],
  };
};
