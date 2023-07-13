import React, { useContext } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Home/Home'
import AuthContext from './Components/Auth/auth-context';
import Login from './Components/Login/Login';
//import TeacherSchedule from './Components/ViewSchedules/TeacherSchedule/TeacherSchedule';
import Administration from './Components/Administration/Administration';
import AdminTeacher from './Components/Administration/AdminTeacher';
import Registry from './Components/Administration/Registry';
import ScheduleMenu from './Components/ViewSchedules/ScheduleMenu';
import TeachersMenu from './Components/ViewSchedules/TeacherSchedule/TeachersMenu';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Navbar />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && ctx.currentPageState === 0 && <Home />}
        {ctx.isLoggedIn && ctx.currentPageState === 1 && <ScheduleMenu />}
        {ctx.isLoggedIn && ctx.currentPageState === 3 && <Administration />}
        {ctx.isLoggedIn && ctx.currentPageState === 4 && <AdminTeacher />}
        {ctx.isLoggedIn && ctx.currentPageState === 5 && <Registry />}
        {ctx.isLoggedIn && ctx.currentPageState === 6 && <TeachersMenu />}
      </main>
    </React.Fragment>
  );
}

export default App;
