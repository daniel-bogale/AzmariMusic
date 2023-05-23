import { createDispatchHook } from 'react-redux';
import { all, put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST } from './actions';
import { API } from './API';
import { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } from '../suggested-song-slice';

function* fetchUserData(action) {
  try {
    const data = yield call(API.fetchSuggestedMusic);
    yield put(fetchSuggestedSongsSuccess(data));
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* watchFetchUserData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchUserData);
}

export default function* rootSaga() {
  yield all([watchFetchUserData()]);
}
