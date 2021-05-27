import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';

const AppRoutes = () => {
  <Switch>
    <Route path="/" exact component={Register} />
  </Switch>
}

export default AppRoutes;