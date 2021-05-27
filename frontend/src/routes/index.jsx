import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

// import App from './app.routes';
// import Admin from './admin.routes';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Details from '../pages/Details';

const Router = () => {

  // const { logged } = useAdmin();

  return (
    <BrowserRouter>
      <Switch>
        {/* { logged ? <App /> : <Admin />} */}
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;