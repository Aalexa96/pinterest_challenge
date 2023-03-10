
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Providers from './contexts/Providers';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  // </React.StrictMode>
);
