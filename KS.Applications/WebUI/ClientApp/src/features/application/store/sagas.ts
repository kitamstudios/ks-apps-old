import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as T from './contracts';
import { fetchError, fetchSuccess, AppSettingsActionTypes } from './actions';

// TODO: Is this the best way to get the baseUrl?
const location = window.location.href.split('/');
const baseUrl = `${location[0]}//${location[2]}`;

function getAppSettings(): Promise<T.AppSettings> {
  return fetch(`${baseUrl}/appSettings.json`)
    .then(x => x.json())
    .then(x => x.AppSettings)
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 0)));
}

function* handleFetch() {
  try {
    const res = yield call(getAppSettings);

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError('An unknown error occurred.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(AppSettingsActionTypes.FETCH_REQUEST, handleFetch);
}

function* appSettingsSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default appSettingsSaga;
