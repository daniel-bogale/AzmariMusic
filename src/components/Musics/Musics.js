import MusicList from './MusicList';

import MainSection from '../UI/MainSectionContainer';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  postSuggestedSongsAction,
  requestSuggestedSongsAction,
  requestUserSongsAction
} from '../../store/Redux-saga/sagas';
import suggestedSongSlice from '../../store/suggested-song-slice';
import { isFetching } from '../../store/user-songs-slice';

const TEST_SONGS = [
  {
    artist: 'The Weekend',
    id: 'm1',
    photoLink:
      'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1',
    songDescription:
      ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
    songName: 'Happy'
  },
  {
    artist: 'The Weekend',
    id: 'm2',
    photoLink:
      'https://www.goldderby.com/wp-content/uploads/2020/11/the-weeknd.jpg?w=620&h=360&crop=1',
    songDescription:
      ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
    songName: 'Drunk'
  },
  {
    artist: 'Jon Batiste',
    id: 'm3',
    photoLink: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Jon_Batiste_-_We_Are.png',
    songDescription:
      ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
    songName: 'We Are'
  }
];

const Musics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postSuggestedSongsAction(TEST_SONGS));
  }, []);
  useEffect(() => {
    dispatch(requestSuggestedSongsAction());
    dispatch(requestUserSongsAction());
  }, []);

  return (
    <MainSection type="">
      <div>
        <h3 id="user-musics">Your Musics</h3>
        <MusicList type="userMusic"></MusicList>
      </div>
      <div>
        <h3 id="suggested-musics">Suggested Music</h3>
        <MusicList type="suggestedMusic"></MusicList>
      </div>
    </MainSection>
  );
};

export default Musics;
