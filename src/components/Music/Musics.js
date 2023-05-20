import MusicList from "./MusicList";
import { Flex } from "theme-ui";
import styled from "@emotion/styled";

const StyledFlex = styled(Flex)`
  padding-top: 7rem;
  padding-left: 17rem;
  padding-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    background-color: black;
  }
`;

const Musics = () => {
  return (
    <StyledFlex>
      <MusicList></MusicList>
    </StyledFlex>
  );
};

export default Musics;
