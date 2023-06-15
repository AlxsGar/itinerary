import React, { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Home/Home'
import AuthContext from './Components/Auth/auth-context';
import Login from './Components/Login/Login';
import TeacherSchedule from './Components/ViewSchedules/TeacherSchedule/TeacherSchedule';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Navbar/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && ctx.currentPageState === 0 && <Home/>}
        {ctx.isLoggedIn && ctx.currentPageState === 1 && <TeacherSchedule/>}
      </main>
    </React.Fragment>
  );
}

export default App;
