import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Card, Image } from 'theme-ui';
import Modify from '../../Images/file-edit-svgrepo-com.svg';
import AddToCart from '../../Images/add-to-cart-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { songActions, userSongActions } from '../../store/user-songs-slice';
import { modifySuggestedSong } from '../../store/suggested-song-slice';
import { updateSuggestedSongsAction, updateUserSongAction } from '../../store/Redux-saga/sagas';

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
  ${(props) => css`
    background-color: ${props.theme.colors.black2};
    &:hover {
      background-color: ${props.theme.colors.black3};
      transform: scale(1.01);
      transition: all 0.2s;
    }
  `}

  ${(props) =>
    props.type === 'suggestedMusic' &&
    css`
      &:hover::after {
        position: fixed;
        top: 1rem;
        left: 1rem;
        padding: 3px;
        content: src(${Modify});
        background-image: url(${AddToCart});
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
        border-radius: 10px;
        content: '';
        display: inline-block;
        height: 3rem;
        width: 3rem;
        background-size: 3rem;
      }
    `}
  ${(props) =>
    props.type === 'userMusic' &&
    css`
      &:hover &::after {
        background: url(Modify);
        content: 'some';
      }
    `}
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
`;

const MusicList = (props) => {
  const suggestedSongs = useSelector((state) => state.suggestedSongs.songs);
  const userSongs = useSelector((state) => state.userSongs.songs);

  const dispatch = useDispatch();

  const saveSongHandler = (song, type) => {
    if (type === 'suggestedMusic') {
      let prevSongs = [];
      if (userSongs) {
        prevSongs = userSongs.slice();
      }
      const savedSongid = song.id;
      const existingSong = prevSongs.find((song) => song.id === savedSongid);
      if (existingSong) {
        return;
      }
      prevSongs.push(song);

      dispatch(updateUserSongAction(prevSongs));

      const filteredSongs = suggestedSongs.filter((music) => {
        return music.id !== song.id;
      });
      dispatch(updateSuggestedSongsAction(filteredSongs));
    }
  };

  let cartContents =
    props.type === 'suggestedMusic' ? 'No Suggestion for now' : 'No Music is added';

  let musics = suggestedSongs;
  if (props.type !== 'suggestedMusic') {
    musics = userSongs;
  }
  if (musics?.length > 0) {
    cartContents = musics.map((music) => {
      return (
        <StyledCard
          type={props.type}
          onClick={saveSongHandler.bind(this, music, props.type)}
          key={music.id}>
          <div id="image-container">
            <StyledImage src={music.photoLink} />
          </div>
          <h3 id="artist-name">{music.artist}</h3>
          <h4 id="song-name">{music.songName}</h4>
          <p id="song-discription">{music.songDescription}</p>
        </StyledCard>
      );
    });
  }

  return (
    <>
      <StyledBox>{cartContents}</StyledBox>
    </>
  );
};

export default MusicList;
