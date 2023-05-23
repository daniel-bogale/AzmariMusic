import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [
    {
      artist: 'The Weekend',
      songName: 'Happy',
      songDescription:
        ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
      id: 'm3',
      photoLink:
        'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1'
    }
  ]
};

const suggestedSongSlice = createSlice({
  name: 'suggestedSongs',
  initialState,

  reducers: {
    fetchSuggestedSongsSuccess(state, action) {
      state.songs = action.payload;
    },
    fetchSuggestedSongsFailure(state, action) {
      console.log(action.payload, '......known.....');
      state.songs = initialState;
    }
  }
});

export const { fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } =
  suggestedSongSlice.actions;
export default suggestedSongSlice.reducer;