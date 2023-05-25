import { Box, ThemeProvider } from 'theme-ui';
import MainHeader from '../src/components/Layout/MainHeader';
import theme from './rebass/theme';
import Musics from './components/Musics/Musics';
import NewMusicForm from './components/Musics/NewMusicForm';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditMusicForm from './components/Musics/EditMusicForm';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { toggleIsSuccess } from './store/user-songs-slice';

function App() {
  const editCardVisible = useSelector((state) => state.ui.editCardVisible);
  const userSongsFetchError = useSelector((state) => state.userSongs.error);
  const isFetching = useSelector((state) => state.userSongs.isFetching);
  const isSuccess = useSelector((state) => state.userSongs.isSuccess);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(toggleIsSuccess());
      }, 2000);
    }
  });

  const StyledBox = styled(Box)`
    position: fixed;
    left: 50%;
    background-color: white;
    margin-bottom: 1rem;
    z-index: 10000;
    padding: 0 1rem;
    margin: 0 auto;
    text-align: center;
    transform: translateX(-50%);
    border-radius: 5px;
    & p {
      padding: 0;
      margin: 0;
    }
    & #error-message {
      color: red;
    }
    & #success-message {
      color: #ff9900;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        {isFetching && <p id="fetching-message">Loading data...</p>}
        {!isFetching && userSongsFetchError.isError && (
          <p id="error-message">Error Occurred: Check your Internet</p>
        )}
        {isSuccess && !isFetching && !userSongsFetchError.isError && (
          <p id="success-message">Loaded Successfuly</p>
        )}
      </StyledBox>

      <MainHeader />
      <Musics />

      {editCardVisible &&
        ReactDOM.createPortal(<EditMusicForm />, document.getElementById('backdrop-root'))}

      <NewMusicForm type="addMusic"></NewMusicForm>
    </ThemeProvider>
  );
}

export default App;
