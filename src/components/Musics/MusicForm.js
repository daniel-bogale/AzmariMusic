import { Box, Label, Input, Button, Textarea } from 'theme-ui';
import MainSection from '../UI/MainSectionContainer';
import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSongActions } from '../../store/user-songs-slice';
import { updateUserSongAction } from '../../store/Redux-saga/sagas';
import { uiSliceActions } from '../../store/ui-slice';

const StyledBox = styled(Box)`
  margin-bottom: 2rem;
  & label {
    margin-bottom: 0.5rem;
  }

  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

const StyledForm = styled.form`
  color: white;
  align-self: center;
  width: 80%;
  margin: 5vh auto;

  max-width: 60rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(317deg, #0c0c0c 0%, #141414ac 100%);
  padding: 15vh 15vh;
  height: 100%;
  border-radius: 4px;
  & .invalidInput {
    border-color: red;
  }
  @media (max-width: 70rem) {
    padding: 2rem;
    width: 98%;
    margin-right: 2rem;
  }
`;

const DescriptionInput = styled(Textarea)`
  font-size: 1.2rem;

  height: 9rem;
  resize: none;
`;

const MusicForm = (props) => {
  const artistNameRef = useRef();
  const songNameRef = useRef();
  const descriptionRef = useRef();
  const photoUrlRef = useRef();
  const userSongs = useSelector((state) => state.userSongs.songs);

  const dispatch = useDispatch();

  const clearAllInputValues = useCallback(() => {
    artistNameRef.current.value = '';
    songNameRef.current.value = '';
    descriptionRef.current.value = '';
    photoUrlRef.current.value = '';
  });

  let placeHolders = {
    artist: 'Bellie Eillish',
    photoLink:
      'https://www.billboard.com/wp-content/uploads/2020/11/Billie-Eilish-bad-guy-screenshot-2019-Billboard-1548-1605120086.jpg?w=942&h=623&crop=1&resize=942%2C623',
    songDescription:
      'Bad Guy is as much about social commentary as it is an unforgettable pop song. Eilish has explained that the track pokes fun at people who try to project an image out into the world that they want others to see them as – whether it’s true or not.',
    songName: 'Bad Guy'
  };

  if (props.songIndexToEdit !== null && props.songIndexToEdit != undefined) {
    const i = props.songIndexToEdit;
    placeHolders = userSongs[i];
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (artistNameRef.current.value === '') {
      artistNameRef.current.className += ' invalidInput';
      formIsValid = false;
    }
    if (songNameRef.current.value === '') {
      songNameRef.current.className += ' invalidInput';
      formIsValid = false;
    }

    if (descriptionRef.current.value === '') {
      descriptionRef.current.className += ' invalidInput';
      formIsValid = false;
    }
    if (photoUrlRef.current.value === '') {
      photoUrlRef.current.className += ' invalidInput';
      formIsValid = false;
    }
    const song = {
      artist: artistNameRef.current.value,
      songName: songNameRef.current.value,
      songDescription: descriptionRef.current.value,
      photoLink: photoUrlRef.current.value,
      id: `m${Math.floor(Math.random() * 10000 + 1)}`
    };
    clearAllInputValues();

    if (!formIsValid) return;

    if (props.type === 'edit') {
      let copyUserSong = userSongs.slice();
      if (!userSongs) return;
      copyUserSong[props.songIndexToEdit] = song;
      dispatch(updateUserSongAction(copyUserSong));
      dispatch(uiSliceActions.toggleEditCard());
    } else if (props.type === 'new') {
      let copyUserSong = [];
      if (userSongs) {
        copyUserSong = userSongs.slice();
      }
      copyUserSong.push(song);
      dispatch(updateUserSongAction(copyUserSong));
    }
  };

  const cancelHandler = () => {
    dispatch(uiSliceActions.toggleEditCard());
  };

  let buttonName = 'Add Music';
  if (props.type === 'edit') buttonName = 'Edit';

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledBox>
        <Label htmlFor="artistName">Artist&lsquo;s Name</Label>
        <Input
          ref={artistNameRef}
          id="artistName"
          name="artistName"
          defaultValue={placeHolders.artist}
        />
      </StyledBox>
      <StyledBox>
        <Label htmlFor="songName">Song Name</Label>
        <Input
          ref={songNameRef}
          id="songName"
          name="songName"
          defaultValue={placeHolders.songName}
        />
      </StyledBox>
      <StyledBox>
        <Label htmlFor="description">Description</Label>
        <DescriptionInput
          ref={descriptionRef}
          id="description"
          name="description"
          defaultValue={placeHolders.songDescription}
        />
      </StyledBox>
      <StyledBox>
        <Label htmlFor="photoUrl">copy the cover photo url here</Label>
        <Input
          ref={photoUrlRef}
          id="photoUrl"
          name="photoUrl"
          defaultValue={placeHolders.photoLink}
        />
      </StyledBox>
      <Button variant="secondary">{buttonName}</Button>
      {props.type === 'edit' && (
        <Button ml="1rem" variant="secondary" onClick={cancelHandler}>
          Cancel
        </Button>
      )}
    </StyledForm>
  );
};
export default MusicForm;
