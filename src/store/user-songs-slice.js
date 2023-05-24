import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [
    {
      artist: 'The Weekend',
      songName: 'Happy',
      songDescription:
        ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
      id: 'm2',
      photoLink:
        'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1'
    }
  ]
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
