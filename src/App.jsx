import { useState } from 'react'
import { GlobalStyle } from './Styles/GlobalStyle'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

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
