import { ThemeProvider } from "theme-ui";
import MainHeader from "../src/components/Layout/MainHeader";
import theme from "./store/theme";
import MusicList from "./components/Music/MusicList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <MusicList />
    </ThemeProvider>
  );
}

export default App;
