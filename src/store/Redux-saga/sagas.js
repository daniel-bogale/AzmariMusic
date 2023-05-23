import { all, put, call, takeEvery } from 'redux-saga/effects';
import { fetchSuggestedSongs, postSuggestedSongs, updateSuggestedSong, addUserSongs } from './API';
import { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } from '../suggested-song-slice';
import { createAction } from '@reduxjs/toolkit';
import { userSongActions } from '../user-songs-slice';

export const requestSuggestedSongsAction = createAction('REQUEST_SUGGESTED_SONGS');
export const postRequestSuggestedSongsAction = createAction('POST_SUGGESTED_SONGS');
export const addUserSongAction = createAction('ADD_POST_USER_SONG');

export const requestFetchUserSongs = createAction('REQUEST_FETCH_USER');
export const requestaddSuggestedSongsAction = createAction('REQUEST_ADD_SUGGESTED_SONGS');

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

function* addUserSongData(action) {
  try {
    const data = yield addUserSongs(action.payload);
    // yield put(userSongActions.saveSong(action.payload));
  } catch (error) {
    // yield put(fetchUserSongs)
  }
}

function* addSuggestedSongsData(action) {
  try {
    const data = yield updateSuggestedSong(action.payload);
    yield put(fetchSuggestedSongsSuccess(data));
  } catch (error) {
    yield put(fetchSuggestedSongsFailure(error));
  }
}

function* watchFetchUserData() {
  yield takeEvery(requestSuggestedSongsAction().type, fetchSuggestedSongsData);
}

function* watchPostSuggestedSongs() {
  yield takeEvery(postRequestSuggestedSongsAction().type, postSuggestedSongsData);
}

function* watchAddUserSongData() {
  yield takeEvery(addUserSongAction().type, addUserSongData);
}

function* watchaddSuggestedSongData() {
  yield takeEvery(requestaddSuggestedSongsAction().type, addSuggestedSongsData);
}

export default function* rootSaga() {
  yield all([
    watchFetchUserData(),
    watchaddSuggestedSongData(),
    watchPostSuggestedSongs(),
    watchAddUserSongData()
  ]);
}
