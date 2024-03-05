import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { GlobalStyle } from './Styles/GlobalStyle'

import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route children path='/' element={<Home  />} /> */}
        <Route children path='/' element={<Login  />} />
        {/* <Route children path='/SignUp' element={<SignUp  />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
