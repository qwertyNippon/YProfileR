// App.jsx
import { useContext } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import NavPass from './Components/Nav/NavPass';
import NavLogin from './Components/Nav/NavLogin';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import MyMessages from './Pages/MyMessages/MyMessages';
import MyLessons from './Pages/MyLessons/MyLessons';
import Classroom from './Pages/Classroom/Classroom';
import Calendar from './Pages/Calender/Calendar';
import Statistics from './Pages/Statistics/Statistics';
import Profile from './Pages/Profile/Profile';
import Settings from './Pages/Settings/Settings';
import Community from './Pages/Community/Community';
import FindTeacher from './Pages/FindTeacher/FindTeacher';
import { UserContext } from './context/UserContext';

function App() {
  const location = useLocation();
  const { user } = useContext(UserContext) || {};

  return (
    <>
      {(location.pathname === '/Login' || location.pathname === '/SignUp' || location.pathname === '/Home' || location.pathname === '/') ? <NavLogin /> : <NavPass />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/MyMessages' element={<MyMessages />} />
        <Route path='/MyLessons' element={<MyLessons />} />
        <Route path='/Classroom' element={<Classroom />} />
        <Route path='/Calendar' element={<Calendar />} />
        <Route path='/Statistics' element={<Statistics />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/FindTeacher' element={<FindTeacher />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
