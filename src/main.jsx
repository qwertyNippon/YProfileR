import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import ContextWrapper from "./context/ContextWrapper";
import { UserProvider } from './context/UserContext'; // Import UserProvider
import ProviderLayer from "./ProviderLayer"
import App from './App';
import '../i18n.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ContextWrapper>
        <BrowserRouter>
          <ProviderLayer />
        </BrowserRouter>
      </ContextWrapper>
    </UserProvider>
  </React.StrictMode>,
);

// reportWebVitals();


