import { Box, Label, Input, Button, Textarea } from 'theme-ui';
import MainSection from '../UI/MainSectionContainer';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSongActions } from '../../store/user-songs-slice';
import { updateUserSongAction } from '../../store/Redux-saga/sagas';

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
  align-self: center;
  width: 80%;
  margin: 5vh auto;

  max-width: 60rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(317deg, #0c0c0c 0%, #222224ac 100%, rgba(0, 212, 255, 1) 100%);
  padding: 15vh 15vh;
  height: 100%;
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

const NewMusicForm = () => {
  const userSongs = useSelector((state) => state.userSongs.songs);
  const artistNameRef = useRef();
  const songNameRef = useRef();
  const descriptionRef = useRef();
  const photoUrlRef = useRef();

  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      artistNameRef.current.value === '' ||
      songNameRef.current.value === '' ||
      descriptionRef.current.value === '' ||
      photoUrlRef.current.value === ''
    )
      return;

    const song = {
      artist: artistNameRef.current.value,
      songName: songNameRef.current.value,
      songDescription: descriptionRef.current.value,
      photoLink: photoUrlRef.current.value,
      id: `m${Math.floor(Math.random() * 10000 + 1)}`
    };
    let prevUserSong = [];
    if (userSongs) {
      prevUserSong = userSongs.slice();
    }
    prevUserSong.push(song);
    dispatch(updateUserSongAction(prevUserSong));
  };

  return (
    <MainSection>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledBox>
          <Label htmlFor="artistName">Artist&lsquo;s Name</Label>
          <Input
            ref={artistNameRef}
            id="artistName"
            name="artistName"
            defaultValue="Billie Eilish"
          />
        </StyledBox>
        <StyledBox>
          <Label htmlFor="songName">Song Name</Label>
          <Input ref={songNameRef} id="songName" name="songName" defaultValue="Bad Guy" />
        </StyledBox>
        <StyledBox>
          <Label htmlFor="description">Description</Label>
          <DescriptionInput
            ref={descriptionRef}
            id="description"
            name="description"
            defaultValue="Bad Guy is as much about social commentary as it is an unforgettable pop song. Eilish has explained that the track pokes fun at people who try to project an image out into the world that they want others to see them as – whether it’s true or not."
          />
        </StyledBox>
        <StyledBox>
          <Label htmlFor="photoUrl">copy the cover photo url here</Label>
          <Input
            ref={photoUrlRef}
            id="photoUrl"
            name="photoUrl"
            defaultValue="https://www.billboard.com/wp-content/uploads/2020/11/Billie-Eilish-bad-guy-screenshot-2019-Billboard-1548-1605120086.jpg?w=942&h=623&crop=1&resize=942%2C623"
          />
        </StyledBox>
        <Button variant="secondary">Add Music</Button>
      </StyledForm>
    </MainSection>
  );
};
export default NewMusicForm;
