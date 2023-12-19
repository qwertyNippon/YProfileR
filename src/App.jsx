import { useState } from 'react'
import { GlobalStyle } from './Styles/GlobalStyle'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Route />
      <Footer />
    </>
  )
}

export default App
