import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { SearchControlProvider } from './Context/SearchContext';
import { AuthControlProvider } from './Context/AuthContext';
import ThemProvider from './Context/ThemContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <ThemProvider>
   <AuthControlProvider>
    <SearchControlProvider>
    <App />
    </SearchControlProvider>
    </AuthControlProvider>
   </ThemProvider>
  </React.StrictMode>
);
