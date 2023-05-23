import { ThemeProvider } from 'theme-ui';
import MainHeader from '../src/components/Layout/MainHeader';
import theme from './rebass/theme';
import Musics from './components/Musics/Musics';
import NewMusicForm from './components/Musics/NewMusicForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <Musics />

      <NewMusicForm />
    </ThemeProvider>
  );
}

export default App;
