import { ThemeProvider } from "theme-ui";
import MainHeader from "../src/components/Layout/MainHeader";
import theme from "./store/theme";
import Musics from "./components/Music/Musics";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <Musics />
    </ThemeProvider>
  );
}

export default App;
