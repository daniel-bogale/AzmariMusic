import { createSlice } from '@reduxjs/toolkit';
import { fetchUserSongError, fetchUserSongSuccess } from './user-songs-slice';

const initialState = {
  songs: []
};

const suggestedSongSlice = createSlice({
  name: 'suggestedSongs',
  initialState,

  reducers: {
    fetchSuggestedSongsSuccess(state, action) {
      fetchUserSongSuccess();
      state.songs = action.payload;
    },
    fetchSuggestedSongsFailure(state, action) {
      fetchUserSongError(action.payload);
      state.songs = initialState;
    }
  }
});

export const { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } =
  suggestedSongSlice.actions;
export default suggestedSongSlice.reducer;
