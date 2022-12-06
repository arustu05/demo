import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../../bootstrap/node_modules/bootstrap/dist/css/bootstrap.css';
import '../../bootstrap/node_modules/bootstrap/dist/js/bootstrap.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
