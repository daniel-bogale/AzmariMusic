import { createSlice } from '@reduxjs/toolkit';

const suggestedSongSlice = createSlice({
  name: 'suggested songs',
  initialState: [
    {
      artist: 'The Weekend',
      songName: 'Happy',
      songDescription:
        ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
      id: 'm1',
      photoLink:
        'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1'
    },
    {
      artist: 'The Weekend',
      songName: 'Drunk',
      songDescription:
        ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
      id: 'm2',
      photoLink:
        'https://www.goldderby.com/wp-content/uploads/2020/11/the-weeknd.jpg?w=620&h=360&crop=1'
    },
    {
      artist: 'The Weekend',
      songName: 'Happy',
      songDescription:
        ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
      id: 'm3',
      photoLink:
        'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1'
    }
  ],
  reducers: {
    fetchSuggestedSongsSuccess: (state, action) => {
      return action.payload;
    },
    fetchSuggestedSongsFailure: (state, action) => {
      return [];
    },
    removeSong: (state, action) => {
      const newSuggestedSongs = state.filter((song) => {
        return song.id !== action.payload;
      });

      return newSuggestedSongs;
    }
  }
});

export const { removeSuggestedSong, fetchSuggestedSongsSuccess, fetchSuggestedSongsFailure } =
  suggestedSongSlice.actions.removeSong;
export default suggestedSongSlice.reducer;
