import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { Layout } from './components';

//Fonts
import "@fontsource/russo-one";
import "@fontsource/russo-one/400.css";
import "@fontsource/fjalla-one";
import "@fontsource/fjalla-one/400.css";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
