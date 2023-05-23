import MusicList from './MusicList';

import MainSection from '../UI/MainSectionContainer';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestSuggestedSongs } from '../../store/Redux-saga/sagas';
import { fetchNow } from '../../store/Redux-saga/API';
import { fetchSuggestedSongsSuccess } from '../../store/suggested-song-slice';

const Musics = () => {
  const suggestedSongs = useSelector((state) => state.suggestedSongs.songs);
  const userSongs = useSelector((state) => state.userSongs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestSuggestedSongs());
    const func = async () => {
      const val = await fetchNow();
      dispatch(fetchSuggestedSongsSuccess(val));
    };
  }, []);

  return (
    <MainSection>
      <div>
        <h3>Suggested Music</h3>
        <MusicList type="suggestedMusic" musics={suggestedSongs}></MusicList>
      </div>

      <div>
        <h3>Your Musics</h3>
        <MusicList type="userMusic" musics={userSongs}></MusicList>
      </div>
    </MainSection>
  );
};

export default Musics;
