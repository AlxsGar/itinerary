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

    const registryHandler = () => {
        authCtx.onSelectPage(5);
    }

    return (
        <React.Fragment>
            <Card className={classes.admin}>
                <h1>Registro</h1>
                <p>Registra y/o edita la información de los maestros y materias.</p>
                <Button onClick={registryHandler}>Ir a registro</Button>
            </Card>
            <Card className={classes.admin}>
                <h1>Administración de maestros</h1>
                <p>
                    Asigna las materias a los maestros, 
                    ve sus horarios o edita la información.
                </p>
                <Button onClick={teacherHandler}>Administra Maestros</Button>
            </Card>
        </React.Fragment>
    )
}

export default Administration