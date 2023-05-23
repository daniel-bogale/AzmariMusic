import { MiddlewareArray, configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import userSongSlice from './user-songs-slice';
import suggestedSongSlice from './suggested-song-slice';
import saga from './Redux-saga/sagas';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    userSongs: userSongSlice,
    suggestedSongs: suggestedSongSlice
  },
  middleware: saga
});

export default store;
