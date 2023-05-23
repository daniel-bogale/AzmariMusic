import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: []
};

const userSongSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      state.songs.push(action.payload);
    }
  }
});

export const userSongActions = userSongSlice.actions;
export default userSongSlice.reducer;
