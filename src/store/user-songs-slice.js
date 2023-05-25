import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  error: {
    isError: false,
    errorMessage: 'danny'
  },
  isFetching: false,
  isSuccess: null
};

const userSongSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      state.songs.push(action.payload);
    },
    fetchUserSongSuccess: (state, action = '') => {
      state.error.isError = false;
      state.isFetching = false;
      state.isSuccess = true;
      if (action === '') return;
      state.songs = action.payload;
    },

    fetchUserSongError: (state, action) => {
      state.error.isError = true;
      state.isFetching = false;
      state.isSuccess = false;
      console.log(state.isFetching);

      state.error.errorMessage = action.payload;
    },
    isFetching: (state) => {
      state.isFetching = true;
      state.isSuccess = false;
      state.error.isError = false;
    },
    toggleIsSuccess: (state) => {
      state.isSuccess = !state.isSuccess;
    }
  }
});

export const { isFetching, fetchUserSongError, fetchUserSongSuccess, toggleIsSuccess } =
  userSongSlice.actions;
export default userSongSlice.reducer;
