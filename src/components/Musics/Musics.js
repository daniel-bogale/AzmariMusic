import MusicList from "./MusicList";

import MainSection from "../UI/MainSectionContainer";

const DummyMusics = [
  {
    artist: "The Weekend",
    songName: "Happy",
    songDescription:
      " Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae",
    id: "m1",
    photoLink:
      "https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1",
  },
];

const Musics = () => {
  return (
    <MainSection>
      <div>
        <h3>Suggested Music</h3>
        <MusicList musics={DummyMusics}></MusicList>
      </div>

      <div>
        <h3>Your Musics</h3>
        <MusicList musics={[]}></MusicList>
      </div>
    </MainSection>
  );
};

export default Musics;
