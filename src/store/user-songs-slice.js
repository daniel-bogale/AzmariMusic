import { createSlice } from '@reduxjs/toolkit';

const userSongSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    saveSong: (preState, action) => {
      const savedSongid = action.payload.id;
      // const existingSong = preState.find((song) => song.id === savedSongid);
      preState.push(action.payload);
    },
    addSong: (preState, action) => {},
    removeSong: (preState, action) => {},
    modifySong: (preState, action) => {}
  }
});

export const songActions = userSongSlice.actions;
export default userSongSlice.reducer;
