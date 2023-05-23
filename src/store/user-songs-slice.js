import { createSlice } from '@reduxjs/toolkit';

const userSongSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    saveSong: (state, action) => {
      const savedSongid = action.payload.id;
      const existingSong = state.find((song) => song.id === savedSongid);
      if (existingSong) {
        return;
      }
      state.push(action.payload);
    }
    // fetchDataSuccess: (state, action) => {

    // },
    // removeSong: (state, action) => {},
    // modifySong: (state, action) => {}
  }
});

export const songActions = userSongSlice.actions;
export default userSongSlice.reducer;
