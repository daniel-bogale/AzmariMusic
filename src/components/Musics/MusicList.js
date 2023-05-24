import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Card, Image } from 'theme-ui';
import ModifyIcon from '../../Images/file-edit-svgrepo-com.svg';
import AddToCartIcon from '../../Images/add-to-cart-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { songActions, userSongActions } from '../../store/user-songs-slice';
import { modifySuggestedSong } from '../../store/suggested-song-slice';
import { updateSuggestedSongsAction, updateUserSongAction } from '../../store/Redux-saga/sagas';

const StyledBox = styled(Box)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));

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

  #artist-name {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  #song-name {
    display: inline-block;
    margin: 0 auto;
    font-weight: 100;
  }

  & p {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
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

  &:hover #action-icon {
    display: block;
  }
`;

const CoverImageContainer = styled(Box)`
  position: relative;
  overflow: hidden;
`;

const StyledMusicCoverImage = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  padding: 3px;
  height: 18rem;
`;

const ModifyMusicIcon = styled(Image)`
  display: none;
  position: absolute;
  width: 4rem;
  height: 4rem;
  right: 0.7rem;
  top: 0.7rem;
  border-radius: 10px;
  background-color: #ffffffca;
  padding: 0.5rem;
  padding-right: 0;
  border-top-right-radius: 0;
  ${(props) =>
    props.type === 'suggestedMusic' &&
    css`
      & {
        left: 0.7rem;
        padding: 0.4rem;
        border-radius: 1rem;
      }
    `}

  &:hover {
    background-color: #ffffff1f;
    backdrop-filter: blur(4px);
  }
`;

const MusicList = (props) => {
  const suggestedSongs = useSelector((state) => state.suggestedSongs.songs);
  const userSongs = useSelector((state) => state.userSongs.songs);

  const dispatch = useDispatch();

  const saveSongHandler = (song, type) => {
    if (type !== 'suggestedMusic') return;

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
          <CoverImageContainer id="image-container">
            <StyledMusicCoverImage src={music.photoLink} />
            {props.type === 'userMusic' && (
              <ModifyMusicIcon
                type={props.type}
                src={ModifyIcon}
                id="action-icon"></ModifyMusicIcon>
            )}
            {props.type === 'suggestedMusic' && (
              <ModifyMusicIcon
                type={props.type}
                src={AddToCartIcon}
                id="action-icon"></ModifyMusicIcon>
            )}
          </CoverImageContainer>
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
