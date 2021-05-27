import { BrowserRouter } from 'react-router-dom';

import { useAdmin } from '../hooks/admin';

import App from './app.routes';
import Admin from './admin.routes';

const Router = () => {

  const { logged } = useAdmin();

  return (
    <BrowserRouter>
      { logged ? <App /> : <Admin />}
    </BrowserRouter>
  )
}

export default Router;