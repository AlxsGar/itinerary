import React, { useContext } from 'react'
import AuthContext from '../Auth/auth-context'
import Button from '../Elements/Button/Button'
import Card from '../Elements/Card/Card'

import classes from './Administration.module.css'

function Administration() {

    const authCtx = useContext(AuthContext)

    const teacherHandler = () => {
        authCtx.onSelectPage(4);
    }

    const scheduleHandler = () => {
        authCtx.onSelectPage(5);
    }

    return (
        <React.Fragment>
            <Card className={classes.admin}>
                <h1>Administra Maestros</h1>
                <Button onClick={teacherHandler}>Administra Maestros</Button>
            </Card>
            <Card className={classes.admin}>
                <h1>Administra Materias</h1>
                <Button onClick={scheduleHandler}>Administra Materias</Button>
            </Card>
        </React.Fragment>
    )
}

export default Administration