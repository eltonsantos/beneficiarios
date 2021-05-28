import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes />
    </Router>
  );
}

export default App;
