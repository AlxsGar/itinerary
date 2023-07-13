import React, { useContext } from 'react'
import Button from '../Elements/Button/Button'
import Card from '../Elements/Card/Card'
import AuthContext from '../Auth/auth-context'

import classes from './ScheduleMenu.module.css'

function ScheduleMenu() {

    const authCtx = useContext(AuthContext);

    const handleTeacherSchedule = () => {
        authCtx.onSelectPage(6);
    }

  return (
    <React.Fragment>
        <Card className={classes.scheduleMenu}>
            <h1>Horarios de maestros</h1>
            <Button onClick={handleTeacherSchedule}>Ver</Button>
        </Card>
        <Card className={classes.scheduleMenu}>
            <h1>Horarios de grupos</h1>
            <Button onClick={handleTeacherSchedule}>Ver</Button>
        </Card>
    </React.Fragment>
  )
}

export default ScheduleMenu