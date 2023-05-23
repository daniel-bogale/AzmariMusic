import MusicList from './MusicList';

import MainSection from '../UI/MainSectionContainer';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  postRequestSuggestedSongsAction,
  requestSuggestedSongsAction
} from '../../store/Redux-saga/sagas';

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
    dispatch(postRequestSuggestedSongsAction(TEST_SONGS));
    dispatch(requestSuggestedSongsAction());
  }, []);

  return (
    <MainSection>
      <div>
        <h3>Suggested Music</h3>
        <MusicList type="suggestedMusic"></MusicList>
      </div>

      <div>
        <h3>Your Musics</h3>
        <MusicList type="userMusic"></MusicList>
      </div>
    </MainSection>
  );
};

export default Musics;
