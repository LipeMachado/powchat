import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyled';
import Routes from './router'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  )
}

export default App