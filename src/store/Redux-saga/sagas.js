import { all, put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST } from './actions';
import { API, fetchSuggestedSongs } from './API';
import { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } from '../suggested-song-slice';
import { createAction } from '@reduxjs/toolkit';

function* fetchUserData() {
  // try {
  console.log('fetching');
  const data = yield fetchSuggestedSongs();
  yield put(fetchSuggestedSongsSuccess(data));
  // } catch (error) {
  //   yield put(fetchSuggestedSongsFailure(error));
  // }
}

export const requestFetchUser = createAction('REQUEST_FETCH_USER');
export const requestSuggestedSongs = createAction('REQUEST_SUGGESTED_SONGS');

function* watchFetchUserData() {
  yield takeEvery(requestSuggestedSongs().type, fetchUserData);
}

export default function* rootSaga() {
  yield all([watchFetchUserData()]);
}
