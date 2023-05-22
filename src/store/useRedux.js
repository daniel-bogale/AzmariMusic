import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import userSongSlice from './user-songs-slice';
import suggestedSongSlice from './suggested-song-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    userSongs: userSongSlice,
    suggestedSongs: suggestedSongSlice
  }
});

export default store;
