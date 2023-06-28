import React, { useContext } from 'react'

import classes from './Login.module.css'

import Card from '../Elements/Card/Card'
import Button from '../Elements/Button/Button'
import AuthContext from '../Auth/auth-context'

function Login() {
    const authCtx = useContext(AuthContext)

    const submitHandler = () => {
        authCtx.onLogin();
    }

  return (
    <Card className={classes.login}>
        <h1>Pagina de ingresar la cuenta</h1>
        <Button onClick={submitHandler}>Ingresar</Button>
    </Card>
  )
}

export default Login
