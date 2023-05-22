import MusicList from './MusicList';

import MainSection from '../UI/MainSectionContainer';

const Musics = (props) => {
  return (
    <MainSection>
      <div>
        <h3>Suggested Music</h3>
        <MusicList type="suggestedMusic" musics={props.DummyMusics}></MusicList>
      </div>

      <div>
        <h3>Your Musics</h3>
        <MusicList type="userMusic" musics={[]}></MusicList>
      </div>
    </MainSection>
  );
};

export default Musics;
