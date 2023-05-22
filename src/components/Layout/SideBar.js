import { Flex, Link, Image } from 'theme-ui';
import logo from '../../Images/Screenshot from 2023-05-18 07-21-46.png';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import home from '../../Images/home-svgrepo-com.svg';
import heart from '../../Images/heart-01-svgrepo-com.svg';
import add from '../../Images/add-square-svgrepo-com.svg';
import search from '../../Images/search-svgrepo-com.svg';

const StyledImage = styled(Image)`
  width: 10%;
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
    font-size: 1.1rem;
    transform: scale(1.01);
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
    <Flex
      sx={{
        position: 'fixed',
        flexDirection: 'column',
        height: '100%',
        maxWidth: '14rem',
        backgroundColor: 'black1',
        color: 'white',
        zIndex: '1000'
      }}>
      <Logo src={logo} />

      <Flex
        sx={{
          marginLeft: '1rem',
          marginTop: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '1rem'
        }}>
        <StyledLink>{<StyledImage src={home} variant="icon"></StyledImage>} Home</StyledLink>
        <StyledLink>{<StyledImage src={search} variant="icon"></StyledImage>} Search</StyledLink>
        <StyledLink>
          {<StyledImage src={add} variant="icon"></StyledImage>} Create Playlist
        </StyledLink>
        <StyledLink>
          {<StyledImage src={heart} variant="icon"></StyledImage>} Liked Songs
        </StyledLink>
      </Flex>
    </Flex>
  );
};

export default SideBar;
