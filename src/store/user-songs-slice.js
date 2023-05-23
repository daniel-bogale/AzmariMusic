import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: []
};

const userSongSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      console.log(action.payload);

      state.songs.push(action.payload);
    },
    fetchUserSongSuccess: (state, action) => {
      state.songs = action.payload;
    },

    fetchUserSongError: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { fetchUserSongError, fetchUserSongSuccess } = userSongSlice.actions;
export default userSongSlice.reducer;
