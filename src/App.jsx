import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyle'

import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route children path='/login' element={<Login  />} />
        <Route children path='/signup' element={<SignUp  />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
