import { Flex, Link, Image } from 'theme-ui';
import logo from '../../Images/Screenshot from 2023-05-18 07-21-46.png';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import home from '../../Images/home-svgrepo-com.svg';
import heart from '../../Images/heart-01-svgrepo-com.svg';
import add from '../../Images/add-square-svgrepo-com.svg';
import search from '../../Images/search-svgrepo-com.svg';

const FlexSideBar = styled(Flex)`
  position: fixed;
  flex-direction: column;
  height: 100%;
  max-width: 14rem;
  color: white;
  z-index: 1000;
  @media (max-width: 40rem) {
    & a span {
      display: none;
    }
    & {
      width: 5rem;
    }
    & #logo {
      position: fixed;
      width: 35vw;
      height: 18vw;
      transform: scale(0.9);
      margin-top: -1rem;
      object-position: top;
    }
    & #link-container {
      margin-top: 25vw;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 2rem;
  filter: invert(100%);

  ${(props) => css`
    src: ${props.src};
  `};
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = styled(Image)`
  object-fit: cover;
  ${(props) =>
    css`
      src: ${props.src};
    `}
`;

const SideBar = () => {
  return (
    <FlexSideBar
      sx={{
        backgroundColor: 'black1'
      }}>
      <Logo src={logo} id="logo" />

      <Flex
        id="link-container"
        sx={{
          marginLeft: '1rem',
          marginTop: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '1rem'
        }}>
        <StyledLink>
          <StyledImage src={home} variant="icon"></StyledImage>
          <span>Home</span>
        </StyledLink>
        <StyledLink>
          <StyledImage src={search} variant="icon"></StyledImage>
          <span>Search</span>{' '}
        </StyledLink>
        <StyledLink>
          {<StyledImage src={add} variant="icon"></StyledImage>} <span>Create Playlist</span>
        </StyledLink>
        <StyledLink>
          {<StyledImage src={heart} variant="icon"></StyledImage>}
          <span> Liked Songs</span>
        </StyledLink>
      </Flex>
    </FlexSideBar>
  );
};

export default SideBar;
