import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './router'
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App