import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { GlobalContext } from './context/GlobalContext'
import ContextWrapper from "./context/ContextWrapper";

import './App.css'
import NavPass from './Components/Nav/NavPass'
import NavLogin from './Components/Nav/NavLogin'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import MyMessages from './Pages/MyMessages/MyMessages'
import MyLessons from './Pages/MyLessons/MyLessons'
import Classroom from './Pages/Classroom/Classroom'
import Calendar from './Pages/Calender/Calendar'
import Statistics from './Pages/Statistics/Statistics'
import Profile from './Pages/Profile/Profile'
import Settings from './Pages/Settings/Settings'
import Community from './Pages/Community/Community'
import FindTeacher from './Pages/FindTeacher/FindTeacher'

function App() {

  return (
    <>
      <ContextWrapper>
          {(location.pathname === '/Login' || location.pathname === '/SignUp' || location.pathname === '/Home' || location.pathname === '/') ? <NavLogin /> : <NavPass />}
          <Routes>
            <Route children path='/' element={<Home />} />
            <Route children path='/Login' element={<Login />} />
            <Route children path='/SignUp' element={<SignUp />} />
            <Route children path='/MyMessages' element={<MyMessages />} />
            <Route children path='/MyLessons' element={<MyLessons />} />
            <Route children path='/Classroom' element={<Classroom />} />
            <Route children path='/Calendar' element={<Calendar />} />
            <Route children path='/Statistics' element={<Statistics />} />
            <Route children path='/Profile' element={<Profile />} />
            <Route children path='/Settings' element={<Settings />} />
            <Route children path='/Community' element={<Community />} />
            <Route children path='/FindTeacher' element={<FindTeacher />} />
            <Route children path='/Home' element={<Home />} />
          </Routes>
          <Footer />
      </ContextWrapper>
    </>
  )
}

export default App
