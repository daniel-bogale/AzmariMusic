import { all, put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchSuggestedSongs,
  postSuggestedSongs,
  updateSuggestedSong,
  updateUserSongs
} from './API';
import { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } from '../suggested-song-slice';
import { createAction } from '@reduxjs/toolkit';
import { fetchUserSongError, fetchUserSongSuccess } from '../user-songs-slice';

export const requestSuggestedSongsAction = createAction('REQUEST_SUGGESTED_SONGS');
export const postRequestSuggestedSongsAction = createAction('POST_SUGGESTED_SONGS');
export const updateUserSongAction = createAction('ADD_POST_USER_SONG');

export const requestFetchUserSongs = createAction('REQUEST_FETCH_USER');
export const updateSuggestedSongsAction = createAction('REQUEST_ADD_SUGGESTED_SONGS');

function* fetchSuggestedSongsData() {
  try {
    const data = yield fetchSuggestedSongs();
    yield put(fetchSuggestedSongsSuccess(data));
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* postSuggestedSongsData(action) {
  try {
    const data = yield postSuggestedSongs(action.payload);
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* updateUserSongData(action) {
  try {
    const data = yield updateUserSongs(action.payload);
    yield put(fetchUserSongSuccess(action.payload));
  } catch (error) {
    yield put(fetchUserSongError(error));
  }
}

function* updateSuggestedSongsData(action) {
  try {
    const data = yield updateSuggestedSong(action.payload);
    yield put(fetchSuggestedSongsSuccess(data));
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* watchPostSuggestedSongsData() {
  yield takeEvery(postRequestSuggestedSongsAction().type, postSuggestedSongsData);
}

function* watchFetchUserData() {
  yield takeEvery(requestSuggestedSongsAction().type, fetchSuggestedSongsData);
}

function* watchUpdateUserSongData() {
  yield takeEvery(updateUserSongAction().type, updateUserSongData);
}

function* watchUpdateSuggestedSongsData() {
  yield takeEvery(updateSuggestedSongsAction().type, updateSuggestedSongsData);
}

export default function* rootSaga() {
  yield all([
    watchPostSuggestedSongsData(),
    watchFetchUserData(),
    watchUpdateSuggestedSongsData(),
    watchUpdateUserSongData()
  ]);
}
