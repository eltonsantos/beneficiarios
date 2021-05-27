import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';

import App from './App';
import { AdminProvider } from './hooks/admin';

ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
);