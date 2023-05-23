import { ThemeProvider } from 'theme-ui';
import MainHeader from '../src/components/Layout/MainHeader';
import theme from './rebass/theme';
import Musics from './components/Musics/Musics';
import NewMusicForm from './components/Musics/NewMusicForm';
import { useEffect } from 'react';

// const DummyMusics = [
//   {
//     artist: 'The Weekend',
//     songName: 'Happy',
//     songDescription:
//       ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
//     id: 'm1',
//     photoLink:
//       'https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?w=1581&h=1054&crop=1'
//   },
//   {
//     artist: 'The Weekend',
//     songName: 'Drunk',
//     songDescription:
//       ' Lorem apiente libero quam tempore exercitationem ex odio maxime fugaodiPariatur quos aliquid quae',
//     id: 'm2',
//     photoLink:
//       'https://www.goldderby.com/wp-content/uploads/2020/11/the-weeknd.jpg?w=620&h=360&crop=1'
//   }
// ];

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
