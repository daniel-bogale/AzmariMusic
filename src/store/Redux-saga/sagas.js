import { all, put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchSuggestedSongs,
  fetchUserSongs,
  postSuggestedSongs,
  updateSuggestedSong,
  updateUserSongs
} from './API';
import { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } from '../suggested-song-slice';
import { createAction } from '@reduxjs/toolkit';
import { fetchUserSongError, fetchUserSongSuccess } from '../user-songs-slice';

export const requestSuggestedSongsAction = createAction('REQUEST_SUGGESTED_SONGS');
export const requestUserSongsAction = createAction('REQUEST_USER_SONGS');

export const postSuggestedSongsAction = createAction('POST_SUGGESTED_SONGS');

export const updateSuggestedSongsAction = createAction('REQUEST_ADD_SUGGESTED_SONGS');
export const updateUserSongAction = createAction('ADD_POST_USER_SONG');

function* fetchSuggestedSongsData() {
  try {
    const data = yield fetchSuggestedSongs();
    yield put(fetchSuggestedSongsSuccess(data));
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* fetchUserSongsData() {
  try {
    const data = yield fetchUserSongs();
    yield put(fetchUserSongSuccess(data));
  } catch (error) {
    yield put(fetchUserSongError(error));
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
    yield put(fetchUserSongSuccess(action.payload));
    const data = yield updateUserSongs(action.payload);
  } catch (error) {
    yield put(fetchUserSongError(error));
  }
}

function* updateSuggestedSongsData(action) {
  try {
    yield put(fetchSuggestedSongsSuccess(data));
    const data = yield updateSuggestedSong(action.payload);
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* watchPostSuggestedSongsData() {
  yield takeEvery(postSuggestedSongsAction().type, postSuggestedSongsData);
}

function* watchFetchSuggestedSongsData() {
  yield takeEvery(requestSuggestedSongsAction().type, fetchSuggestedSongsData);
}

function* watchFetchUserSongsData() {
  yield takeEvery(requestUserSongsAction().type, fetchUserSongsData);
}

function* watchUpdateUserSongsData() {
  yield takeEvery(updateUserSongAction().type, updateUserSongData);
}

function* watchUpdateSuggestedSongsData() {
  yield takeEvery(updateSuggestedSongsAction().type, updateSuggestedSongsData);
}

export default function* rootSaga() {
  yield all([
    watchPostSuggestedSongsData(),
    watchFetchSuggestedSongsData(),
    watchUpdateSuggestedSongsData(),
    watchUpdateUserSongsData(),
    watchFetchUserSongsData()
  ]);
}
