import React, { useContext } from "react";

import classes from "./Home.module.css";
import Card from "../Elements/Card/Card";
import Button from "../Elements/Button/Button";
import AuthContext from "../Auth/auth-context";

function Home() {

  const authCtx = useContext(AuthContext)

  const adminHandler = () => {
    authCtx.onSelectPage(3);
  }

  const scheduleHandler = () => {
    authCtx.onSelectPage(1);
  }

  const teacherHandler = () => {
    authCtx.onSelectPage(2);
  }

  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Administration</h1>
        <p>Administra los maestros, ve sus materias, horarios y demas información</p>
        <Button onClick={adminHandler}>Ir a maestros</Button>
      </Card>
      <Card className={classes.home}>
        <h1>Ver Horarios</h1>
        <p>Ve los horarios de los grupos registrados</p>
        <Button onClick={scheduleHandler}>Ir a horarios</Button>
      </Card>
      <Card className={classes.home}>
        <h1>Ver Maestros</h1>
        <p>Administra los maestros, ve sus materias, horarios y demas información</p>
        <Button onClick={teacherHandler}>Ir a maestros</Button>
      </Card>
    </React.Fragment>
  );
}

export default Home;
