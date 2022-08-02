import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {SelectedContextProvider} from './contexts/selected-location-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SelectedContextProvider>
      <App />
    </SelectedContextProvider>    
  </React.StrictMode>
);


