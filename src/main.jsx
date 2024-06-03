import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import ContextWrapper from "./context/ContextWrapper";
import { UserProvider } from './context/UserContext'; // Import UserProvider
import ProviderLayer from "./ProviderLayer"
import '../i18n.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <UserProvider> 
          <ProviderLayer />
        </UserProvider>
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import ProviderLayer from './ProviderLayer'
// import '../i18n.js'
// import App from './App.jsx'
// import './index.css'
// import reportWebVitals from "./reportWebVitals";
// import ContextWrapper from "./context/ContextWrapper";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ContextWrapper>
//         <UserProvider>
//           <ProviderLayer />
//         </UserProvider>
//       </ContextWrapper>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

// reportWebVitals();


