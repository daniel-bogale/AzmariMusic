import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Card, Image, Flex } from "theme-ui";

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
const StyledBox = styled(Box)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));

  &:hover {
    background-color: #0000005a;
    transition: all 0.5s;
  }
`;

const StyledCard = styled(Card)`
  cursor: pointer;
  border-radius: 5px;
  margin-right: 1rem;
  padding: 0.8rem;
  color: white;
  overflow: hidden;
  #image-container {
    overflow: hidden;
    height: 10.5rem;
  }
  #artist-name {
    margin-bottom: 0;
  }
  #song-name {
    display: inline-block;
    margin: 0 auto;
    font-weight: 100;
  }

  & p {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.2s;
  }
  ${(props) =>
    css`
      background-color: ${props.theme.colors.black2};
      &:hover {
        background-color: ${props.theme.colors.black3};
        transform: scale(1.01);
        transition: all 0.2s;
      }
    `}
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
`;

const MusicList = () => {
  return (
    <StyledFlex>
      <StyledBox>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.goldderby.com/wp-content/uploads/2020/11/the-weeknd.jpg?w=620&h=360&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
        <StyledCard>
          <div id="image-container">
            <StyledImage src="https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1" />
          </div>
          <h3 id="artist-name">The weekend</h3>
          <h4 id="song-name">peace</h4>
          <p id="song-discription">
            Lorem apiente libero quam tempore exercitationem ex odio maxime fuga
            odiPariatur quos aliquid quae.
          </p>
        </StyledCard>
      </StyledBox>
    </StyledFlex>
  );
};

export default MusicList;
