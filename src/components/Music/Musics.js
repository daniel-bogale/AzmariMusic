import MusicList from "./MusicList";
import { Flex } from "theme-ui";
import styled from "@emotion/styled";

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

const StyledFlex = styled(Flex)`
  padding-top: 6rem;
  padding-left: 17rem;
  padding-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s;
  flex-direction: column;
  gap: 5rem;
  color: white;
  & h3 {
    color: white;
    margin: 0;
    margin-bottom: 1rem;
  }
  &:hover {
    background-color: black;
  }
`;

const Musics = () => {
  return (
    <StyledFlex>
      <div>
        <h3>Suggested Music</h3>
        <MusicList musics={DummyMusics}></MusicList>
      </div>

      <div>
        <h3>Your Musics</h3>
        <MusicList musics={[]}></MusicList>
      </div>
    </StyledFlex>
  );
};

export default Musics;
