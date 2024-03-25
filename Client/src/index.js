import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchControlProvider } from './Context/SearchContext';
import { AuthControlProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthControlProvider>
    <SearchControlProvider>
    <App />
    </SearchControlProvider>
    </AuthControlProvider>
  </React.StrictMode>
);
