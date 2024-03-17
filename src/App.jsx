import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { GlobalStyle } from './Styles/GlobalStyle'

import './App.css'
import NavPass from './Components/Nav/NavPass'
import NavLogin from './Components/Nav/NavLogin'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Calendar from './Pages/Calender/Calendar'

function App() {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  let NavComponent;
  if (currentUrl.includes('/Login')) {
    NavComponent = NavLogin;
  } else if (currentUrl.includes('/SignUp')){
    NavComponent = NavLogin;
  } else {
    NavComponent = NavPass;
  }

  return (
    <>
        <NavComponent />
        <Routes>
          <Route children path='/' element={<Home />} />
          <Route children path='/Login' element={<Login />} />
          <Route children path='/SignUp' element={<SignUp />} />
          <Route children path='/Calendar' element={<Calendar />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
