import MusicList from './MusicList';

import MainSection from '../UI/MainSectionContainer';
import { useSelector } from 'react-redux';

const Musics = () => {
  const suggestedSongs = useSelector((state) => state.suggestedSongs);
  const userSongs = useSelector((state) => state.userSongs);
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
