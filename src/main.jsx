import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './ProviderLayer'

import App from './App.jsx'
import './index.css'
// import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./context/ContextWrapper";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <ProviderLayer />
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
);

// reportWebVitals();