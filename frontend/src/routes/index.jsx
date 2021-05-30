import { Switch } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './auth.routes';

// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import Admin from '../pages/Admin';
// import Details from '../pages/Details';

const Routes = () => {

  const { logged } = useAuth();

  return (
    <Switch>
      { logged ? <App /> : <Auth />}
    </Switch>
  )
}

export default Routes;