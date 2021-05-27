import { Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Details from '../pages/Details';

const AdminRoutes = () => {
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/admin" component={Admin} />
    <Route path="/details" component={Details} />
  </Switch>
}

export default AdminRoutes;