import { Reducer } from 'redux';
import * as T from './contracts';
import { AppSettingsActionTypes } from './actions';

export const initialState: T.AppSettingsState = {
  data: {} as T.AppSettings,
  errors: undefined,
  loading: true,
};

const reducer: Reducer<T.AppSettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case AppSettingsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case AppSettingsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case AppSettingsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as appSettingsReducer };
